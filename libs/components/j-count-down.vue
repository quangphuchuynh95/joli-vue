<template>
  <slot v-bind="remainTime">
    {{ formatter(remainTime) }}
  </slot>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watchEffect } from 'vue';

export interface CountDownFormatterProps {
  epoch: number
  day: number
  hour: number
  minute: number
  second: number
}

export default defineComponent({
  name: 'JCountDown',
  props: {
    value: {
      type: [String, Number, Date] as PropType<number | string | Date>,
      required: true,
    },
    interval: {
      type: Number,
      default: 1000,
    },
    formatter: {
      type: Function as PropType<(props: CountDownFormatterProps) => string>,
      default: (props: CountDownFormatterProps) => {
        const parts = [];
        if (props.day) {
          parts.push(`${props.day} days`)
        }
        if (props.hour || !!parts.length) {
          parts.push(`${props.hour} hours`)
        }
        if (props.minute || !!parts.length) {
          parts.push(`${props.minute} mins`)
        }
        parts.push(`${props.second} secs`)
        return parts.join(' ');
      },
    },
  },
  setup(props) {
    const now = ref(new Date());
    const dateValue = ref(new Date());
    watchEffect(onCleanup => {
      dateValue.value = new Date(props.value);
      const interval = setInterval(() => {
        now.value = new Date();
      }, props.interval)
      onCleanup(() => {
        clearInterval(interval);
      })
    })
    const remainTime = computed<CountDownFormatterProps>(() => {
      const epoch = Math.round((dateValue.value.getTime() - now.value.getTime()) / 1000);
      let remainEpoch = epoch;
      const day = Math.floor(remainEpoch / 3600 / 24);
      remainEpoch -= day * 3600 * 24;
      const hour = Math.floor(remainEpoch / 3600);
      remainEpoch -= hour * 3600;
      const minute = Math.floor(remainEpoch / 60);
      const second = remainEpoch - (minute * 60);
      return {
        epoch,
        day,
        hour,
        minute,
        second,
      }
    })
    return {
      remainTime,
    }
  }
});
</script>

<style scoped>

</style>
