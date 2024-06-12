<!-- Qui va la logica del componente (Vue3 + Javascript) -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const cards = ref([])

const fetchCardInfo = async () => {
  try {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
    cards.value = response.data.data
  } catch (error) {
    console.error('Error fetching card info:', error)
  }
}
</script>



<!-- Qui va il contenuto di questo elemento (HTML) -->
<template>
  <div>
    <h1>Yu-Gi-Oh Card Info</h1>
    <button @click="fetchCardInfo">Fetch Card Info</button>
    <ul>
      <li v-for="card in cards" :key="card.id">
        {{ card.name }} - {{ card.type }}
      </li>
    </ul>
  </div>
</template>



<!-- Qui va lo stile CSS di questo elemento (CSS) -->
<style scoped>
button {
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>