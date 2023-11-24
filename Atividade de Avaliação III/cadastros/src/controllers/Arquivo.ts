import fs from 'fs-extra';
import { PacienteProps } from '../types';

class Arquivo {
  static filename: string = './src/controllers/dados.txt';

  static async read(): Promise<PacienteProps[]> {
    try {
      const content = await fs.readFile(this.filename, 'utf-8');
      const lines = content.split('\n');
      const pacientes: PacienteProps[] = lines
        .filter((line) => line.trim() !== '') // Remove linhas em branco
        .map((line) => {
          const [nome, doador] = line.split(';');
          return { nome, doador: doador === 'true' };
        });
      return pacientes;
    } catch (error) {
      throw error;
    }
  }

  static async write(itens: PacienteProps[]): Promise<void> {
    try {
      const lines = itens.map((item) => `${item.nome};${item.doador}`);
      const content = lines.join('\n');
      await fs.writeFile(this.filename, content);
    } catch (error) {
      throw error;
    }
  }
}

export { Arquivo };