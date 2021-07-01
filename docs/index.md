---
title: Joli vue - vue 3 components base on tailwind css
sidebar: auto
---

# Joli vue - vue 3 components base on tailwind css

## Get start

### Installation

Using npm
```shell
npm i joli-vue
```

Or using yarn
```shell
yarn add joli-vue
```
## Usage 

### Using components directly
```vue
<template>
  <j-component-name>
    ...
  </j-component-name>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JComponentName from 'joli-vue/libs/components/j-{component-name}.vue';

export default defineComponent({
  name: 'MyComponent',
  components: { JComponentName }
});
</script>
```

## Components
### Countdown
Show countdown value from now to an other time
```vue
<template>
  <j-count-down
    value="2022-01-01 00:00:00"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JCountDown from 'joli-vue/libs/components/j-count-down.vue';

export default defineComponent({
  name: 'MyComponent',
  components: { JCountDown }
});
</script>
```
#### Props:
|name|required|type|default|description|
|----|:------:|----|-------|-----------|
|**value**|✅|String <br> Number <br> Date||Value to count to <br> Example: 2022-01-01 00:00:00|
|**formatter**||Function|`() => x year x month y day x hour x mins x secs`|Function use to format remaining time for display|
|**interval**||Number|1000|Refresh interval (mili seconds)|

