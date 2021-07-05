<template>
  <div class="w-1/2">
    <j-button>đâs</j-button>
    <j-dialog v-model:open="dialog">
      <template #activator="{ on }">
        <j-button v-on="on">đâs</j-button>
      </template>
      <template #default>
        <j-card
          outlined
        >
          dasdasdas
        </j-card>
      </template>
    </j-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JCountDown from '../libs/components/j-count-down.vue';
import JSparkline from '../libs/components/j-sparkline.vue';
import JDialog from '../libs/components/j-dialog.vue';
import JCard from '../libs/components/j-card.vue';
import JButton from '../libs/components/j-button.vue';

export default defineComponent({
  name: 'App',
  components: {JButton, JCard, JDialog, JSparkline, JCountDown },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    s(e) {
      console.log(e);
    }
  }
})
</script>

<style>

</style>
