<template>
  <div class="w-1/2">
    <j-select class="h-10" v-model="logo">
      <j-select-item value="1">
        <img
          src="../src/assets/logo.png"
          class="w-8"
          alt=""
        >
        Logo 1
      </j-select-item>
      <j-select-item value="2">
        <img
          src="../src/assets/logo.png"
          class="w-8"
          alt=""
        >
        Logo 2
      </j-select-item>
      <j-select-item value="3">
        <img
          src="../src/assets/logo.png"
          class="w-8"
          alt=""
        >
        Logo 3
      </j-select-item>
    </j-select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JDialog from '../libs/components/j-dialog.vue';
import JCard from '../libs/components/j-card.vue';
import JRangeSlider from '../libs/components/j-range-slider.vue';
import JSelect from '../libs/components/j-select.vue';
import JSelectItem from '../libs/components/j-select-item.vue';

export default defineComponent({
  name: 'App',
  components: {JSelectItem, JSelect, JRangeSlider, JCard, JDialog },
  data() {
    return {
      logo: '1',
      to: 100,
    }
  },
})
</script>

<style>

</style>
