import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-24 text-center bg-muted/10">
            <div className="max-w-xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-primary">Hubungi Saya</h2>
                <form className="flex flex-col gap-4">
                    <Input type="text" placeholder="Nama Anda" />
                    <Input type="email" placeholder="Email Anda" />
                    <Textarea placeholder="Pesan Anda..." />
                    <Button type="submit" className="mt-4">Kirim Pesan</Button>
                </form>
            </div>
        </section>
    );
}
