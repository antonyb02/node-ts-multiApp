import path from "path";
import fs from "fs/promises";

const rutaCarpeta = path.join(import.meta.dirname, "outputs");
const rutaArchivo = path.join(rutaCarpeta, "tabla-5.txt");
let message = `
======================================\n
            Tabla del 5
======================================\n
`;

for (let index = 0; index < 10; index++) {
  message += `5 x ${index + 1} = ${(index + 1) * 5}\n`;
}

try {
  await fs.writeFile(rutaArchivo, message);
  console.log("Archivo creado.");
} catch (error) {
  console.error("Error:", error);
}
console.log(message);
