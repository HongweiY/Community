<template>
  <div>
    <panel></panel>
    <router-view></router-view>
  </div>
</template>

<script>
import Panel from '../components/Panel'

export default {
  name: 'Home',
  components: {
    Panel
  }
}
</script>

<style scoped lang="scss">

</style>
