"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Creative Portfolio Website",
        description:
            "Website portofolio modern dengan animasi halus, dark mode, dan desain minimalis berbasis Next.js + Tailwind.",
        image: "/projects/placehol 400x600.svg",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        link: "#",
    },
    {
        title: "E-Commerce UI Kit",
        description:
            "Desain front-end e-commerce dengan sistem komponen reusable dan tema gelap otomatis.",
        image: "/projects/placehol 400x600.svg",
        tags: ["React", "shadcn/ui", "Responsive"],
        link: "#",
    },
    {
        title: "Dashboard Analytics",
        description:
            "Dashboard data interaktif dengan animasi grafik real-time menggunakan Recharts.",
        image: "/projects/placehol 400x600.svg",
        tags: ["Next.js", "Recharts", "Dark Mode"],
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background border-t border-border">
            <div className="max-w-6xl mx-auto px-6">
                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-3">
                        Proyek Unggulan
                    </h2>
                    <p className="text-muted-foreground">
                        Beberapa proyek terbaik yang pernah saya kerjakan
                    </p>
                </motion.div>

                {/* Grid Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300"

                        >
                            {/* Gambar */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Konten */}
                            <div className="p-6 flex flex-col space-y-3">
                                <h3 className="text-lg font-semibold text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href={project.link}>
                                        <Button size="sm" variant="outline" className="w-full">
                                            Lihat Proyek
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
