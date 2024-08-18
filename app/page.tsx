import axios from "axios";
import { Yeast, columns } from "./columns";
import { DataTable } from "./data-table";
const API_URL = "https://mead-tools-api.vercel.app/api";

async function getData(): Promise<Yeast[]> {
  const { data } = await axios.get(`${API_URL}/yeasts`);

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center mt-12">
      <div className="container py-10 pl-1 pr-1 md:px-6">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
