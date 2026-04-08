import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../../ui/ScrollReveal';

export const Portfolio = () => {
    const { t } = useLanguage();
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeGallery, setActiveGallery] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.stopPropagation();
        if (activeGallery) {
            setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (activeGallery) {
            setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
        }
    };

    const closeModal = () => {
        setActiveGallery(null);
    };

    const title = t({ en: 'Featured Projects', id: 'Proyek Unggulan' });
    const filters = ['All', 'Web App', 'Desktop App'];

    const projects = [
        {
            id: 1,
            title: 'Stok Manajemen Sistem',
            category: 'Web App',
            tags: ['PHP', 'MySQL'],
            description: t({
                en: 'A comprehensive system to track stock levels, manage suppliers, and generate sales reports for small businesses.',
                id: 'Sistem komprehensif untuk melacak tingkat stok, mengelola pemasok, dan menghasilkan laporan penjualan untuk bisnis kecil.'
            }),
            image: '/stok/1.png',
            codeUrl: null,
            demoUrl: '#',
            images: ['/stok/1.png', '/stok/2.png', '/stok/3.png', '/stok/4.png', '/stok/5.png', '/stok/6.png']
        },
        {
            id: 2,
            title: 'Resep Nusantara',
            category: 'Web App',
            tags: ['React Native', 'Supabase'],
            description: t({
                en: 'An interactive recipe finder focusing on traditional Indonesian cuisine, featuring search, favorites, and detailed instructions.',
                id: 'Pencari resep interaktif yang berfokus pada masakan tradisional Indonesia, menampilkan pencarian, favorit, dan instruksi terperinci.'
            }),
            image: '/stok/resep.png',
            codeUrl: 'https://github.com/sekarnovaodelia/resep-nusantara',
            demoUrl: 'https://resep-nusantara-rose.vercel.app/',
        },
        {
            id: 3,
            title: 'Sistem Apotek',
            category: 'Desktop App',
            tags: ['Java', 'MySQL', 'NetBeans'],
            description: t({
                en: 'A pharmacy system is an application used to manage medicine data, inventory, and sales transactions efficiently and in an integrated manner. This system helps speed up services, improve data accuracy, and provide sales and stock reports.',
                id: 'Sistem apotek adalah aplikasi untuk mengelola data obat, stok, dan transaksi penjualan secara efisien dan terintegrasi. Sistem ini membantu mempercepat proses pelayanan, meningkatkan akurasi data, serta menyediakan laporan penjualan dan stok.'
            }),
            image: '/stok/java2.png',
            codeUrl: null,
            demoUrl: '#',
            images: ['/stok/java1.png', '/stok/java2.png', '/stok/java3.png', '/stok/java4.png', '/stok/java5.png', '/stok/java6.png']
        },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                <ScrollReveal>
                    <div className="flex flex-col items-center mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">{title}</h2>
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter
                                        ? 'bg-primary text-white shadow-sm shadow-primary/30 font-semibold'
                                        : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-muted hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5 }}
                                className="group bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        loading="lazy"
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
                                            {project.tags.join(' • ')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-muted text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex gap-4">
                                        {project.codeUrl && (
                                            <a className="flex items-center gap-1 text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors" href={project.codeUrl}>
                                                <span className="material-symbols-outlined text-lg">code</span> Code
                                            </a>
                                        )}
                                        {project.images ? (
                                            <button
                                                onClick={() => {
                                                    setActiveGallery(project.images);
                                                    setCurrentImageIndex(0);
                                                }}
                                                className="flex items-center gap-1 text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors cursor-pointer"
                                            >
                                                <span className="material-symbols-outlined text-lg">visibility</span> Lihat
                                            </button>
                                        ) : (
                                            <a className="flex items-center gap-1 text-sm font-semibold text-text-main dark:text-white hover:text-primary transition-colors" href={project.demoUrl}>
                                                <span className="material-symbols-outlined text-lg">visibility</span> Lihat
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>

            <AnimatePresence>
                {activeGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-2"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="relative w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden aspect-video">
                                <img
                                    src={activeGallery[currentImageIndex]}
                                    alt={`Gallery view ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-[70vh] object-contain select-none"
                                />

                                {activeGallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/90 text-text-main dark:text-white rounded-full backdrop-blur-md transition-colors shadow-lg"
                                        >
                                            <span className="material-symbols-outlined">arrow_back_ios_new</span>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 w-12 h-12 flex items-center justify-center bg-white/50 hover:bg-white/90 dark:bg-black/50 dark:hover:bg-black/90 text-text-main dark:text-white rounded-full backdrop-blur-md transition-colors shadow-lg"
                                        >
                                            <span className="material-symbols-outlined">arrow_forward_ios</span>
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="py-4 flex gap-2 overflow-x-auto max-w-full px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                {activeGallery.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-4 transition-all ${currentImageIndex === idx ? 'border-primary' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
