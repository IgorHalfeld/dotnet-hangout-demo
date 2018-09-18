<template>
  <div>
    <h1 :class="{ 'loading': isLoading }">{{ title }}</h1>
    <ul>
      <li v-for="(framework, index) in frameworks" :key="index">{{ framework }}</li>
    </ul>
    <button @click="showAlert">show alert</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isLoading: false,
    title: 'Igor Halfeld',
    frameworks: ['Vue.js', 'React.js', 'Angular']
  }),
  methods: {
    showAlert () {
      window.alert('Hey, I\'s works!')
    }
  }
} 
</script>

<style>
.loading {
  color: red;
}
</style>
