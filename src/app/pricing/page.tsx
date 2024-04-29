import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PRICES from "@/data/prices";
import {
	filson_pro_heavy,
	moderat_black,
	moderat_bold
} from "@/utils/font";

export default function Home() {
	return (
		<>
			<PageHeader />
			<div className="
				bg-lernib1 text-black

				flex-1
				flex flex-col justify-center items-center

				py-20
			">
				<h1 className={`
					${filson_pro_heavy.className}

					text-center
					text-4xl

					md:text-7xl
				`}>
					Plans &amp; Pricing
				</h1>
				<h2 className="
					text-center
					mt-4 mx-8

					text-xl md:text-2xl
				">
					Pick the best plan for your needs. Upgrade at any time. No
					<br className="nib-nomobile" />
					hidden charges, no questions, no hassle.
				</h2>
			</div>
			<main className="
				bg-lernib1 text-black

				flex flex-col justify-around items-center
				py-20
				gap-16

				lg:flex-row lg:p-20
			">
				{PRICES.map((price, i) => (
					<div key={i} className="
						bg-lernib2-700 text-black
						shadow-lg

						h-80 p-8
						mx-8

						md:w-full md:m-0
					">
						<h2 className={`
							${moderat_black.className}
							text-lernib2

							text-4xl
							mb-8
						`}>
							{price.price}
						</h2>

						<span className={`
							${moderat_bold.className}

							text-3xl
						`}>
							{price.name}
						</span>

						<p className="
							mt-4
						">
							{price.description}
						</p>
					</div>
				))}
			</main>
			<PageFooter />
		</>
	)
}
