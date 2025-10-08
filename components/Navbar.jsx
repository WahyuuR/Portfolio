"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold text-primary">
                    Wahyu<span className="text-foreground">.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-sm">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Button + Menu Toggle */}
                <div className="flex items-center space-x-2">
                    <ThemeToggle />

                    <Button
                        size="sm"
                        variant="outline"
                        className="hidden md:inline-flex"
                    >
                        Hire Me
                    </Button>

                    <button
                        className="md:hidden text-muted-foreground hover:text-primary transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-background border-t border-border"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-3">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                size="sm"
                                variant="outline"
                                className="mt-3"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Me
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

