"use client";

import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "nitrogen_requirement",
    header: "Nitrogen Requirement",
  },
  {
    accessorKey: "tolerance",
    header: "Tolerance",
  },
  {
    accessorKey: "low_temp",
    header: "Low Temperature",
  },
  {
    accessorKey: "high_temp",
    header: "High Temperature",
  },
];
