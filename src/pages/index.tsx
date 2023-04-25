import ArtistsTable from "@/components/ArtistsTable";
import { Input } from "@nextui-org/react";
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
    <main className="flex flex-col p-10">
      <div className="flex flex-col pb-10">
        <Input
          onChange={(event) => setQuery(event.target.value)}
          bordered
          labelPlaceholder="Search..."
          color="default"
        />
      </div>

      <ArtistsTable
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
