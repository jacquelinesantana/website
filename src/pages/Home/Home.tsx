import { Hero } from '@/sections/hero';
import { Tecs } from '@/sections/tecs';
import { Contact } from '@/sections/contact';
import { Services } from '@/sections/services';
import { Portfolio } from '@/sections/portfolio';

export function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Portfolio />
            {/* <About /> */}
            <Tecs />
            {/* <Testimonials /> */}
            <Contact />
        </>
    )
}

