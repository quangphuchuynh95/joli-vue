<template>
  <svg
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="title"
    :width="width || '100%'"
    :height="height || '100%'"
    role="img"
  >
    <g>
      <polyline
        fill="none"
        :stroke="color"
        :strokeWidth="strokeWidth"
        :points="points?.map((xy) => xy.join(',')).join(' ')"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'JSparkline',
  props: {
    data: {
      type: Array as PropType<(string|number)[]>,
      required: true,
    },
    color: {
      type: String,
      default: 'blue',
    },
    strokeWidth: {
      type: [String, Number],
      default: 1,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
  },
  setup(props) {
    const svgRef = ref<SVGElement|null>(null);
    const size = computed(() => {
      return {
        width: Number(props.width || svgRef.value?.getBoundingClientRect().width),
        height: Number(props.height || svgRef.value?.getBoundingClientRect().height),
      }
    })

    const points = computed<[number, number][]>(() => {
      if (!size.value.width || !size.value.height) {
        return [];
      }
      let min = props.data.map(Number).reduce<number>((m, item) => (item < m ? item : m), Number.POSITIVE_INFINITY);
      let max = props.data.map(Number).reduce<number>((m, item) => (item > m ? item : m), Number.NEGATIVE_INFINITY);
      let range = max - min;

      if (range === 0) {
        range = max;
      }

      min -= (range * 0.1);
      max += (range * 0.1);
      range = max - min;
      const width = size.value.width / (props.data.length - 1);

      return props.data.map(Number).map((item, index) => [index * width, size.value.height - (((item - min) * size.value.height) / range)]);
    })
    return {
      svgRef,
      points,
    }
  }
});
</script>

<style scoped>

</style>
