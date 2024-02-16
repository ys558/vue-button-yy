simple Vue Button Component libary, only for learning, use in vue project


## Install

```bash
npm i vue-button-yy
```

## Config in your vue project

we may use vite to generate vue project. in `main.js` file, we may change as bleow:

```js
import VueButtonYy from 'vue-button-yy'
import 'vue-button-yy/dist/style.css'

const app = createApp(App)

app.use(VueButtonYy);
app.mount('#app')
```

in `App.vue` file, we may change as bleow:

```js
<script setup>
</script>

<template>
  <vue-button-yy>
    hello world
  </vue-button-yy>
</template>
<style scoped>
</style>
```