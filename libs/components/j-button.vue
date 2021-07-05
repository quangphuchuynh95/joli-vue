<template>
  <button :class="['j-button', variant]">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'JButton',
  props: {
    outlined: {
      type: Boolean
    },
    text: {
      type: Boolean
    },
  },
  setup(props) {
    const variant = computed<'outlined'|'text'|'elevated'>(() => {
      if (props.outlined) {
        return 'outlined';
      }
      if (props.text) {
        return 'text';
      }
      return 'elevated';
    })
    return {
      variant,
    }
  }
})
</script>

<style scoped>
.j-button {
  @apply py-1 px-3 rounded;
}
.j-button:focus {
  outline: none;
}
.j-button.outlined {
  @apply border;
}
.j-button.text {

}
.j-button.elevated {
  @apply shadow transition-shadow;
}
.j-button.elevated:focus {
  @apply shadow-sm;
}
</style>
