import { Hero } from '@/components/sections/hero';
import { Tecs } from '@/components/sections/tecs';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { Equip } from '@/components/sections/equip';
import { Contact } from '@/components/sections/contact';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Equip />
            <Tecs />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    )
}

