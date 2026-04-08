import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../../ui/ScrollReveal';

export const About = () => {
    const { t } = useLanguage();

    const title = t({ en: 'About My Journey', id: 'Tentang Perjalanan Saya' });
    const subtitle = t({
        en: 'Currently a student at SMKN 4 Bandar Lampung, diving deep into the world of software development.',
        id: 'Saat ini sebagai siswa di SMKN 4 Bandar Lampung, mendalami dunia pengembangan perangkat lunak.'
    });

    const timeline = [
        {
            year: '2020',
            title: t({ en: 'Started Coding', id: 'Mulai Coding' }),
            company: t({ en: 'Self Taught', id: 'Otodidak' }),
            description: t({
                en: 'Began with HTML & CSS through online courses and tutorials.',
                id: 'Memulai dengan HTML & CSS melalui kursus dan tutorial online.'
            }),
            active: false,
        },
                {
            year: '2021 - Present',
            title: t({ en: 'Software Engineering Student', id: 'Siswa Rekayasa Perangkat Lunak' }),
            company: 'SMKN 4 Bandar Lampung',
            description: t({
                en: 'Focusing on web development fundamentals, algorithms, and database management.',
                id: 'Fokus pada dasar-dasar pengembangan web, algoritma, dan manajemen basis data.'
            }),
            active: true,
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white dark:bg-surface-dark" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">{title}</h2>
                        <div className="h-1.5 w-16 bg-primary mx-auto rounded-full" />
                        <p className="mt-4 text-text-muted max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    <div className="md:col-span-7 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <ScrollReveal direction="left" delay={0.1}>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-text-main dark:text-white">
                                <span className="material-symbols-outlined text-primary">school</span>
                                {t({ en: 'Education & Experience', id: 'Pendidikan & Pengalaman' })}
                            </h3>
                            <div className="relative pl-8 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                                {timeline.map((item, index) => (
                                    <div key={index} className="relative">
                                        <div className={`absolute -left-[30px] top-1 size-4 rounded-full border-2 bg-gray-50 dark:bg-surface-dark ${item.active ? 'border-primary' : 'border-gray-300'}`} />
                                        <span className={`text-xs font-bold px-2 py-1 rounded mb-2 inline-block ${item.active ? 'text-primary bg-primary/10' : 'text-text-muted bg-white dark:bg-gray-800'}`}>
                                            {item.year}
                                        </span>
                                        <h4 className="text-lg font-bold text-text-main dark:text-white">{item.title}</h4>
                                        <p className="text-sm text-text-muted mb-1">{item.company}</p>
                                        <p className="text-sm text-text-muted/80">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-6">
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <span className="material-symbols-outlined text-9xl">person</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 relative z-10">{t({ en: 'Personal Details', id: 'Detail Pribadi' })}</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary-light/80">location_on</span>
                                        <div>
                                            <span className="block text-xs text-primary-light/60 uppercase tracking-wider">{t({ en: 'Location', id: 'Lokasi' })}</span>
                                            <span className="font-medium">Bandar Lampung, Indonesia</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary-light/80">language</span>
                                        <div>
                                            <span className="block text-xs text-primary-light/60 uppercase tracking-wider">{t({ en: 'Languages', id: 'Bahasa' })}</span>
                                            <span className="font-medium">{t({ en: 'Indonesian (Native), English (Basic)', id: 'Indonesia (Asli), Inggris (Dasar)' })}</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary-light/80">mail</span>
                                        <div>
                                            <span className="block text-xs text-primary-light/60 uppercase tracking-wider">Email</span>
                                            <span className="font-medium">sekarnovaodelia@gmail.com</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={0.3}>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex-1">
                                <h3 className="text-xl font-bold mb-4 text-text-main dark:text-white">{t({ en: 'Interests', id: 'Minat' })}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Backend Development', 'Cloud Computing', 'Frontend Development'].map(interest => (
                                        <span key={interest} className="px-3 py-1 bg-background-light dark:bg-gray-800 text-text-muted rounded-full text-sm">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};
