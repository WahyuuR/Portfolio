"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner"; // ✅ gunakan sonner

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        // contoh simulasi pengiriman data
        setTimeout(() => {
            toast.success("Pesan berhasil dikirim!", {
                description: "Terima kasih telah menghubungi saya — saya akan segera membalas.",
            });
        }, 500);
    };

    return (
        <section
            id="contact"
            className="py-24 border-t border-border bg-background text-foreground"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-3">Hubungi Saya</h2>
                    <p className="text-muted-foreground mb-10">
                        Saya terbuka untuk kolaborasi, proyek freelance, atau diskusi menarik seputar web development.
                    </p>
                </motion.div>

                {/* Formulir */}
                <motion.form
                    onSubmit={handleSubmit} // ✅ event handler toast
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-5 max-w-md mx-auto text-left"
                >
                    <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                            Nama
                        </label>
                        <Input
                            type="text"
                            placeholder="Masukkan nama Anda"
                            required
                            className="bg-card border-border"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                            Email
                        </label>
                        <Input
                            type="email"
                            placeholder="Masukkan email Anda"
                            required
                            className="bg-card border-border"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-foreground mb-1 block">
                            Pesan
                        </label>
                        <Textarea
                            placeholder="Tuliskan pesan Anda..."
                            required
                            className="bg-card border-border h-32"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2"
                    >
                        <Send size={16} />
                        Kirim Pesan
                    </Button>
                </motion.form>

                {/* Sosial Media */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-14 flex justify-center gap-6"
                >
                    <Link
                        href="mailto:wahyu@example.com"
                        className="text-muted-foreground hover:text-primary transition"
                        aria-label="Email"
                    >
                        <Mail size={22} />
                    </Link>
                    <Link
                        href="https://github.com/username"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition"
                        aria-label="GitHub"
                    >
                        <Github size={22} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={22} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
