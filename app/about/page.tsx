import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<section className="mt-20 mb-30 px-10 ">
			<div className="flex flex-col items-center justify-center gap-4 py-14 md:py-14 ">

			<h1 className={title()}>💼 Work Experiences</h1>
			<p className="max-w-lg text-center">I have previously worked on freelance web and mobile application development projects as a full-stack developer, and held
a full-time job as a front-end developer.</p>
			</div>
			<div className="flex justify-between items-center">
				<div>
					{/* <Image src={""} alt="image" /> */}
					<h1 className={"text-[30px]"}>PT. Akasia Code Digital(Mahaka X)</h1>
				</div>
				<h2>Junior Backend Developer</h2>
			</div>
			<div>
				<h2>Agus 2023 - Present</h2>
				<p className="max-w-lg">Working on the core web experience team that focusing on developer experience, design system, and web performance.<br/>

Responsibilities and things I did<br/>
 Lead or contribute to technical design, implementation, deployment, and operational excellence efforts to build and run scalable solutions for complex engineering challenges.<br/>
 Champion high-quality products and services through adopting best practices in resilience, observability, maintainability, and testing.<br/>
Collaborate with cross-functional teams in delivering customer-centric tech products and services</p>
			</div>
		</section>
	);
}
