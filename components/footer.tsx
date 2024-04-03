import { Link } from "@nextui-org/link";
import React from "react";
import { GithubIcon, Instagram,Linkedin } from "./icons";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const date = new Date();
  return (
    <footer id="contact" className="container mx-auto max-w-full flex flex-col items-center justify-center py-10 mt-10 px-10 pt-10 bg-black">
      <div className="flex gap-3">
        <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
          <Instagram className="text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.linkedin} aria-label="Discord">
						<Linkedin className="text-default-500" />
					</Link>
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
      </div>

      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="#"
        title="rustam"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">Rustam {date.getFullYear()}</p>
      </Link>
      
    </footer>
  );
};

export default Footer;
