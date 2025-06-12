import { Home } from '@/pages/Home';
import { WhatsAppButton } from '@/components/shared/whatsButton';
import { ConsentBanner } from './components/shared/consentBanner';

export default function App() {
    return (
        <>
            <Home />
            <WhatsAppButton />
            <ConsentBanner />
        </>
    )
}