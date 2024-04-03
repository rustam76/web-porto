import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { title } from "@/components/primitives";
import React from "react";
import data from "@/app/api//data.json";
import "@/app/project/pro.css";
import { tagColor } from "@/config/tag";
import { Link } from "@nextui-org/link";

const Project = () => {
  return (
    <section id="project" className="pt-36 2xl:pt-[11rem]">
      <h1 className={title()}>🚀 Highlighted Projects</h1>
      <p className="text-lg py-7 max-w-lg">
        I've worked on a variety of projects, ranging from small MVPs to
        full-scale applications, also developed a wide array of features and
        functionalities in projects
      </p>
      <div className="grid hide-scrollbar overflow-y-hidden snap-x gap-8 xl:gap-10 grid-flow-col py-8  pl-3 xl:pl-6">
        {(data.data || []).map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="snap-end shrink-0 xl:w-[400px] w-[330px]"
          >
            <Card
              key={index}
              className="py-4 dark:hover:border-2 dark:hover:border-indigo-500"
            >
              <CardBody className="overflow-visible py-2 ">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl h-[300px] w-full"
                  src={item.image}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex items-center justify-center gap-2">
                  {item.tag.map((tag, index) => (
                    <p
                      key={index}
                      className={`text-tiny ${tagColor(tag)} rounded-full p-1`}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <h4 className="font-bold text-large">{item.name}</h4>
                <small className="text-default-500 line-clamp-1 hover:line-clamp-none">{item.description}</small>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
