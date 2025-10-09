"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

export default function DownloadCVButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv/Wahyu-CV.pdf"; // path ke file CV di public/
        link.download = "Wahyu-CV.pdf"; // nama file saat diunduh
        link.click();
        toast.success("CV berhasil diunduh!");
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
                onClick={handleDownload}
                variant="default"
                className="flex items-center gap-2"
            >
                <Download className="w-4 h-4" />
                Download CV
            </Button>
        </motion.div>
    );
}
