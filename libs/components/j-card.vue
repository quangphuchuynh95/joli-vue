<template>
  <div :class="['j-card', variant, bgColor]">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'JCard',
  props: {
    outlined: {
      type: Boolean
    },
    elevated: {
      type: Boolean
    },
    color: {
      type: String,
      default: 'white',
    },
  },
  setup(props) {
    const variant = computed<'outlined'|'elevated'>(() => {
      if (props.outlined) {
        return 'outlined';
      } else if (props.elevated) {
        return 'elevated';
      } else {
        return 'elevated';
      }
    })
    const bgColor = computed<string>(() => {
      return `bg-${props.color}`;
    })
    return {
      variant,
      bgColor,
    }
  }
});
</script>

<style scoped>
.j-card {
  @apply rounded;
}
.j-card.outlined {
  @apply border
}
.j-card.elevated {
  @apply shadow;
}
</style>
