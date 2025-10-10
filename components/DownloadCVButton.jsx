"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

export default function DownloadCVButton() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv/cvWahyu.pdf";
        link.download = "Wahyu-CV.pdf";
        link.click();
        toast.success("CV berhasil diunduh!");
    };

    return (
            <Button
                onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2 mt-4"
            >
                <Download className="w-4 h-4" />
                Download CV
        </Button>
    );
}
