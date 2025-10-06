"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="cursor-pointer"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="cursor-pointer"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },

  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="w-9 h-9 relative">
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "price",

    // Custom header to include sorting
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },

    // Custom cell to format price with currency symbol
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price")).toFixed(2);

      return (
        <div className="font-medium flex items-center gap-0.5">
          {/* Light mode image */}
          <Image
            src="/taka.png"
            alt="BD Taka Icon"
            width={16}
            height={16}
            className="dark:hidden"
          />

          {/* Dark mode image */}
          <Image
            src="/taka-white.png"
            alt="BD Taka Icon (white)"
            width={16}
            height={16}
            className="hidden dark:block"
          />

          <span>{amount}</span>
        </div>
      );
    },

    // Allow numeric filtering
    filterFn: (row, id, value) => {
      const price = Number(row.getValue(id));
      const input = Number(value);
      if (isNaN(input)) return true; // show all if input not number
      return price >= input;
    },
  },

  {
    accessorKey: "shortDescription",
    header: "Description",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(product.id.toString())
              }
            >
              Copy product ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href={`/products/${product.id}`}>View Product</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
