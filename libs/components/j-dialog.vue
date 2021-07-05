<template>
  <slot
    name="activator"
    v-bind="activatorBinds"
  />
  <teleport to="body">
    <div
      v-if="open"
      class="j-dialog-root"
    >
      <div
        class="j-backdrop"
        :style="{ opacity: backdropOpacity, backgroundColor: backdropColor }"
        @click="$emit('update:open', false)"
      />
      <div class="j-dialog-content">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JDialog',
  props: {
    backdropOpacity: {
      type: Number,
      default: 1
    },
    backdropColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    },
    open: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['update:open'],
  setup(props, context) {
    const activatorBinds = {
      on: {
        click: () => context.emit('update:open', true)
      }
    }
    return {
      activatorBinds,
    }
  }
})
</script>

<style scoped>
.j-dialog-root {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.j-backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.j-dialog-content {
  position: relative;
}
</style>
