import { Request, Response } from 'express';
import { Arquivo } from './Arquivo';
import { PacienteProps } from '../types';

class Pilha {
  static async push(req: Request, res: Response): Promise<void> {
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

  static async pop(req: Request, res: Response): Promise<void> {
    try {
      const pacientes = await Arquivo.read();
      if (pacientes.length === 0) {
        res.status(404).send('Pilha vazia');
        return;
      }

      const pacienteRemovido = pacientes.pop();
      await Arquivo.write(pacientes);

      if (pacientes.length === 0) {
        res.status(404).send('Pilha vazia');
        return;
      }

      res.json(pacienteRemovido);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }
}

export { Pilha };