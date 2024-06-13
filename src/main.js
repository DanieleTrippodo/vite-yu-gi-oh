import { createApp } from 'vue';
import App from './App.vue';
import ArchetypeFilter from './components/ArchetypeFilter.vue';
import CardInfo from './components/CardInfo.vue';

const app = createApp(App);

app.component('ArchetypeFilter', ArchetypeFilter);
app.component('CardInfo', CardInfo);

app.mount('#app');