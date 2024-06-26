<img width="100%" src="demo/src/assets/logo.png">

[![Deploy](https://github.com/medistream-team/vue2-json-skeleton-loader/actions/workflows/deploy-demo.yml/badge.svg?branch=main)](https://github.com/medistream-team/vue2-json-skeleton-loader/actions/workflows/deploy-demo.yml) [![Npm Publish](https://github.com/medistream-team/vue2-json-skeleton-loader/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/medistream-team/vue2-json-skeleton-loader/actions/workflows/npm-publish.yml)

## DEMO
[Click here](https://medistream-team.github.io/vue-json-skeleton-loader).

## Installation

<pre>
<code>npm i vue2-json-skeleton-loader</code>
</pre>

## Plugin

<pre>
<code>import VSkeletonLoader from 'vue2-json-skeleton-loader';

Vue.use(VSkeletonLoader);</code>
</pre>

## Component

### Content

You can implement multiple types of skeleton loaders simultaneously using content property.

```html
<template>
  <v-skeleton-loader :content="thumbItem"></v-skeleton-loader>
</template>

<script>
import VSkeletonLoader from 'vue2-json-skeleton-loader';
export default {
  components: {
    VSkeletonLoader
  },
  data () {
    return {
      thumbItem: ['box', 'text']
    }
  }
}
</script>
```

```html
<template>
  <v-skeleton-loader :content="cardItem"></v-skeleton-loader>
</template>

<script>
import VSkeletonLoader from 'vue2-json-skeleton-loader';
export default {
  components: {
    VSkeletonLoader
  },
  data () {
    return {
      cardItem: [
        ['blank', 'circle:100', 'blank'],
        ['title'],
        ['text:3']
      ]
    }
  }
}
</script>
```

### Options

Options allow you to implement different styles of Skeleton Loaders.

```html
<v-skeketon-loader
  :options="{
    radius: 3,
    primaryColor: '#94bcff',
    secondaryColor: '#c7dcff',
    animate: true,
    speed: '1.5s',
    defaultSizes: {
      box: 100,
      circle: 100,
      title: 25,
      text: 15,
    }
  }">
</v-skeketon-loader>
```

## 📝 License

Copyright © 2024. Built by INTEGRATION Corp.<br>
This project is distributed under [MIT](https://github.com/medistream-team/vue2-json-skeleton-loader/blob/main/LICENSE) license.
