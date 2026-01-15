<template>
    <section class="relative py-20" id="contact">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="text-center mb-12" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    Contact <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-400">Me</span>
                </h2>
            </div>

            <div class="flex flex-col md:flex-row justify-center gap-8 items-center">
                
                <div v-for="(item, index) in contactMethods" :key="item.name"
                     class="group w-full max-w-sm p-6 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2 text-center"
                     data-aos="fade-up" 
                     :data-aos-delay="index * 100">
                    
                    <a :href="item.link" target="_blank" class="block">
                        
                        <div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-linear-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/10">
                            <font-awesome-icon :icon="item.icon" class="text-2xl text-emerald-400 group-hover:text-white transition-colors" />
                        </div>

                        <h3 class="text-xl font-bold text-white mb-2">{{ item.name }}</h3>
                        <p class="text-gray-400 text-sm group-hover:text-emerald-300 transition-colors">
                            {{ item.value }}
                        </p>
                    </a>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const contactMethods = ref([
    {
        name: 'Email',
        value: 'raphaelvittoriomulyo@gmail.com',
        link: 'mailto:raphaelvittoriomulyo@gmail.com',
        icon: ['fas', 'envelope'] 
    },
    {
        name: 'LinkedIn',
        value: 'linkedin.com/in/raphaelvittorio', // Sesuaikan username
        link: 'http://linkedin.com/in/raphaelvittorio',
        icon: ['fab', 'linkedin']
    },
    {
        name: 'GitHub',
        value: 'https://github.com/raphaelvittorio', // Sesuaikan username
        link: 'https://github.com/raphaelvittorio',
        icon: ['fab', 'github']
    }
])
</script>