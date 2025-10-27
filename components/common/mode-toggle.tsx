"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navItemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
            <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cyberpunk:scale-0 retro:scale-0 paper:scale-0 aurora:scale-0 synthwave:scale-0" />
            <Icons.retro className="absolute rotate-90 scale-0 transition-all retro:rotate-0 retro:scale-100" />
            <Icons.cyberpunk className="absolute rotate-90 scale-0 transition-all cyberpunk:rotate-0 cyberpunk:scale-100" />
            <Icons.paper className="absolute rotate-90 scale-0 transition-all paper:rotate-0 paper:scale-100" />
            <Icons.aurora className="absolute rotate-90 scale-0 transition-all aurora:rotate-0 aurora:scale-100" />
            <Icons.synthwave className="absolute rotate-90 scale-0 transition-all synthwave:rotate-0 synthwave:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Icons.sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Icons.moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem onClick={() => setTheme("retro")}>
          <Icons.retro className="mr-2 h-4 w-4" />
          <span>Retro</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cyberpunk")}>
          <Icons.cyberpunk className="mr-2 h-4 w-4" />
          <span>Cyberpunk</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("paper")}>
          <Icons.paper className="mr-2 h-4 w-4" />
          <span>Paper</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("aurora")}>
          <Icons.aurora className="mr-2 h-4 w-4" />
          <span>Aurora</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("synthwave")}>
          <Icons.synthwave className="mr-2 h-4 w-4" />
          <span>Synthwave</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator /> */}
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Icons.laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
