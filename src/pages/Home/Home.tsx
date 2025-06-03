import About from '@/sections/about';
import Services from '@/sections/services';
import Contact from '@/sections/contact';
import { Hero } from '@/sections/hero';
import { Portfolio } from '@/sections/portfolio';
import { Tecs } from '@/sections/tecs';
import { Testimonials } from '@/sections/testimonials';

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Tecs />
            <Testimonials />
            {/* <Banner /> */}
            {/* <Equip /> */}
            <Contact />
        </>
    )
}

