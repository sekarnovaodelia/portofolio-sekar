import { useLanguage } from '../../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1a202c] text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <h2 className="text-xl font-bold">Sekar Nova Odelia</h2>
                        <p className="text-sm text-gray-400">
                            {t({
                                en: "© 2026. Building the future, one line of code at a time.",
                                id: "© 2026. Membangun masa depan, satu baris kode pada satu waktu."
                            })}
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 flex justify-center md:justify-between items-center text-xs text-gray-500">
                    <p>
                        {t({ en: 'Designed with ', id: 'Didesain dengan ' })}
                        <span className="text-primary-light">♥</span>
                        {t({ en: ' in Bandar Lampung', id: ' di Bandar Lampung' })}
                    </p>
                </div>
            </div>
        </footer>
    );
};
