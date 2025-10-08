"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 border-t border-border bg-background text-foreground"
        >
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Foto Profil */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border border-border">
                        <Image
                            src="/profil/placehold600x600.png"
                            alt="Wahyu"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Teks Deskripsi */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-3">Tentang Saya</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Saya <span className="text-primary font-medium">Wahyu</span>,
                            lulusan Teknik Informatika dengan fokus pada pengembangan
                            web modern menggunakan <span className="text-foreground font-medium">Next.js</span>,{" "}
                            <span className="text-foreground font-medium">Tailwind CSS</span>, dan{" "}
                            <span className="text-foreground font-medium">Framer Motion</span>.
                            Saya senang membangun antarmuka yang elegan, responsif, dan efisien.
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground leading-relaxed">
                            Saya juga tertarik pada bidang UI/UX, performa web, dan animasi interaktif.
                            Tujuan saya adalah menciptakan pengalaman pengguna yang intuitif dan memikat.
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        size="lg"
                        className="mt-4"
                        onClick={() =>
                            window.scrollTo({
                                top: document.getElementById("contact")?.offsetTop,
                                behavior: "smooth",
                            })
                        }
                    >
                        Hubungi Saya
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
