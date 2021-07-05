<template>
  <transition :name="name">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'JTransition',
  props: {
    name: {
      type: String as PropType<'fade'>,
      required: true,
    }
  }
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
