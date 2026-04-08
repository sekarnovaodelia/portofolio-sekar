import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const NAV_LINKS = [
    { id: 'home', label: { en: 'Home', id: 'Beranda' } },
    { id: 'about', label: { en: 'About', id: 'Tentang' } },
    { id: 'skills', label: { en: 'Skills', id: 'Keahlian' } },
    { id: 'portfolio', label: { en: 'Portfolio', id: 'Portofolio' } },
    { id: 'contact', label: { en: 'Contact', id: 'Kontak' } },
];

export const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Navbar background blur
            setIsScrolled(window.scrollY > 20);

            // Scroll Spy
            const sections = NAV_LINKS.map(link => document.getElementById(link.id));
            const scrollPosition = window.scrollY + 100;

            let currentSection = 'home';
            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = section.getAttribute('id');
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // account for navbar height
                behavior: 'smooth'
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-[#1a202c]/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 py-0' : 'bg-transparent py-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl">code</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => handleNavClick(e, link.id)}
                                className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === link.id
                                    ? 'text-primary'
                                    : 'text-gray-600 dark:text-text-muted hover:text-primary'
                                    }`}
                            >
                                {link.label[language]}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Toggles */}
                        <div className="flex items-center gap-2 border-r border-gray-300 dark:border-gray-700 pr-4">
                            <button
                                onClick={toggleLanguage}
                                className="p-2 text-xs font-bold uppercase text-gray-700 dark:text-text-muted hover:text-primary transition-colors hover:bg-gray-200 dark:hover:bg-surface-dark rounded-md"
                                aria-label="Toggle Language"
                            >
                                {language}
                            </button>
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-gray-700 dark:text-text-muted hover:text-primary transition-colors hover:bg-gray-200 dark:hover:bg-surface-dark rounded-md flex items-center justify-center"
                                aria-label="Toggle Dark Mode"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>
                        </div>

                        <a
                            href="#"
                            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-all shadow-sm shadow-primary/30"
                        >
                            {t({ en: 'Download CV', id: 'Unduh CV' })}
                            <span className="material-symbols-outlined text-sm ml-2">download</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-surface-dark rounded-lg flex items-center justify-center transition-colors"
                            aria-label="Toggle Mobile Menu"
                        >
                            <span className="material-symbols-outlined">
                                {isMobileMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white/95 dark:bg-[#1a202c]/90 backdrop-blur-md border-t border-gray-300 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col px-4 py-6 space-y-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${activeSection === link.id
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-700 dark:text-text-muted hover:bg-gray-100 dark:hover:bg-surface-dark'
                                        }`}
                                >
                                    {link.label[language]}
                                </a>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-300 dark:border-gray-800 px-4">
                                <a
                                    href="#"
                                    className="flex items-center justify-center h-12 w-full rounded-lg bg-primary text-white text-sm font-semibold"
                                >
                                    {t({ en: 'Download CV', id: 'Unduh CV' })}
                                    <span className="material-symbols-outlined text-sm ml-2">download</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
