export default function Footer() {
    return (
        <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
            © {new Date().getFullYear()}. Dibuat dengan ❤️ menggunakan Next.js & Shadcn UI.
        </footer>
    );
}
