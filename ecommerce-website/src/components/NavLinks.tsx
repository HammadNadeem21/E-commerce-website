"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const mens: { title: string; href: string; description: string }[] = [
  {
    title: "Shirts",
    href: "/shirts",
    description:
      "Upgrade your wardrobe with our stylish men’s shirts collection – perfect for a sharp and confident look.",
  },
  {
    title: "Pants",
    href: "/men-pants",
    description:
      "Discover our versatile men’s pants collection – designed for unmatched comfort and timeless style.",
  },
  {
    title: "Accessories",
    href: "/accessories",
    description:
      "Elevate your style with our premium men’s accessories – the perfect finishing touch for any outfit.",
  },
  {
    title: "Shoes",
    href: "/men-shoes",
    description:
      "Step into confidence with our exclusive men’s shoes collection – where comfort meets unmatched style.",
  },
];

const womens: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "/tops",
    description:
      "A Collection of beautiful tops for your wardrobe to sleek your look.",
  },
  {
    title: "Pants",
    href: "/women-pants",
    description:
      "A Collection of beautiful pants for your wardrobe to sleek your look.",
  },
  {
    title: "Accessories/Jewelry",
    href: "/jewelry",
    description:
      "A Collection of beautiful jewelry for your wardrobe to sleek your look.",
  },
  {
    title: "Shoes",
    href: "/women-shoes",
    description:
      "A Collection of top-notch shoes for your wardrobe to sleek your look.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Mens */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Mens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite">
              {mens.map((men) => (
                <Link key={men.title} href={men.href} legacyBehavior passHref>
                <ListItem  title={men.title} >
                  {men.description}
                </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Womens */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Womens</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myWhite">
              {womens.map((women) => (
                <Link key={women.title} href={women.href} legacyBehavior passHref>
                  <ListItem title={women.title}>{women.description}</ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-myOrange duration-300">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-gray-500 duration-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
