import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeIcon, MenuIcon } from "lucide-react";
import { sendWhatsAppMessage } from "@/lib/sendWhatsAppMessage";
import { Link as ScrollLink } from "react-scroll";

const MESSAGE: string = "Olá, quero conhecer mais sobre os serviços da Sintonia Tech.";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header id="header"
			className="fixed top-0 left-0 right-0 z-20 transition-all duration-300 text-white bg-black/50 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<CodeIcon className="text-2xl text-purple-500 mr-2" />
					<span className="text-xl font-bold">SintoniaTech</span>
				</div>

				<div className="hidden md:flex items-center space-x-8">
					<ScrollLink to="inicio" className="cursor-pointer hover:text-purple-500 transition-colors" smooth={true} duration={500}>Início</ScrollLink>
					<ScrollLink to="servicos" className="cursor-pointer hover:text-purple-500 transition-colors" smooth={true} duration={500}>Serviços</ScrollLink>
					<ScrollLink to="portfolio" className="cursor-pointer hover:text-purple-500 transition-colors" smooth={true} duration={500}>Portfólio</ScrollLink>
					<ScrollLink to="equipe" className="cursor-pointer hover:text-purple-500 transition-colors" smooth={true} duration={500}>Equipe</ScrollLink>
					<ScrollLink to="contato" className="cursor-pointer hover:text-purple-500 transition-colors" smooth={true} duration={500}>Contato</ScrollLink>
					<Button
						onClick={() => sendWhatsAppMessage(MESSAGE)}
						className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
						Fale Conosco
					</Button>
				</div>

				<div className="md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleMenu}
						className="text-white hover:bg-white/50 cursor-pointer !rounded-button whitespace-nowrap"
					>
						<MenuIcon className={`text-xl ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
					</Button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden bg-black/95 backdrop-blur-md">
					<div className="container mx-auto px-4 py-4 flex flex-col space-y-4">

						<a href="#inicio" className="py-2 hover:text-purple-500 transition-colors" onClick={toggleMenu}>Início</a>
						<a href="#servicos" className="py-2 hover:text-purple-500 transition-colors" onClick={toggleMenu}>Serviços</a>
						<a href="#portfolio" className="py-2 hover:text-purple-500 transition-colors" onClick={toggleMenu}>Portfólio</a>
						<a href="#equipe" className="py-2 hover:text-purple-500 transition-colors" onClick={toggleMenu}>Equipe</a>
						<a href="#contato" className="py-2 hover:text-purple-500 transition-colors" onClick={toggleMenu}>Contato</a>
						<Button
							onClick={() => sendWhatsAppMessage(MESSAGE)}
							className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
							Fale Conosco
						</Button>
					</div>
				</div>
			)}
		</header>
	)
}