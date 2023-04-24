import BasicTable from "@/components/BasicTable";
import { Input } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Composition } from "../types/compositions/Composition";
import API_RESPONSE from "./api/API_RESPONSE.json";

const columns = ["Title", "Contributors", "Creation Date"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [compositions, setCompositions] = useState<Composition[]>(
    API_RESPONSE.compositions as Composition[]
  );

  return (
    <main className="flex min-h-screen flex-col items-left p-10">
      <Input
        onChange={(event) => setQuery(event.target.value)}
        bordered
        labelPlaceholder="Search..."
        color="default"
      />
      <BasicTable
        columns={columns}
        data={
          (query &&
            compositions.filter((composition) =>
              composition.title.toLowerCase().includes(query.toLowerCase())
            )) ||
          compositions
        }
      />
    </main>
  );
}
