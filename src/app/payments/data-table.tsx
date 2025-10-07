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
import { Payment } from "./columns";

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
      globalFilter,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      const name =
        row.original.fullName?.toString().toLowerCase().trim() ??
        row.original.fullname?.toString().toLowerCase().trim() ??
        "";
      const email = row.original.email?.toString().toLowerCase().trim() ?? "";
      const status = row.original.status?.toString().toLowerCase().trim() ?? "";
      const amount = Number(row.original.amount);

      const inputRaw = filterValue?.toString().toLowerCase().trim();

      // No search, show all
      if (!inputRaw) return true;

      // Define Operator
      type Operator = ">=" | "<=" | ">" | "<" | "=";
      const ops: Operator[] = [">=", "<=", ">", "<", "="];
      // Detect which one exists
      const operator = ops.find((op) => inputRaw.includes(op)) as
        | Operator
        | undefined;

      if (operator) {
        // split input into parts using the operator
        // const parts = inputRaw
        //   .split(operator)
        //   .map((part: string) => part.trim());
        // const statusPart = parts[0];
        // const valuePart = parts[1];

        //const inputRaw = "failed>=120";
        //inputRaw.split(">="); // ["failed", "120"]
        //.map(x => x.trim()) Trims whitespace from each part.
        //const [statusPart, valuePart] = ["failed", "120"];
        //console.log(statusPart); // "failed"
        //console.log(valuePart); // "120"

        // Destructure Assignment
        const [statusPart, valuePart] = inputRaw
          .split(operator)
          .map((x: string) => x.trim());
        const val = Number(valuePart);

        const validStatus: Payment["status"][] = [
          "pending",
          "processing",
          "success",
          "failed",
        ];
        const compare: Record<Operator, boolean> = {
          ">=": amount >= val,
          "<=": amount <= val,
          ">": amount > val,
          "<": amount < val,
          "=": amount === val,
        };

        // case: 1 statusPart is valid status => status + amount filter
        if (
          validStatus.includes(statusPart as Payment["status"]) &&
          !isNaN(val)
        ) {
          return status === statusPart && compare[operator];
        }

        // case: 2 valuePart is numeric => amount only
        if (!isNaN(val)) {
          return compare[operator];
        }
      } else {
        // case 3: if input is numeric only
        const val = Number(inputRaw);
        if (!isNaN(val)) {
          return amount >= val;
        }
      }

      // Fallback, normal text search (name, email, or status)
      return (
        name.includes(inputRaw) ||
        email.includes(inputRaw) ||
        status.startsWith(inputRaw)
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
            Delete Payment(s)
          </Button>
        </div>
      ) : (
        <>
          {/* Filter email & Column Visibility */}
          <div className="flex items-center p-4">
            {/* Filter email by search */}
            <Input
              placeholder="Filter Payments by Name, Emails, Status, Amount"
              className="max-w-[160px] sm:max-w-sm md:max-w-md dark:!placeholder-gray-300 !placeholder-gray-600"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                  <Info className="w-6 h-6" />
                </button>
              </TooltipTrigger>

              <TooltipContent className="max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg dark:bg-lime-300 bg-fuchsia-600">
                <p className="text-sm font-medium">
                  You can filter by price using operators:
                  <br />
                  <strong>=100</strong> - price exactly 100
                  <br />
                  <strong>&gt;100</strong> - price greater than 100
                  <br />
                  <strong>&lt;100</strong> - price less than 100
                  <br />
                  <strong>&gt;=100</strong> - price greater or equal to 100
                  <br />
                  <strong>&lt;=100</strong> - price less or equal to 100
                  <br />
                  <br />
                  Or you can filter transaction by User Name, Email, Status.
                </p>
              </TooltipContent>
            </Tooltip>
            {/* Filter email by search */}

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

/* isNaN() → checks if a value is Not a Number.
It returns:
      = true → when the value is not a valid number
      = false → when the value is a valid number

  So, !isNaN(val) means:
      = "The value is a number."
      = Because: isNaN(val) → true if Not a Number

      !isNaN(val) → false reversed → means it is a Number

  Example
      isNaN("abc")     // true  -> "abc" is not a number
      isNaN(123)       // false -> 123 is a number
      isNaN("123")     // false -> "123" can be converted to a number

      !isNaN("abc")    // false -> not a number
      !isNaN(123)      // true  -> it's a number
      !isNaN("123")    // true  -> it's a number
*/

/* Price filter = switch Conditional Statement, String Methods => charAt(), startsWith() Array & String Methods = slice()

    globalFilterFn: (row, columnId, filterValue) => {
      const name = row.original.fullName?.toString().toLowerCase().trim() ?? "";
      const email = row.original.email?.toString().toLowerCase().trim() ?? "";
      const status = row.original.status?.toString().toLowerCase().trim() ?? "";
      const amount = Number(row.original.amount);

      const inputRaw = filterValue?.toString().toLowerCase().trim();

      // 1. Show all rows if no input
      if (!inputRaw) return true;

      // 2. Fix typo: should be startsWith, not startWith
      if (inputRaw.startsWith(">=")) {
        const value = Number(inputRaw.slice(2));
        return amount >= value;
      }
      if (inputRaw.startsWith("<=")) {
        const value = Number(inputRaw.slice(2));
        return amount <= value;
      }

      // 3. Handle single-character operators
      const firstChar = inputRaw.charAt(0);
      const value = Number(inputRaw.slice(1));

      if (!isNaN(value)) {
        switch (firstChar) {
          case ">":
            return amount > value;
          case "<":
            return amount < value;
          case "=":
            return amount === value;
        }
      }

      // 4. If no operator but input is a number
      if (!isNaN(Number(inputRaw))) return amount >= Number(inputRaw);

      // 5. Otherwise, filter by text
      return (
        name.includes(inputRaw) ||
        email.includes(inputRaw) ||
        status.startsWith(inputRaw)
      );
    },
*/

/* Price filter = Regular expressions (regex) => test()...switch Conditional Statement, String Methods => charAt(), startsWith() Array & String Methods = slice()

    globalFilterFn: (row, columnId, filterValue) => {
      const name = row.original.fullname?.toString().toLowerCase().trim() ?? "";
      const email = row.original.email?.toString().toLowerCase().trim() ?? "";
      const status = row.original.status?.toString().toLowerCase().trim() ?? "";
      const amount = Number(row.original.amount);

      const inputRaw = filterValue?.toString().toLowerCase().trim();
      if (!inputRaw) return true;

      if (/^(>=|<=|<|>|=)/.test(inputRaw)) {
        let operator = "";
        let numStr = inputRaw;

        if (inputRaw.startsWith(">=") || inputRaw.startsWith("<=")) {
          operator = inputRaw.slice(0, 2);
          numStr = inputRaw.slice(2);
        } else if (/^[><=]/.test(inputRaw)) {
          operator = inputRaw.charAt(0);
          numStr = inputRaw.slice(1);
        }

        const value = Number(numStr.trim());
        if (isNaN(value)) return true;

        switch (operator) {
          case ">=":
            return amount >= value;
          case "<=":
            return amount <= value;
          case ">":
            return amount > value;
          case "<":
            return amount < value;
          case "=":
            return amount === value;
          default:
            return true;
        }
      }

      if (!isNaN(Number(inputRaw))) return amount >= Number(inputRaw);

      // 👉 Otherwise, filter by text fields
      return (
        name.includes(inputRaw) ||
        email.includes(inputRaw) ||
        status.startsWith(inputRaw)
      );
    },
*/

/* Price filter = 3rd Method

    globalFilterFn: (row, columnId, filterValue) => {
      const name =
        row.original.fullName?.toString().toLowerCase().trim() ??
        row.original.fullname?.toString().toLowerCase().trim() ??
        "";
      const email = row.original.email?.toString().toLowerCase().trim() ?? "";
      const status = row.original.status?.toString().toLowerCase().trim() ?? "";
      const amount = Number(row.original.amount);

      const inputRaw = filterValue?.toString().toLowerCase().trim();

      //console.log("search inputRaw:", JSON.stringify(inputRaw));
      //console.log("row.fullName:", JSON.stringify(row.original.fullName));
      //console.log("row.email:", JSON.stringify(row.original.email));
      //console.log("row.status:", JSON.stringify(row.original.status));

      // No search, show all
      if (!inputRaw) return true;

      // Define Operator and detect which one exists
      type Operator = ">=" | "<=" | ">" | "<" | "=";
      const ops: Operator[] = [">=", "<=", ">", "<", "="];
      const operator = ops.find((op) => inputRaw.startsWith(op)) as
        | Operator
        | undefined;

      // Extract numeric part
      //const valueString = operator
      //? inputRaw.slice(operator.length).trim()
      //: inputRaw;
      //const val = Number(valueString);

      const val = Number(inputRaw.replace(operator ?? "", "").trim());
      //string.replace(pattern, replacement)

      // If valid number and operator found, compare...property key = property string &  property value = boolean[ true, ]
      if (!isNaN(val)) {
        const compare: Record<Operator, boolean> = {
          ">=": amount >= val,
          "<=": amount <= val,
          ">": amount > val,
          "<": amount < val,
          "=": amount === val,
        };

        // If an operator is used, return result
        if (operator) return compare[operator];
        // compare[operator] => compare["<"] dynamic property access or object lookup

        // if no operator (just number), default to >=
        return amount >= val;
      }

      // Otherwise, filter by text (name, email, or status)
      return (
        name.includes(inputRaw) ||
        email.includes(inputRaw) ||
        status.startsWith(inputRaw)
      );
    },
*/

/* <Input
    placeholder="Filter emails..."
    value={
      (table.getColumn("email")?.getFilterValue() as string) ?? ""
    }
    onChange={(event) =>
      table.getColumn("email")?.setFilterValue(event.target.value)
    }
    className="max-w-sm placeholder-gray-500"
  />
*/

/* globalFilterFn: (row, columnId, filterValue) => {
      const name = (row.original.fullName ?? row.original.fullname ?? "")
        .toLowerCase()
        .trim();
      const email = (row.original.email ?? "").toLowerCase().trim();
      const status = (row.original.status ?? "").toLowerCase().trim();
      const amount = Number(row.original.amount);

      if (!filterValue) return true;

      const inputRaw = filterValue.toString().toLowerCase().trim();

      type Operator = ">=" | "<=" | ">" | "<" | "=";
      const ops: Operator[] = [">=", "<=", ">", "<", "="]; // longest first

      const validStatuses: Payment["status"][] = [
        "pending",
        "processing",
        "success",
        "failed",
      ];

      // Split multiple conditions by space
      const conditions = inputRaw.split(/\s+/);

      return conditions.some((cond) => {
        // Detect operator in the condition
        const operator = ops.find((op) => cond.includes(op));

        let leftPart = "";
        let rightPart = "";

        if (operator) {
          const idx = cond.indexOf(operator);
          leftPart = cond.slice(0, idx).trim(); // status part or empty
          rightPart = cond.slice(idx + operator.length).trim(); // numeric part
        } else {
          rightPart = cond;
        }

        const val = Number(rightPart);

        const compare: Record<Operator, boolean> = {
          ">=": amount >= val,
          "<=": amount <= val,
          ">": amount > val,
          "<": amount < val,
          "=": amount === val,
        };

        // CASE 1: Status + numeric filter
        const matchedStatus = validStatuses.find((s) => s.startsWith(leftPart));
        if (matchedStatus && !isNaN(val) && operator) {
          return status === matchedStatus && compare[operator as Operator];
        }

        // CASE 2: Numeric-only operator filter
        if (!leftPart && !isNaN(val) && operator) {
          return compare[operator as Operator];
        }

        // CASE 3: Plain number without operator → default >=
        if (!operator && !isNaN(val)) {
          return amount >= val;
        }

        // CASE 4: Text search fallback
        return (
          name.includes(cond) || email.includes(cond) || status.startsWith(cond)
        );
      });
    },
*/
