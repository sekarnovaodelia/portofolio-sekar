import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../../ui/ScrollReveal';

export const Skills = () => {
    const { t } = useLanguage();

    const title = t({ en: 'Technical Skills', id: 'Keahlian Teknis' });
    const subtitle = t({
        en: 'A collection of tools and technologies I use to build products.',
        id: 'Kumpulan alat dan teknologi yang saya gunakan untuk membangun produk.'
    });

    const skills = [
        {
            name: 'HTML & CSS',
            icon: 'html',
            type: 'dev',
        },
        {
            name: 'JavaScript',
            icon: 'javascript',
            type: 'dev',
        },
        {
            name: 'PHP / Laravel',
            icon: 'php',
            type: 'dev',
        },
        {
            name: 'React.js',
            icon: 'data_object',
            type: 'dev',
        },
        {
            name: 'MySQL',
            icon: 'database',
            type: 'dev',
        },      
    ];

    return (
        <section className="py-20 bg-white dark:bg-surface-dark" id="skills">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-2">{title}</h2>
                            <p className="text-text-muted">{subtitle}</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {skills.map((skill, index) => (
                        <ScrollReveal key={index} delay={0.1 * (index % 4)}>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-gray-800 hover:border-primary/30 hover:shadow-md transition-all group h-full">
                                <div className="p-2.5 bg-white dark:bg-surface-dark rounded-lg shadow-sm group-hover:bg-primary/5 transition-colors">
                                    <span className="material-symbols-outlined text-primary text-2xl">{skill.icon}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white text-sm md:text-base">{skill.name}</h4>
                                    <span className="text-xs text-text-muted">{skill.level}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
