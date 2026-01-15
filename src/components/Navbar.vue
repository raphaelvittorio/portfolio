<template>
    <header class="flex justify-center items-center p-6 relative z-20 w-full">
        
        <div class="md:hidden absolute right-6 top-6 z-30">
            <button type="button" 
                class="block focus:outline-none p-2 rounded-lg bg-emerald-800/50 hover:bg-emerald-700/50 transition-all duration-300 border border-emerald-500/30" 
                @click="isMenuOpen = !isMenuOpen">
                <div class="relative w-6 h-6">
                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-emerald-200 transition-all duration-300`, isMenuOpen ? `rotate-45 top-3` : `top-1`
                    ]">
                    </span>
                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-emerald-200 transition-all duration-300`, isMenuOpen ? `opacity-0` : `top-3 opacity-100`
                    ]">
                    </span>
                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-emerald-200 transition-all duration-300`, isMenuOpen ? `-rotate-45 top-3` : `top-5`
                    ]">
                    </span>
                </div>
            </button>
        </div>

        <nav :class="[
            `fixed inset-0 z-20 flex flex-col items-center justify-center bg-gray-900/95 md:bg-gray-900/30 md:backdrop-blur-md md:border md:border-emerald-500/20 md:rounded-full md:px-8 md:py-3 md:relative md:flex md:items-center md:gap-8 md:flex-row`, 
            isMenuOpen ? `block` : `hidden`
        ]">
            
            <ul class="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                <li v-for="item in Menu" :key="item.name" class="group relative">
                    <a :href="item.href" 
                       class="relative block text-emerald-100 hover:text-emerald-400 transition-all duration-300 text-xl md:text-sm font-medium group" 
                       @click="scrollToSection(item.href)">
                        {{item.name}}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const Menu = ref([
    {name:'About Me', href:'#about'},
    {name:'Skills', href:'#services'},
    {name:'Projects', href:'#projects'},
    {name:'Contact', href:'#contact'},
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section){
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>