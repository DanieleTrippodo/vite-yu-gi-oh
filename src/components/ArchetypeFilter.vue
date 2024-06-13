<!-- Qui va la logica del componente (Vue3 + Javascript) -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      archetypes: [],
    };
  },
  methods: {
    async fetchArchetypes() {
      try {
        const response = await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php');
        this.archetypes = response.data.map(item => item.archetype_name);
      } catch (error) {
        console.error('Failed to fetch archetypes:', error);
      }
    },
    onSelect(event) {
      this.$emit('archetype-selected', event.target.value);
    },
  },
  mounted() {
    this.fetchArchetypes();
  },
};
</script>



<!-- Qui va il contenuto di questo elemento (HTML) -->
<template>
  <div>
    <label for="archetype-select">Select Archetype:</label>
    <select id="archetype-select" @change="onSelect">
      <option value="">All Archetypes</option>
      <option v-for="archetype in archetypes" :key="archetype" :value="archetype">
        {{ archetype }}
      </option>
    </select>
  </div>
</template>



<!-- Qui va lo stile CSS di questo elemento (CSS) -->
<style scoped>

</style>