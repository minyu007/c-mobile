<template>
  <div class="v-toast">
    <c-btn type="primary" @click="toastClick">toast</c-btn>
    <c-btn type="primary" style="margin-top: 1000px;" @click="toastClick">toast</c-btn>
  </div>
</template>

<script>
export default {
  methods: {
    toastClick () {
      this.$Toast({
        texts: 'toast',
        duration: 3000,
        cb: () => {
          console.log('cb')
        }
      })
      this.$Toast({
        texts: [
          'toast',
          'toast1321312313213'
        ],
        duration: 5000,
        cb: () => {
          console.log('cb')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './style';
</style>
