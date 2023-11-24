import { Request, Response } from 'express';
import { Arquivo } from './Arquivo';
import { PacienteProps } from '../types';

class Fila {
  static async append(req: Request, res: Response): Promise<void> {
    try {
      const { nome, doador } = req.params;
      const pacientes = await Arquivo.read();
      pacientes.push({ nome, doador: doador === 'true' });
      await Arquivo.write(pacientes);
      res.json(pacientes);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }

  static async remove(req: Request, res: Response): Promise<void> {
    try {
      const pacientes = await Arquivo.read();
      if (pacientes.length === 0) {
        res.status(404).send('Fila vazia');
        return;
      }

      const pacienteRemovido = pacientes.shift();
      await Arquivo.write(pacientes);

      if (pacientes.length === 0) {
        res.status(404).send('Fila vazia');
        return;
      }

      res.json(pacienteRemovido);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
}

export { Fila };