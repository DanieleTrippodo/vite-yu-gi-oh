<script>
import axios from 'axios'
import MainHeader from './components/MainHeader.vue';
import { defineComponent } from 'vue'
import CardInfo from './components/CardInfo.vue'


export default defineComponent({
  name: 'App',
  components: {
    MainHeader,
    CardInfo
  }
})
</script>




<template>
  
  <MainHeader />

  <CardInfo />

</template>





<style scoped>

</style>
