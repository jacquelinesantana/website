import { Hero } from '@/sections/hero';
import { Tecs } from '@/sections/tecs';
import { Footer } from '@/sections/footer';
import { Header } from '@/sections/header';
import { Contact } from '@/sections/contact';
import { Services } from '@/sections/services';
import { Portfolio } from '@/sections/portfolio';

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            {/* <About /> */}
            <Tecs />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    )
}

