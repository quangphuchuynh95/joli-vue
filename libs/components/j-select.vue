<template>
  <div
    ref="select"
    class="j-select"
  >
    <div
      class="selected-label"
      @click="openModal"
    >
      <slot />
    </div>
    <div :class="{ 'select-modal': true, 'open': modal }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, toRefs, watchEffect } from 'vue';

export default defineComponent({
  name: "JSelect",
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const select = ref<HTMLDivElement>();
    const modal = ref(false);
    provide('selectValue', modelValue);
    provide('onChangeValue', (value: string) => {
      context.emit('update:modelValue', value);
      modal.value = false;
    });

    const openModal = () => {
      modal.value = true;
    }

    watchEffect(() => {
      if (modal.value) {
        console.log(modal.value);
        const handleCloseModal = (e: MouseEvent) => {
          const relatedEls = e.composedPath();
          if (relatedEls.every(el => el !== select.value)) {
            console.log(select.value);
            modal.value = false;
            window.removeEventListener('click', handleCloseModal)
          }
        }
        window.addEventListener('click', handleCloseModal)
        return () => {
          window.removeEventListener('click', handleCloseModal)
        }
      }
    })

    return {
      modal,
      select,
      openModal,
    }
  },
});
</script>

<style>
.selected-label {
  @apply h-full;
}
.selected-label .j-select-item:not(.selected) {
  display: none;
}
.select-modal {
  @apply absolute w-full border rounded shadow;
  top: 100%;
  display: none;
}
.select-modal.open {
  display: block;
}
.j-select {
  @apply cursor-pointer border rounded h-8 relative;
}
.select-modal .j-select-item:hover {
  @apply bg-gray-100;
}
</style>
