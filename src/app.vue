<template>
  <div>
    <div>
      Header
      <router-link to="">
        Home
      </router-link>
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
    <div>
      Footer
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>

</style>
