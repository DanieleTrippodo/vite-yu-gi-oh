<script>
import axios from 'axios';
import MainHeader from './components/MainHeader.vue';
import { defineComponent } from 'vue';
import CardInfo from './components/CardInfo.vue';


export default defineComponent({
  name: 'App',
  components: {
    MainHeader,
    CardInfo
  }
})
</script>




<template>
  <main>
  
    <MainHeader />

    <CardInfo />

  </main>
</template>





<style scoped>
main{
  background-color: rgb(70, 191, 207);

  
}

</style>
