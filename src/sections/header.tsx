import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeIcon, MenuIcon } from "lucide-react";

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header id="header"
			className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white bg-black/50 backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center">
					<CodeIcon className="text-2xl text-purple-500 mr-2" />
					<span className="text-xl font-bold">SintoniaTech</span>
				</div>

				<div className="hidden md:flex items-center space-x-8">
					<a
						href="#inicio"
						className="hover:text-purple-500 transition-colors"
					>
						Início
					</a>
					<a
						href="#servicos"
						className="hover:text-purple-500 transition-colors"
					>
						Serviços
					</a>
					<a
						href="#portfolio"
						className="hover:text-purple-500 transition-colors"
					>
						Portfólio
					</a>
					{/* <a
						href="#sobre"
						className="hover:text-purple-500 transition-colors"
					>
						Sobre Nós
					</a> */}
					<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
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
						<a
							href="#inicio"
							className="py-2 hover:text-purple-500 transition-colors"
							onClick={toggleMenu}
						>
							Início
						</a>
						<a
							href="#servicos"
							className="py-2 hover:text-purple-500 transition-colors"
							onClick={toggleMenu}
						>
							Serviços
						</a>
						<a
							href="#portfolio"
							className="py-2 hover:text-purple-500 transition-colors"
							onClick={toggleMenu}
						>
							Portfólio
						</a>
						<a
							href="#sobre"
							className="py-2 hover:text-purple-500 transition-colors"
							onClick={toggleMenu}
						>
							Sobre Nós
						</a>
						<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
							Fale Conosco
						</Button>
					</div>
				</div>
			)}
		</header>
	)
}