import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  //Storage repository dentro de los parentesis del constructor
  constructor() {}

  execute({
    fileContent,
    destination = "outputs",
    fileName = "table.txt",
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });

      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      console.log("File Created");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
