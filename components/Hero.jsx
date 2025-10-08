"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-background">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4"
            >
                Halo, Saya <span className="text-primary">Wahyu</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground max-w-lg mb-6"
            >
                Saya seorang lulusan Teknik Informatika yang membangun website modern dan interaktif dengan teknologi terbaru.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <Button size="lg">Lihat Proyek Saya 🚀</Button>
            </motion.div>
        </section>
    );
}
