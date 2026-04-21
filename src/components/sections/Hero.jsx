import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../../ui/ScrollReveal';

export const Hero = () => {
    const { t } = useLanguage();

    const content = {
        badge: t({ en: 'Available for Work', id: 'Tersedia untuk Pekerjaan' }),
        description: t({
            en: <>A dedicated <strong>Student Developer</strong> from Bandar Lampung, focused on building efficient, scalable, and user-centered web applications using modern technologies.</>,
            id: <>Seorang <strong>Siswa Pengembang</strong> asal Bandar Lampung yang berfokus pada pengembangan aplikasi web yang efisien, skalabel, dan berorientasi pada pengalaman pengguna dengan teknologi modern.</>
        }),
        viewWork: t({ en: 'View Work', id: 'Lihat Karya' }),
        contactMe: t({ en: 'Contact Me', id: 'Hubungi Saya' }),
        currentlyLearning: t({ en: 'Currently Learning', id: 'Sedang Mempelajari' }),
    };

    return (
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden" id="home">
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-light/40 to-transparent dark:from-primary/10 dark:to-transparent opacity-60 pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="order-2 md:order-1 flex flex-col items-start gap-6">
                    <ScrollReveal delay={0.1}>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                            {content.badge}
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-main dark:text-white leading-[1.1]">
                            Sekar Nova<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Odelia</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed">
                            {content.description}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-text-main dark:bg-white text-white dark:text-text-main text-base font-bold transition-transform hover:-translate-y-1"
                            >
                                {content.viewWork}
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main dark:text-white text-base font-bold transition-colors hover:border-primary hover:text-primary"
                            >
                                {content.contactMe}
                            </a>
                        </div>
                    </ScrollReveal>

                </div>

                <ScrollReveal direction="left" delay={0.3} className="order-1 md:order-2 flex justify-center md:justify-end relative">
                    <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-square">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-4 translate-y-4" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark bg-gray-100 dark:bg-gray-800">
                            <img
                                src="/stok/sekar2.png"
                                alt="Portrait of Sekar Nova Odelia"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-6 -left-6 md:-bottom-6 md:-left-6 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce-slow translate-x-4 md:translate-x-0 translate-y-4 md:translate-y-0">
                            <div className="size-10 bg-primary-light dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary dark:text-primary-light">
                                <span className="material-symbols-outlined">code</span>
                            </div>
                            <div>
                                <p className="text-xs text-text-muted font-medium">{content.currentlyLearning}</p>
                                <p className="text-sm font-bold text-text-main dark:text-white">Laravel</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};
