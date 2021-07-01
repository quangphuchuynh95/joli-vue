<template>
  <div class="w-1/2">
    <j-count-down value="2021-07-2 00:00:00" />
    <j-sparkline :data="[1,1,3,1]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JCountDown from '../libs/components/j-count-down.vue';
import JSparkline from '../libs/components/j-sparkline.vue';

export default defineComponent({
  name: 'App',
  components: {JSparkline, JCountDown },
  data() {
    return {
      a: 102
    }
  },
  methods: {
    s(e) {
      console.log(e);
    }
  }
})
</script>

<style>

</style>
