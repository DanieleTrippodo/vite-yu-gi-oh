<!-- Qui va la logica del componente (Vue3 + Javascript) -->
<script>
export default {
  name: 'MainHeader'
}
</script>



<!-- Qui va il contenuto di questo elemento (HTML) -->
<template>
  <header>

    <!-- Logo -->
    <div class="LeftSide">
      <img src="https://1000logos.net/wp-content/uploads/2024/02/Yu-Gi-Oh-Logo-2001.png" alt="Yughi Logo" class="logo">
      <h1>Yu-Gi-Oh Api Card List</h1>
    </div>
    <!-- Logo -->



    <!-- Altro -->
    <div>
      <!-- todo - Volendo qui Posso aggiungere una search bar -->
       <input type="text" placeholder="Test" class="SearchBar">
    </div>
    <!-- Altro -->

  </header>
</template>



<!-- Qui va lo stile CSS di questo elemento (CSS) -->
<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;


  border-bottom: 1px black solid;
  border-bottom-style: groove;
  margin-left: 1rem;
  margin-right: 1rem;
}

.logo{
  height: 5rem;
}


.LeftSide{
  display: flex;
  align-items: center;
  justify-content: center;
}

.SearchBar{
  width: 20rem;
  height: .5rem;
  font-size: 1.7rem;
  padding: 1rem;

  border-radius: 1rem;
  color: orange;
}
</style>
