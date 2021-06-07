<template>
  <div>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    {{ $store.state.count }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>

<style scoped>

</style>
