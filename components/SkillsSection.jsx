"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skillLevels = {
    Beginner: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    Intermediate: "bg-amber-500/10 text-amber-500 border-amber-500/30",
    Advanced: "bg-green-500/10 text-green-500 border-green-500/30",
    Expert: "bg-purple-500/10 text-purple-500 border-purple-500/30",
};

const skills = [
    {
        title: "Frontend",
        items: [
            { name: "HTML", icon: "/tech/html.svg", level: "Intermediate" },
            { name: "CSS", icon: "/tech/css.svg", level: "Intermediate" },
            { name: "JavaScript", icon: "/tech/javascript.svg", level: "Intermediate" },
            { name: "React", icon: "/tech/react.svg", level: "Beginner" },
            { name: "Next.js", icon: "/tech/nextjs.svg", level: "Beginner" },
            { name: "Tailwind CSS", icon: "/tech/tailwind.svg", level: "Beginner" },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: "/tech/nodejs.svg", level: "Beginner" },
            { name: "Express", icon: "/tech/express.svg", level: "Beginner" },
            { name: "Python", icon: "/tech/python.svg", level: "Beginner" },
            { name: "PHP", icon: "/tech/php.svg", level: "Beginner" },
        ],
    },
    {
        title: "Tools & Others",
        items: [
            { name: "Git", icon: "/tech/git.svg", level: "Beginner" },
            { name: "Vercel", icon: "/tech/vercel.svg", level: "Beginner" },
            { name: "Figma", icon: "/tech/figma.svg", level: "Beginner" },
            { name: "VS Code", icon: "/tech/vscode.svg", level: "Intermediate" },
        ],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-semibold text-center mb-12 tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills & Tech Stack
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.4 }}
                        >
                            <Card className="border-border/50 bg-card/40 backdrop-blur-sm transition-all hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg font-medium">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-2">
                                        {category.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center gap-3"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <div className="relative w-8 h-8">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium">
                                                        {item.name}
                                                    </span>
                                                    <Badge
                                                        variant="outline"
                                                        className={`mt-1 text-xs font-normal border ${skillLevels[item.level]}`}
                                                    >
                                                        {item.level}
                                                    </Badge>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
