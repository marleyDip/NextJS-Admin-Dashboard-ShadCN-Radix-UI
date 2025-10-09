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
import { Trash2 } from "lucide-react";
import { User } from "./columns";

interface DataTableProps<TValue> {
  columns: ColumnDef<User, TValue>[];
  data: User[];
}

export function DataTable<TValue>({ columns, data }: DataTableProps<TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

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
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter, // shorthand for globalFilter: globalFilter
    },
    //globalFilterFn: (row, _, filterValue) => {
    globalFilterFn: (row, columnId, filterValue) => {
      const user = row.original as User;

      const name = user.fullName?.toLowerCase().trim() ?? "";
      const email = user.email?.toLowerCase().trim() ?? "";
      const status = user.status?.toString().toLowerCase().trim() ?? "";

      const search = filterValue?.toString().toLowerCase().trim();

      //console.log("status:", row.original.status, "search:", search);
      //console.log(`"${status}" === "${search}"`, status.includes(search));

      // OR logic
      return (
        name.includes(search) ||
        email.includes(search) ||
        status.startsWith(search)

        // string.startsWith(substring, position)
        //status === search => exact match for status
      );
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
            Delete User(s)
          </Button>
        </div>
      ) : (
        <>
          {/* Filter email & Column Visibility */}
          <div className="flex items-center p-4">
            {/* Filter name, email by search */}
            <Input
              placeholder="নাম, ইমেইল বা স্ট্যাটাস দিয়ে খুঁজুন…"
              className="max-w-[180px] sm:max-w-sm md:max-w-md dark:!placeholder-gray-300 !placeholder-gray-600"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
            {/* Filter name, email by search */}

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
          {/* Filter email & Column Visibility */}
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

/* Why this version needs globalFilter state

    ✅ Use column filters
    → When you have separate filter inputs for each column.

    ✅ Use global filter (this one)
    → When you want one single search box that matches multiple fields (like name or email or phone).

    = You are not filtering specific columns (like fullName or email directly).

    = You’re telling React Table: “Here’s one single global search term, please filter all rows based on this logic.”

    = React Table doesn’t automatically store that globalFilter value — you must keep it in your own state (useState).

    = Then onGlobalFilterChange tells React Table whenever it changes.

  state: { globalFilter }
    = means → “Hey table, here’s the current global filter text to use.”

  onGlobalFilterChange: setGlobalFilter
    = means → “Whenever the user types, update my globalFilter variable.”

Feature	       peer-column version	       Global filter version
Filter type	      Column filters	            Global filter

Controlled by	      React Table	             You (React state)

State needed	           ❌ No	                    ✅ Yes

Logic	         One filter per column	          One unified

Works across all columns	❌ No	                  ✅ Yes

Uses globalFilterFn	      ❌ No	                  ✅ Yes
*/
