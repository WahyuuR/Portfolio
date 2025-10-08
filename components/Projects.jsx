import { Card, CardContent } from "@/components/ui/card";

const projects = [
    { title: "Portfolio Website", desc: "Website pribadi dengan Next.js & Shadcn UI." },
    { title: "Dashboard Admin", desc: "Dashboard interaktif dengan chart dan autentikasi." },
    { title: "Movie Finder", desc: "Pencarian film menggunakan API publik." },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-background text-center">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-primary">Proyek Saya</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((proj, i) => (
                        <Card key={i} className="bg-card border-border hover:border-primary transition">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{proj.title}</h3>
                                <p className="text-muted-foreground">{proj.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
