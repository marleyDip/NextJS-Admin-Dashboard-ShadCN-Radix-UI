"use client";

import { useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/TablePagination";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Info, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter: globalFilterValue,
    },
    onGlobalFilterChange: setGlobalFilterValue,
    globalFilterFn: (row, columnId, filterValue) => {
      // ✅ Access data from the row
      const name = row.original.name?.toString().toLowerCase() ?? "";
      const price = Number(row.original.price);
      const input = filterValue.toString().toLowerCase().trim();

      // ✅ If input is empty — show all rows
      if (input === "") return true;

      if (input.startsWith(">=")) return price >= Number(input.slice(2));
      if (input.startsWith("<=")) return price <= Number(input.slice(2));
      if (input.startsWith(">")) return price > Number(input.slice(1));
      if (input.startsWith("<")) return price < Number(input.slice(1));
      if (input.startsWith("=")) return price === Number(input.slice(1));

      // ✅ If input is numeric — filter by price
      if (!isNaN(Number(input))) {
        return price >= Number(input);
      }

      // Otherwise — filter by name
      return name.includes(input);
    },
  });

  //console.log(rowSelection);

  return (
    <div className="rounded-md border">
      {/* Delete payment */}
      {Object.keys(rowSelection).length > 0 ? (
        <div className="flex justify-end">
          <Button
            variant="destructive"
            className="m-4 hover:-translate-x-1 transition-transform duration-200"
          >
            <Trash2 className="w-4 h-4" />
            Delete Product(s)
          </Button>
        </div>
      ) : (
        <>
          {/* Filter name, price & Column Visibility */}
          <div className="flex items-center p-4">
            {/* Filter name, price by search */}
            <Input
              placeholder="Search Name or Price (<=, =>, >, <, =, abc, 10 )"
              value={globalFilterValue}
              onChange={(e) => setGlobalFilterValue(e.target.value)}
              className="max-w-[150px] sm:max-w-sm md:max-w-md dark:!placeholder-gray-300 !placeholder-gray-600"
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <Info className="w-6 h-6" />
                </button>
              </TooltipTrigger>

              <TooltipContent className="max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg dark:bg-lime-300 bg-fuchsia-600">
                <p className="text-sm font-medium">
                  নিচের চিহ্নগুলো ব্যবহার করে পণ্যগুলোর দাম অনুযায়ী খুঁজতে
                  পারেন:
                  <br />
                  <strong>&gt;1000</strong> = 1000 এর চেয়ে বেশি দাম
                  <br />
                  <strong>&lt;1000</strong> = 1000 এর চেয়ে কম দাম
                  <br />
                  <strong>&gt;=1000</strong> = 1000 বা তার চেয়ে বেশি দাম
                  <br />
                  <strong>&lt;=1000</strong> = 1000 বা তার চেয়ে কম দাম
                  <br />
                  <strong>=1000</strong> = ঠিক 1000 দাম
                  <br />
                  <br />
                  অথবা পণ্যের নাম লিখে নাম অনুযায়ী খুঁজতে পারেন।
                </p>
              </TooltipContent>
            </Tooltip>
            {/* Filter name, price by search */}

            {/* Column Visibility */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Filter name, price & Column Visibility */}
        </>
      )}
      {/* Delete payment */}

      {/* Table */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Table */}

      {/* Pagination */}
      <DataTablePagination table={table} />
      {/* Pagination */}
    </div>
  );
}

/* globalFilterFn: (row, columnId, filterValue) => {
      const name = row.original.name.toLowerCase();
      const price = Number(row.original.price);
      const inputRaw = filterValue.toString().trim();

      if (!inputRaw) return true; // show all rows if empty

      const firstChar = inputRaw.charAt(0);
      const rest = inputRaw.slice(1).trim();
      const value = Number(rest);

      // Handle operator + number
      if (!isNaN(value)) {
        switch (firstChar) {
          case "+":
            return price > value; // +1000 => price > 1000
          case "-":
            return price < value; // -500  => price < 500
          case "=":
            return price === value; // =1500 => price === 1500
          case "*":
            return price >= value; // *1500 => price >= 1500
          case "/":
            return price <= value; // /1500 => price <= 1500
        }
      }

      // If first char is not an operator but the whole input is numeric
      if (!isNaN(Number(inputRaw))) return price >= Number(inputRaw);

      // Otherwise treat as name search
      return name.includes(inputRaw.toLowerCase());
    },
*/

/* value={
    ((table.getColumn("name")?.getFilterValue() as string) ||
      (table.getColumn("price")?.getFilterValue() as string)) ??
    ""
  }

  onChange={(event) => {
    const value = event.target.value;

    if (isNaN(Number(value))) {
      // text → filter by name only
      table.getColumn("name")?.setFilterValue(value);
      table.getColumn("price")?.setFilterValue("");
    } else {
      // number → filter by price only
      table.getColumn("name")?.setFilterValue("");
      table.getColumn("price")?.setFilterValue(value);
    }

  //Filter name column
  //table.getColumn("name")?.setFilterValue(value);
  }}
*/

/*  <p className="text-sm font-medium">
      You can filter by price using operators:
      <br />
      <strong>&gt;1000</strong> - price greater than 1000
      <br />
      <strong>&lt;1000</strong> - price less than 1000
      <br />
      <strong>&gt;=1000</strong> - price greater or equal to 1000
      <br />
      <strong>&lt;=1000</strong> - price less or equal to 1000
      <br />

      // Operator tooltip
      <strong>=1000</strong> - price exactly 1000
      <strong>+1000</strong> - price greater than 1000
      <br />
      <strong>-1000</strong> - price less than 1000
      <br />
      <strong>*1000</strong> - price greater or equal to 1000
      <br />
      <strong>/1000</strong> - price less or equal to 1000
      <br />
      <strong>=1000</strong> - price exactly 1000
    </p>
*/
