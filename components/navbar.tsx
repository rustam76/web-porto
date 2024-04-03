
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {


	return (
		<header className="flex z-40 mx-auto  h-auto items-center justify-center  sticky top-5  inset-x-0 px-10 backdrop-blur-xl backdrop-saturate-150 bg-background/50 rounded-full py-5 ">
			<ul className=" flex gap-4 justify-between ml-2 mr-5">
					{siteConfig.navItems.map((item) => (
						<li key={item.href}>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>
						</li>
					))}
			</ul> 
			<ThemeSwitch />
		</header>
	)

	
};
