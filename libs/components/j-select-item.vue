<template>
  <div
    :class="{ 'j-select-item': true, selected }"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref } from 'vue';

export default defineComponent({
  name: 'JSelectItem',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const selectValue = inject<Ref<string>>('selectValue')
    const onChangeValue = inject<(e: string) => void>('onChangeValue')

    const selected = computed(() => selectValue?.value === props.value)

    const handleClick = () => {
      console.log(selectValue);
      onChangeValue && onChangeValue(props.value)
    }

    return {
      selected,
      handleClick
    }
  }
});
</script>

<style scoped>
.j-select-item {
  @apply cursor-pointer py-1 flex;
}
.j-select-item.selected {
  @apply h-full;
}
</style>
