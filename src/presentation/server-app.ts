import { CreateTable } from "../use-cases/create-table.use-case.js";
import { SaveFile } from "../use-cases/save-file.use-case.js";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  name: string;
}

export class ServerApp {
  static run({ base, limit, showTable, destination, name }: RunOptions) {
    console.log("Server running....");
    console.log({ destination, name });
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: destination,
      fileName: name,
    });
    console.log(table);
  }
}
