import axios from 'axios'
import handleError from '@/utils/handleError'
import store from '../store/index'
import publciConfig from '../config/index'

const CancelToken = axios.CancelToken

// process.env.NODE_ENV === 'development' ? config.baseUrl.pro : config.baseUrl.dev,
class HttpRequest {
  constructor (baseUrl) {
    this.basrUrl = baseUrl
    this.pending = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.basrUrl,
      header: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  removePending (key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  interceptors (instance) {
    // Add a request interceptor
    instance.interceptors.request.use(config => {
      // Do something before request is sent
      const token = store.state.token

      let isPublic = false
      publciConfig.publicPath.map((path) => {
        isPublic = isPublic || path.test(config.url)
      })
      if (token && !isPublic) {
        config.headers.Authorization = 'Bearer ' + token
      }

      const key = config.url + '&' + config.method
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) => {
        // An executor function receives a cancel function as a parameter
        this.pending[key] = c
      })
      return config
    }, error => {
      // Do something with request error
      handleError(error)
      return Promise.reject(error)
    })

    // Add a response interceptor
    instance.interceptors.response.use((response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      const key = response.config.url + '&' + response.config.method
      this.removePending(key)
      if (response.status === 200) {
        return Promise.resolve(response.data)
      } else {
        return Promise.reject(response)
      }
    }, error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      handleError(error)
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this, this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }

  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
