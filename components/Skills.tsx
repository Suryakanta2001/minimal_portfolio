import React from "react";
import { Border } from "./ui/moving-border";
import CardSkill from "./CardSkill";
// import Vector from "@/public/tech-guy.png";
import javascript from "@/public/JavaScript.png";
import mongo from "@/public/mongodb.png";
import react from "@/public/react.png";
import next from "@/public/next.png";
import node from "@/public/node.png";
import typescript from "@/public/Typescript.png";
import tailwind from "@/public/tailwind.png";
import sass from "@/public/sass.png";
import mui from "@/public/mui.png";
import redux from "@/public/redux.png";

const Skills = () => {
    return (
        <div
            id="skills"
            className="md:py-28 py-8 w-10/12 md:w-3/4  flex flex-col items-center mx-auto"
        >
            <Border borderRadius="1.75rem" className="text-2xl">
                My Skills
            </Border>
            <div className=" w-full mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-8 md:gap-28">
                <CardSkill img={javascript} />
                <CardSkill img={typescript} />
                <CardSkill img={react} />
                <CardSkill img={next} />
                <CardSkill img={redux} />
                <CardSkill img={node} />
                <CardSkill img={mongo} />
                <CardSkill img={sass} />
                <CardSkill img={tailwind} />
                <CardSkill img={mui} />
            </div>
        </div>
    );
};

export default Skills;