import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#0f172a] text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    
                    {/* Branding */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-white">
                            Sekar Nova Odelia
                        </h2>
                        <p className="mt-2 text-sm text-gray-400 max-w-md">
                            {t({
                                en: "Student Developer focused on building modern, scalable, and user-friendly web applications.",
                                id: "Siswa Pengembang yang berfokus pada pembuatan aplikasi web modern, skalabel, dan ramah pengguna."
                            })}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-6 text-sm">
                        <a href="#about" className="hover:text-white transition">
                            {t({ en: "About", id: "Tentang" })}
                        </a>
                        <a href="#skills" className="hover:text-white transition">
                            {t({ en: "Skills", id: "Kemampuan" })}
                        </a>
                        <a href="#portfolio" className="hover:text-white transition">
                            {t({ en: "Portofolio", id: "Portofolio" })}
                        </a>
                        <a href="#contact" className="hover:text-white transition">
                            {t({ en: "Contact", id: "Kontak" })}
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    
                    {/* Copyright */}
                    <p>
                        © 2026 Sekar Nova Odelia
                    </p>

                    {/* Tagline */}
                    <p>
                        {t({ en: "Crafted with ", id: "Dibuat dengan " })}
                        <span className="text-pink-400">♥</span>
                        {t({ en: " in Bandar Lampung", id: " di Bandar Lampung" })}
                    </p>
                </div>
            </div>
        </footer>
    );
};