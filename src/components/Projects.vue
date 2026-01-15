<template>
    <section class="relative py-20 overflow-hidden" id="projects">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos='fade-up'>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-400"> Projects</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div v-for="(project, index) in projects" :key="(project.id)" 
                     class="group relative bg-linear-to-br from-gray-800/50 to-emerald-900/30 rounded-3xl overflow-hidden border backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-500 hover:transform hover:-translate-y-2" 
                     :class="project.bordColor" 
                     data-aos="fade-up" 
                     :data-aos-delay="(index +1) *100">
                    
                    <div class="relative overflow-hidden">
                        <img :src="project.Image" :alt="project.title" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                        
                        <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
                        
                        <div class="absolute top-4 right-4">
                            <span class="px-3 py-1 text-white text-xs rounded-full font-semibold shadow-lg" :class="project.badgColor">
                                {{ project.category }}
                            </span>
                        </div>
                    </div>

                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {{ project.title }}
                        </h3>
                        <p class="text-gray-300 text-sm leading-relaxed mb-4">
                            {{ project.desc }}
                        </p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in project.technolg" :key="tech.name" class="px-2 py-1 border rounded text-xs" :class="tech.class">
                                {{ tech.name }}
                            </span>
                        </div>
                        
                        <div class="flex gap-3">
                            <a v-for="link in project.links" :key="link.name" :href="link.url" target="_blank"  :class="link.class" class="flex items-center gap-2 transition-colors duration-300 text-sm font-medium">
                                <component :is="link.icon" class="w-4 h-4" />
                                {{ link.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { 
    CodeBracketIcon, 
    EyeIcon 
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        title: "Sinar Minang Restaurant E-Commerce",
        desc: "A full-stack food ordering platform powered by Laravel and MySQL. Features a secure transaction system, real-time inventory management, and a robust admin dashboard for order tracking.",
        Image: '/project1.png',
        category: 'Full-Stack',
        bordColor: 'border-emerald-500/20',
        badgColor: "bg-emerald-600",
        technolg: [
            { name: "Laravel", class: 'bg-red-500/20 border-red-400/30 text-white' },
            { name: "PHP", class: 'bg-purple-500/20 border-purple-400/30 text-white' },
            { name: "MySQL", class: 'bg-blue-500/20 border-blue-400/30 text-white' }
        ],
        links: [
            { 
                name: "View", 
                url: "#", 
                icon: EyeIcon, 
                class: 'text-emerald-400 hover:text-emerald-300' },
            // { name: "Code", url: "#", icon: CodeBracketIcon, class: 'text-emerald-400 hover:text-emerald-300' },
        ]
    },
    {
        id: 2,
        title: "West Java Tourism Portal",
        desc: "An immersive travel guide built with React.js and Tailwind CSS. Leverages component-based architecture to deliver a fast, responsive, and visually stunning user experience for tourists.",
        Image: '/project4.png',
        category: 'Front-End',
        bordColor: 'border-emerald-500/20',
        badgColor: "bg-green-800", 
        technolg: [
            { name: "React.Js", class: 'bg-blue-500/20 border-blue-400/30 text-white' },
            { name: "JavaScript", class: 'bg-yellow-500/20 border-yellow-400/30 text-white' },
            { name: "Tailwind", class: 'bg-cyan-500/20 border-cyan-400/30 text-white' }
        ],
        links: [
            { 
                name: "View", 
                url: "https://jawabarattt.vercel.app/", 
                icon: EyeIcon, 
                class: 'text-emerald-400 hover:text-emerald-300' },
            // { name: "Code", url: "#", icon: CodeBracketIcon, class: 'text-emerald-400 hover:text-emerald-300' },
        ]
    },
    {
        id: 3,
        title: "Universitas Cendrawasih Research & Staff Profile",
        desc: "A dedicated academic portal developed using React.js. Designed to showcase research publications and detailed profiles of the management team with a clean and responsive user interface.",
        Image: '/project2.png',
        category: 'Front-End',
        bordColor: 'border-emerald-500/20',
        badgColor: "bg-green-800",
        technolg: [
            { name: "React.Js", class: 'bg-blue-500/20 border-blue-400/30 text-white' },
            { name: "JavaScript", class: 'bg-yellow-500/20 border-yellow-400/30 text-white' },
            { name: "Tailwind", class: 'bg-cyan-500/20 border-cyan-400/30 text-white' }
        ],
        links: [
            { 
                name: "View", 
                url: "#", 
                icon: EyeIcon, 
                class: 'text-emerald-400 hover:text-emerald-300' },
            // { name: "Code", url: "#", icon: CodeBracketIcon, class: 'text-emerald-400 hover:text-emerald-300' },
        ]
    },
    {
        id: 4,
        title: "Kompas Corner News Media",
        desc: "A digital news media platform engineered with Laravel and PHP. Features a robust Content Management System (CMS) for article publishing, category management, and seamless content delivery to readers.",        
        Image: '/project3.png',
        category: 'Full-Stack',
        bordColor: 'border-emerald-500/20',
        badgColor: "bg-emerald-600",
        technolg: [
            { name: "Laravel", class: 'bg-red-500/20 border-red-400/30 text-white' },
            { name: "PHP", class: 'bg-purple-500/20 border-purple-400/30 text-white' },
            { name: "MySQL", class: 'bg-blue-500/20 border-blue-400/30 text-white' }
        ],
        links: [
            { 
                name: "View", 
                url: "https://kompascorner.com/", 
                icon: EyeIcon, 
                class: 'text-emerald-400 hover:text-emerald-300' 
            },
        ]
    }
])
</script>