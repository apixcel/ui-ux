import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Dropdown = () => {
  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/features">Features</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/services">Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
