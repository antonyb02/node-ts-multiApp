export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /*
     DI dependency injection
        */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let message = "";
    for (let index = 0; index < limit; index++) {
      message += `${base} x ${index + 1} = ${(index + 1) * base}\n`;
    }
    return message;
  }
}
