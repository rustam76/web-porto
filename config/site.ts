export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Rustam",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "#project",
    },
    // {
    //   label: "Work Experience",
    //   href: "#",
    // },
    // {
    //   label: "Blog",
    //   href: "#",
	// },
	{
		label: "Contact me",
		href: "#contact",
	  }
	],
	
	links: {
		github: "https://github.com/rustam76",
		instagram: "https://www.instagram.com/rustam1255/",
		linkedin: "https://www.linkedin.com/in/rustammajid/",
	},
};
