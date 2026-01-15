<template>
  <div class="min-h-screen bg-linear-to-br from-gray-900 via-emerald-950 to-black">
    <Navbar />
    <Hero />
    <Services />
    <Projects />
    <Contact />
  </div>
</template>
<script>
import AOS  from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Projects from './components/Projects.vue';

import {ref, nextTick, onMounted } from 'vue';
import Contact from './components/Contact.vue';

export default{
    components :{
      Navbar,
      Hero,
      Services,
      Projects,
      Contact
    },
    setup(){
      const loading = ref (true);

      onMounted(async () => {
        await nextTick();

        AOS.init({
          duration:800,
          once: false,
          offset: 100,
          easing: 'ease-in-out',
        })
      });
      return(loading);
    }
  }
</script>
