<template>
    <section class="relative py-20 overflow-hidden" id="services">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center m-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My<span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-400"> Skills</span>
                </h2>
                <p class="text-emerald-200 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                    Tools & Framework
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in services" :key="item.id" 
                     :data-aos="'fade-up'" 
                     :data-aos-delay="(index * 100) + 200" 
                     class="group relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden">
                    
                    <div class="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 duration-500 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div class="relative z-10 mb-6">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300">
                            
                            <font-awesome-icon 
                                :icon="item.icon" 
                                class="text-3xl text-emerald-400 group-hover:text-green-300 transition-colors" 
                            />

                        </div>
                    </div>
                    
                    <div class="relative z-10">
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                            {{ item.name }}
                        </h3>
                        <p class="text-gray-300 leading-relaxed">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: ['fab', 'react'], 
        name: 'React JS',
        desc: 'Building high-performance Single Page Applications (SPAs) with component-based architecture for seamless user experiences.'
    },
    {
        id: 2,
        icon: ['fab', 'vuejs'], 
        name: 'Vue.js',
        desc: 'Crafting lightweight and adaptive user interfaces using the progressive framework to ensure smooth reactivity and maintainable code.'
    },
    {
        id: 3,
        icon: ['fab', 'css3-alt'], 
        name: 'Tailwind CSS',
        desc: 'Designing rapid, responsive, and modern user interfaces with a utility-first approach for consistent styling across all devices.'
    },
    {
        id: 4,
        icon: ['fab', 'node-js'], 
        name: 'Node.js',
        desc: 'Developing scalable server-side applications and RESTful APIs capable of handling real-time data and high-concurrency loads.'
    },
    {
        id: 5,
        icon: ['fab', 'laravel'],
        name: 'Laravel',
        desc: 'Building robust, secure, and enterprise-grade web applications with a focus on clean MVC architecture and efficient backend performance.'
    },
    {
        id: 6,
        icon: ['fas', 'database'], 
        name: 'Database & SQL',
        desc: 'Designing optimized database schemas and efficient queries to ensure data integrity and speed using MySQL or PostgreSQL.'
    },
])
</script>