import { UUID } from "crypto";

export interface Contributor {
  id: UUID;
  roles: string[];
}
