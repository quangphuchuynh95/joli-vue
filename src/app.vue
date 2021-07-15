<template>
  <div class="w-1/2">
    <j-range-slider
      v-model:from="from"
      v-model:to="to"
      max="100"
      min="10"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JDialog from '../libs/components/j-dialog.vue';
import JCard from '../libs/components/j-card.vue';
import JRangeSlider from '../libs/components/j-range-slider.vue';

export default defineComponent({
  name: 'App',
  components: {JRangeSlider, JCard, JDialog },
  data() {
    return {
      from: 50,
      to: 100,
    }
  },
})
</script>

<style>

</style>
