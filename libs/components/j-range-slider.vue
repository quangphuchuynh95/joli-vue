<template>
  <div
    class="j-range-slider"
  >
    <div
      ref="track"
      class="track"
    >
      <div
        :style="{ left: `${fromLeft}px`, width: `${toLeft -fromLeft}px` }"
        class="connector"
      />
      <div
        :style="{ left: `${fromLeft - 8}px` }"
        class="pointer pointer-from"
        @mousedown="startMoveFrom"
      />
      <div
        :style="{ left: `${toLeft - 8}px` }"
        class="pointer pointer-to"
        @mousedown="startMoveTo"
      />
    </div>
  </div>
  {{from}} - {{to}}
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'JRangeSlider',
  props: {
    from: {
      type: [String, Number] as PropType<number|string>,
      required: true,
    },
    to: {
      type: [String, Number] as PropType<number|string>,
      required: true,
    },
    max: {
      type: [String, Number] as PropType<number|string>,
      required: true,
    },
    min: {
      type: [String, Number] as PropType<number|string>,
      required: true,
    },
  },
  emits: ['update:from', 'update:to'],
  setup(props, context) {
    const track = ref<HTMLElement>()
    console.log(track);
    const trackWidth = computed(() => {
      return track.value?.getBoundingClientRect()?.width || 1
    })
    const range = computed(() => {
      return Number(props.max) - Number(props.min);
    })
    const pixelRate = computed(() => {
      return trackWidth.value / range.value;
    })
    const fromLeft = computed(() => {
      return (Number(props.from) - Number(props.min)) * pixelRate.value
    })
    const toLeft = computed(() => {
      return (Number(props.to) - Number(props.min)) * pixelRate.value
    })
    const startMoveFrom = (originE: MouseEvent) => {
      const originValue = Number(props.from);
      const moveHandler = (e: MouseEvent) => {
        console.log(e.clientX - originE.clientX);
        const move = (e.clientX - originE.clientX) / pixelRate.value;
        let newValue = Math.round(originValue + move)
        if (newValue < Number(props.min)) {
          newValue = Number(props.min);
        } else if (newValue > Number(props.to)) {
          newValue = Number(props.to);
        }
        context.emit('update:from', newValue);
      }

      const stopHandler = () => {
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseleave', stopHandler);
        window.removeEventListener('mouseup', stopHandler);
      }
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('mouseleave', stopHandler);
      window.addEventListener('mouseup', stopHandler);
    }
    const startMoveTo = (originE: MouseEvent) => {
      const originValue = Number(props.to);
      const moveHandler = (e: MouseEvent) => {
        console.log(e.clientX - originE.clientX);
        const move = (e.clientX - originE.clientX) / pixelRate.value;
        let newValue = Math.round(originValue + move)
        if (newValue < Number(props.from)) {
          newValue = Number(props.from);
        } else if (newValue > Number(props.max)) {
          newValue = Number(props.max);
        }
        context.emit('update:to', newValue);
      }

      const stopHandler = () => {
        window.removeEventListener('mousemove', moveHandler);
        window.removeEventListener('mouseleave', stopHandler);
        window.removeEventListener('mouseup', stopHandler);
      }
      window.addEventListener('mousemove', moveHandler);
      window.addEventListener('mouseleave', stopHandler);
      window.addEventListener('mouseup', stopHandler);
    }
    return {
      track,
      fromLeft,
      toLeft,
      startMoveFrom,
      startMoveTo,
    }
  }
});
</script>

<style scoped>
.j-range-slider {
  @apply p-2;
}
.j-range-slider .track {
  @apply shadow-md shadow-inner border rounded relative;
  height: 8px;
}
.j-range-slider .pointer {
  @apply rounded-full bg-blue-600 absolute;
  cursor: ew-resize;
  height: 12px;
  width: 12px;
  top: -2px;
}
.j-range-slider .connector {
  @apply bg-gray-100 absolute shadow-md shadow-inner;
  top: 0;
  height: 6px;
}
</style>
