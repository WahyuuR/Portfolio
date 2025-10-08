"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center bg-background">
            {/* Container animasi utama */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="px-6 max-w-3xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl font-bold tracking-tight sm:text-6xl text-foreground mb-4"
                >
                    Hai, saya <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        Wahyu
                    </span>

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg text-muted-foreground leading-relaxed mb-8"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolore hic cumque pariatur incidunt iure dolorum ex velit veritatis eum doloribus alias aut soluta molestiae minus, cum dolor ab atque.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="rounded-xl">
                            Lihat Proyek
                        </Button>
                    </Link>

                    <Link href="#contact">
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-xl border-border text-muted-foreground"
                        >
                            Hubungi Saya
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Background subtle animasi */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.2 }}
            >
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
                />
            </motion.div>
        </section>
    );
}
