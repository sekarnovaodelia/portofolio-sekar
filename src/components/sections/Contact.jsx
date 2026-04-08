import { useLanguage } from '../../context/LanguageContext';
import { ScrollReveal } from '../../ui/ScrollReveal';
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const { t } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [customSubject, setCustomSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    useEffect(() => {
        emailjs.init("VSFUUzAl-OMWXCxma");
    }, []);

    const content = {
        title: t({ en: "Let's work together!", id: "Mari bekerja sama!" }),
        description: t({
            en: "I'm currently looking for internship opportunities or freelance projects. If you have a project in mind or just want to say hi, feel free to drop a message.",
            id: "Saya saat ini sedang mencari peluang magang atau proyek lepas. Jika Anda memiliki proyek yang dipikirkan atau hanya ingin menyapa, jangan ragu untuk mengirim pesan."
        }),
        emailLabel: t({ en: "Email", id: "Email" }),
        phoneLabel: t({ en: "Phone", id: "Telepon" }),
        formName: t({ en: "Name", id: "Nama" }),
        formEmail: t({ en: "Email", id: "Email" }),
        formSubject: t({ en: "Subject", id: "Subjek" }),
        formMessage: t({ en: "Message", id: "Pesan" }),
        formSubmit: t({ en: "Send Message", id: "Kirim Pesan" }),
        placeholderName: t({ en: "Enter your name", id: "Masukkan nama Anda" }),
        placeholderEmail: t({ en: "Enter your email", id: "Masukkan email Anda" }),
        placeholderMessage: t({ en: "Tell me about your project...", id: "Ceritakan tentang proyek Anda..." }),
        selectSubject: t({ en: "Choose subject", id: "Pilih subject" }),
        projectProposal: t({ en: "Project Proposal", id: "Proposal Proyek" }),
        other: t({ en: "Other", id: "Lainnya" }),
        customSubjectPlaceholder: t({ en: "Enter your subject", id: "Isi subject sendiri" }),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus("");

        const finalSubject = subject === "other" ? customSubject : subject;

        const templateParams = {
            from_name: name,
            from_email: email,
            subject: finalSubject || "Contact Form",
            message: message,
        };

        try {
            await emailjs.send("service_0t3eixj", "template_g4hhtcc", templateParams);
            setSubmitStatus("success");
            setName("");
            setEmail("");
            setSubject("");
            setCustomSubject("");
            setMessage("");
            setTimeout(() => setSubmitStatus(""), 3000);
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
            setTimeout(() => setSubmitStatus(""), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-surface-dark relative" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    <ScrollReveal direction="right">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-6">
                                {content.title}
                            </h2>
                            <p className="text-text-muted mb-8 text-lg">
                                {content.description}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-background-light dark:bg-background-dark flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-text-muted">{content.emailLabel}</p>
                                        <a href="mailto:sekarnovaodelia@gmail.com" className="text-lg font-bold text-text-main dark:text-white hover:text-primary transition-colors">
                                            sekarnovaodelia@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-background-light dark:bg-background-dark flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-text-muted">{content.phoneLabel}</p>
                                        <a href="https://wa.me/628956100908" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-text-main dark:text-white hover:text-primary transition-colors">
                                            +62 895-6100-9908
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={0.2}>
                        <div className="bg-background-light dark:bg-background-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                            {submitStatus === "success" && (
                                <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm font-medium">
                                    {t({ en: "Message sent successfully!", id: "Pesan terkirim berhasil!" })}
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm font-medium">
                                    {t({ en: "Error sending message. Please try again.", id: "Gagal mengirim pesan. Silakan coba lagi." })}
                                </div>
                            )}
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-text-main dark:text-white">{content.formName}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder={content.placeholderName}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-text-main dark:text-white">{content.formEmail}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder={content.placeholderEmail}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-text-main dark:text-white">{content.formSubject}</label>
                                    <select
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm text-text-muted"
                                        >
                                        <option value="">{content.selectSubject}</option>
                                        <option value="Project Proposal">{content.projectProposal}</option>
                                        <option value="other">
                                          {content.other}       
                                        </option>
                                    </select>
                                    {subject === "other" && (
                                        <input
                                            type="text"
                                            placeholder={content.customSubjectPlaceholder}
                                            value={customSubject}
                                            onChange={(e) => setCustomSubject(e.target.value)}
                                            required
                                            className="w-full mt-3 px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                        />
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-text-main dark:text-white">{content.formMessage}</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder={content.placeholderMessage}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 px-6 rounded-lg bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm shadow-lg shadow-primary/30 transition-all transform active:scale-95"
                                >
                                    {loading ? t({ en: "Sending...", id: "Mengirim..." }) : content.formSubmit}
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};
