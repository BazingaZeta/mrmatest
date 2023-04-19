// always use interface for public API's definition when authoring a library or 3rd party ambient type definitions
// consider using type for your React Component Props and State

import { UUID } from "crypto";
import { DateFromISOString } from "io-ts-types/lib/DateFromISOString";
import { Contributor } from "./Contributor";

export interface Composition {
  contributors: Contributor[];
  created: typeof DateFromISOString;
  creationYear: number;
  id: UUID;
  title: string;
}
