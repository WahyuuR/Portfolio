"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Pastikan komponen hanya dirender di client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Hindari render di server
    if (!mounted) {
        return (
            <Button
                size="icon"
                variant="ghost"
                disabled
                className="rounded-full opacity-50 cursor-not-allowed"
            >
                <Sun size={18} />
            </Button>
        );
    }

    const isDark = theme === "dark";

    return (
        <Button
            size="icon"
            variant="ghost"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-full"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
            </AnimatePresence>
        </Button>
    );
}
