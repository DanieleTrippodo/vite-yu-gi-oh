<!-- Qui va la logica del componente (Vue3 + Javascript) -->
<script>
import ArchetypeFilter from './ArchetypeFilter.vue';
import axios from 'axios';

export default {
  components: {
    ArchetypeFilter,
  },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    async fetchCardsByArchetype(archetype) {
      try {
        const endpoint = archetype
          ? `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${encodeURIComponent(archetype)}`
          : 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
        
        const response = await axios.get(endpoint);
        this.cards = response.data.data; // Assicurati che la struttura dei dati sia corretta
      } catch (error) {
        console.error('Failed to fetch cards:', error);
      }
    },
    async fetchCardInfo() {
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        this.cards = response.data.data; // Assicurati che la struttura dei dati sia corretta
      } catch (error) {
        console.error('Failed to fetch card info:', error);
      }
    },
  },
  mounted() {
    this.fetchCardsByArchetype(''); // Carica tutte le carte inizialmente
  },
};
</script>



<!-- Qui va il contenuto di questo elemento (HTML) -->
<template>

    <div class="flex">
      <h1>Yu-Gi-Oh Card Info</h1>
      <button @click="fetchCardInfo">Genera Carte</button>
    </div>

    <ArchetypeFilter @archetype-selected="fetchCardsByArchetype" />

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