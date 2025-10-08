import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-xl font-semibold text-white">Wahyu<span className="text-primary">Dev</span></h1>
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        {["Home", "About", "Projects", "Contact"].map((item) => (
                            <NavigationMenuItem key={item}>
                                <NavigationMenuLink href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition">
                                    {item}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}
