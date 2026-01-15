<template>
    <section class="relative w-full overflow-hidden min-h-screen flex items-center">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                
                <div class="flex flex-col md:mt-0 mt-20 justify-center">
                    <div class="text-white lg:text-left" data-aos="fade-right">
                        <h1 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                            <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-green-400">
                                Raphael Vittorio
                            </span>
                        </h1>
                        <p class="text-emerald-200 font-medium text-lg md:text-xl mt-4" data-aos="fade-right" data-aos-delay="100">
                            Full-Stack Developer & UI/UX Enthusiast
                        </p>
                    </div>
                    
                    <p class="text-gray-300 pt-6 text-center lg:text-left mx-auto max-w-xl text-lg leading-relaxed">
                        I am an Informatics student at Universitas Multimedia Nusantara with over two years of hands-on experience in the IT industry. My expertise lies in Full-Stack Development, where I build robust web applications and native Android apps with a focus on performance and scalability. Beyond code, I am a UI/UX enthusiast who believes that great functionality must be paired with intuitive design. I am a disciplined learner, always eager to master new tools and best practices to deliver high-quality digital solutions.
                    </p>
                    
                    <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="300">
                        
                        <a href="/cv_raphael.pdf" target="_blank" rel="noopener noreferrer" 
                           class="border-2 border-emerald-400 px-8 md:px-10 py-4 rounded-xl relative group w-full sm:w-max flex justify-center hover:bg-emerald-400/10 transition-all duration-300 cursor-pointer">
                            
                            <div class="flex items-center justify-center relative gap-2">
                                <ArrowDownTrayIcon class="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                                <span class="text-emerald-400 group-hover:text-white font-semibold text-lg transition-colors">
                                    Download CV
                                </span>
                            </div>
                        </a>

                    </div>
                </div>
                
                <div class="lg:h-full flex justify-center lg:justify-end">
                    <div class="relative w-full max-w-md lg:max-w-lg">
                        <div class="relative z-10 bg-linear-to-r from-emerald-900 to-green-700 shadow-2xl rounded-[50%_40%_30%_60%/60%_30%_70%_30%] p-4 backdrop-blur-sm border border-emerald-500/30 -translate-y-6" data-aos="zoom-in" data-aos-delay="500">
                            <div class="rounded-xl overflow-hidden">
                                <img src="/hero.png" alt="Raphael" loading="lazy" class="w-125 h-125 object-contain -translate-y-2">
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
import { ArrowDownTrayIcon } from '@heroicons/vue/16/solid';

export default {
    components: {
        ArrowDownTrayIcon
    }
}
</script>