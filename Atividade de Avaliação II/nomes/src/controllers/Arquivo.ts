import fs from 'fs-extra';

export class Arquivo {
  static filename: string = './src/controllers/dados.txt';

  static async read(): Promise<string[]> | never {
    try {
      const data = await fs.readFile(this.filename, 'utf-8');
      return data.split('\n').filter(Boolean);
    } catch (error) {
      throw new Error(`Erro ao ler o arquivo: ${error}`);
    }
  }

  static async write(nome: string): Promise<void> | never {
    try {
      await fs.appendFile(this.filename, `${nome}\n`);
    } catch (error) {
      throw new Error(`Erro ao escrever no arquivo: ${error}`);
    }
  }
}