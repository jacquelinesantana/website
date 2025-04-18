import { LaptopMinimal, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Header() {
    return (
        <div className="border-b">

            <div className="hidden md:flex justify-between m-8">
                <LaptopMinimal className="h-6 w-6" />

                <nav className="flex gap-6">
                    <a href="#home" className="hover:underline">Início</a>
                    <a href="#about" className="hover:underline">Quem somos</a>
                    <a href="" className="hover:underline">Treinamentos</a>
                    <a href="#servicos" className="hover:underline">Projetos</a>
                    <a href="#contact" className="hover:underline">Contato</a>
                </nav>

                <Phone />

            </div>

            <div className="flex justify-between m-4 md:hidden">
                <LaptopMinimal className="h-10 w-10" />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button>
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[200px]">
                        <div className="flex flex-col gap-4 mt-6 ml-2">
                            <a href="#home" className="hover:underline">Início</a>
                            <Separator />
                            <a href="#about" className="hover:underline">Quem somos</a>
                            <Separator />
                            <a href="" className="hover:underline">Treinamentos</a>
                            <Separator />
                            <a href="#servicos" className="hover:underline">Projetos</a>
                            <Separator />
                            <a href="#contact" className="hover:underline">Contato</a>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}
