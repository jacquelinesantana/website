import { Home } from '@/pages/Home';
import { WhatsAppButton } from '@/components/shared/whatsButton';
import { CookieConsentBanner } from './components/shared/CookieConsentBanner';

export default function App() {
    return (
        <>
            <Home />
            <WhatsAppButton />
            <CookieConsentBanner />
        </>
    )
}