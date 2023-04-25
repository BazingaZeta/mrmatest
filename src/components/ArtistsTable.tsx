import React from "react";
import { Table } from "@nextui-org/react";
import { Composition } from "@/types/compositions/Composition";
import formatDate from "../utils/formatDate";

type ArtistsTableProps = {
  columns: string[];
  data: Composition[];
};

const ArtistsTable = ({ columns, data }: ArtistsTableProps) => {
  return (
    <Table
      aria-label="Example static collection table with multiple selection"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="multiple"
    >
      <Table.Header>
        {columns.map((column: string, index: number) => (
          <Table.Column key={index}>{column}</Table.Column>
        ))}
      </Table.Header>
      <Table.Body>
        {data.map((row: Composition, index: number) => (
          <Table.Row key={index}>
            <Table.Cell>{row.title}</Table.Cell>
            <Table.Cell>{row.contributors.length}</Table.Cell>
            <Table.Cell>{formatDate(row.created as string)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ArtistsTable;
