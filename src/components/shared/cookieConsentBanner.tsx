import { useEffect, useState } from "react";
import { BarChart3, Cookie, Settings, Shield, Target, X } from "lucide-react";

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    functional: boolean;
};

const STORAGE_KEY = 'cookieConsent';
const CONSENT_DURATION_MONTHS = 12;

// const data: Object[] = [
//     {
//         id: 1,
//         title: "Cookies Necessários",
//         description: "Essenciais para o funcionamento básico do site, incluindo segurança e navegação.",
//         icon: <Shield className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />,
//     },
//     {
//         id: 2,
//         title: "Cookies de Análise",
//         description: "Nos ajudam a entender como você usa o site para melhorarmos a experiência.",
//         icon: <BarChart3 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
//     },
//     {
//         id: 3,
//         title: "Cookies de Marketing",
//         description: "Utilizados para exibir publicidade relevante baseada em seus interesses.",
//         icon: <Target className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
//     },
//     {
//         id: 4,
//         title: "Cookies Funcionais",
//         description: "Permitem funcionalidades avançadas como lembrança de preferências e personalização.",
//         icon: <Settings className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
//     },
// ]

export function CookieConsentBanner() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showPreferences, setShowPreferences] = useState<boolean>(false);
    const [preferences, setPreferences] = useState<CookiePreferences>({
        necessary: true, // Sempre habilitado
        analytics: false,
        marketing: false,
        functional: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Delay para melhor UX - aparece após 1 segundo
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
        };

        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + CONSENT_DURATION_MONTHS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            timestamp: new Date().toISOString(),
            preferences: allAccepted,
            expiresAt: expiresAt.toISOString(),
        }));
        setIsVisible(false);
    };

    const handleAcceptSelected = () => {
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + CONSENT_DURATION_MONTHS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            timestamp: new Date().toISOString(),
            preferences,
            expiresAt: expiresAt.toISOString(),
        }));

        setIsVisible(false);
        setShowPreferences(false);
    };

    const handleRejectAll = () => {
        const minimalPreferences = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false,
        };

        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + CONSENT_DURATION_MONTHS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            timestamp: new Date().toISOString(),
            preferences: minimalPreferences,
            expiresAt: expiresAt.toISOString(),
        }));

        setIsVisible(false);
    };

    const togglePreference = (key: keyof Omit<CookiePreferences, 'necessary'>) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />

            <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">

                        {!showPreferences ? (
                            <div className="p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="hidden sm:block flex-shrink-0 p-3 bg-blue-900/30 rounded-xl">
                                        <Cookie className="h-6 w-6 text-blue-400" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                            Usamos cookies para melhorar sua experiência
                                        </h3> <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                                            Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais para análises,
                                            personalização e publicidade. Você pode escolher quais aceitar ou{' '}
                                            <button
                                                onClick={() => setShowPreferences(true)}
                                                className="text-blue-400 hover:underline font-medium cursor-pointer"
                                            >
                                                personalizar suas preferências
                                            </button>.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={handleAcceptAll}
                                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                            >
                                                Aceitar todos
                                            </button>

                                            <button
                                                onClick={handleRejectAll}
                                                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                            >
                                                Apenas necessários
                                            </button>

                                            <button
                                                onClick={() => setShowPreferences(true)}
                                                className="px-6 py-3 border border-gray-600 hover:bg-gray-800 text-gray-300 font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                                            >
                                                <Settings className="h-4 w-4" />
                                                Personalizar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="px-6 pt-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-semibold text-white">
                                        Preferências de Cookies
                                    </h3>
                                    <button
                                        onClick={() => setShowPreferences(false)}
                                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                                    >
                                        <X className="h-5 w-5 text-gray-500" />
                                    </button>
                                </div>

                                <div className="space-y-6 mb-4">
                                    {/* Cookies Necessários */}
                                    <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
                                        <Shield className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-white">
                                                    Cookies Necessários
                                                </h4>
                                                <div className=" bg-green-900/30 px-3 py-1 rounded-full">
                                                    <span className="text-sm font-medium text-green-300">
                                                        Sempre ativo
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="hidden sm:block text-sm text-gray-300">
                                                Essenciais para o funcionamento básico do site, incluindo segurança e navegação.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cookies de Análise */}
                                    <div className="flex items-start gap-4 p-4 border border-gray-700 rounded-xl">
                                        <BarChart3 className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-white">
                                                    Cookies de Análise
                                                </h4>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.analytics}
                                                        onChange={() => togglePreference('analytics')}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-blue-600"></div>
                                                </label>
                                            </div>
                                            <p className="hidden sm:block text-sm text-gray-300">
                                                Nos ajudam a entender como você usa o site para melhorarmos a experiência.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cookies de Marketing */}
                                    <div className="flex items-start gap-4 p-4 border border-gray-700 rounded-xl">
                                        <Target className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-white">
                                                    Cookies de Marketing
                                                </h4>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.marketing}
                                                        onChange={() => togglePreference('marketing')}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-purple-600"></div>
                                                </label>
                                            </div>
                                            <p className="hidden sm:block text-sm text-gray-300">
                                                Utilizados para exibir publicidade relevante baseada em seus interesses.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cookies Funcionais */}
                                    <div className="flex items-start gap-4 p-4 border border-gray-700 rounded-xl">
                                        <Settings className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-white">
                                                    Cookies Funcionais
                                                </h4>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        checked={preferences.functional}
                                                        onChange={() => togglePreference('functional')}
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-orange-600"></div>
                                                </label>
                                            </div>
                                            <p className="hidden sm:block text-sm text-gray-300">
                                                Permitem funcionalidades avançadas como lembrança de preferências e personalização.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={handleAcceptSelected}
                                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        >
                                            Salvar preferências
                                        </button>

                                        <button
                                            onClick={handleAcceptAll}
                                            className="hidden sm:block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-medium rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                        >
                                            Aceitar todos
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="px-6 md:px-8 py-4 bg-gray-800/50 border-t border-gray-700">
                            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                                <div className="flex flex-wrap gap-4">
                                    <a href="" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        Política de Privacidade
                                    </a>
                                    <a href="" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        Política de Cookies
                                    </a>
                                    <a href="" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                                        Termos de Uso
                                    </a>
                                </div>
                                <span className="text-gray-500 text-xs">
                                    Conforme LGPD/GDPR
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
