"use client";

const listOrder = ["Low", "Medium", "High", "Very High"];

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Yeast = {
  id: number;
  name: number;
  brand: "Lalvin" | "Fermentis" | "Mangrove Jack" | "Red Star" | "Other";
  nitrogen_requirement: string;
  tolerance: string;
  low_temp: string;
  high_temp: string;
};

export const columns: ColumnDef<Yeast>[] = [
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-2 px-1"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nitrogen_requirement",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-2 px-1"
        >
          Nitrogen Requirement
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: (rowA, rowB) => {
      return (
        listOrder.indexOf(rowA.original.nitrogen_requirement) -
        listOrder.indexOf(rowB.original.nitrogen_requirement)
      );
    },
  },
  {
    accessorKey: "tolerance",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-2 px-1"
        >
          Tolerance
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <>{`${row.getValue("tolerance")}%`}</>;
    },
  },
  {
    accessorKey: "low_temp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-2 px-1"
        >
          Low Temperature
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row, table }) => {
      const { unit } = table.options.meta as any;
      const value = row.getValue("low_temp") as string;
      const celsius = Math.round((parseInt(value) - 32) * (5 / 9));

      if (unit === "F") return <>{`${value}°F`}</>;
      else return <>{`${celsius}°C`}</>;
    },
  },
  {
    accessorKey: "high_temp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="-ml-2 px-1"
        >
          High Temp
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row, table }) => {
      const { unit } = table.options.meta as any;
      const value = row.getValue("high_temp") as string;
      const celsius = Math.round((parseInt(value) - 32) * (5 / 9));

      if (unit === "F") return <>{`${value}°F`}</>;
      else return <>{`${celsius}°C`}</>;
    },
  },
];
