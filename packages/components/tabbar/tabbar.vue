<template>
  <div
    class="c-tabbar"
    :class="[
      type ? `c-tabbar-${type}` : ''
    ]
  ">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cTabbar',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scope lang="scss">
  @import './style';
</style>
