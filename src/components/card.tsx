interface cardProps {
	nome: string;
	foto: string;
	texto: string;
}

export default function Card({ nome, foto, texto }: cardProps) {
	return (
		<>
			<div className="w-5/6 sm:w-1/2 p-6 sm:p-2 ">
				<div className="card bg-base-100 image-full  shadow-sm min-h-80">
					<figure>
						<img
							src={foto}
							alt="Shoes" className="" />
					</figure>

					<div className="card-body mt-18">
						<h2 className="card-title">{nome}</h2>
						<p>{texto}</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">ver mais</button>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
