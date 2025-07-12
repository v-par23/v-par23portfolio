import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {X, Menu} from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Work", href: "#work"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
]

