
import { title, subtitle } from "@/components/primitives";



export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-16 md:py-14 ">
			<div className="inline-block text-center justify-center">
				<h1 className={title()}>Hi, i'm </h1>
				<h1 className={title({ color: "violet" })}> rustam&nbsp;</h1>
				<h1 className={title()}>👋</h1>
				<br />
				<h1 className={"text-[40px] xl:text-[85px] font-bold leading-[50px] xl:leading-[100px]"}>
				a young software engineer from indonesia 
				</h1>
				<h2 className={subtitle({ class: "mt-2" })}>
				Building Tomorrow's World, One Line of Code at a Time.
				</h2>
			</div>
		</section>
	);
}
