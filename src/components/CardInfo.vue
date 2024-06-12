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

    <div class="flex">
      <h1>Yu-Gi-Oh Card Info</h1>
      <button @click="fetchCardInfo">Genera Carte</button>
    </div>


    <div class="flex2">
      <ul>
      <li v-for="card in cards" :key="card.id" class="card flex2">
        <img :src="card.card_images[0].image_url" :alt="card.name" class="card-image"/>
        <div class="card-details">
          <h2>{{ card.name }}</h2>
          <p><strong>Type:</strong> {{ card.type }}</p>
          <p><strong>Race:</strong> {{ card.race }}</p>
          <p>{{ card.desc }}</p>
        </div>
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

img{
  width: 20%;
}

.flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-left: 3rem;
  padding-right: 3rem;
}

.flex2{
  display: flex;
}
</style>