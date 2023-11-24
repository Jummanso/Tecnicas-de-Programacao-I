import { Request, Response } from 'express';
import { Arquivo } from './Arquivo';

export class Pilha {
  static async push(req: Request, res: Response): Promise<void> {
    const nome = req.params.nome;

    if (!nome) {
      res.status(400).send('Nome inválido');
      return;
    }

    try {
      await Arquivo.write(nome);
      res.json(await Arquivo.read());
    } catch (error: any) {
      res.status(500).send(`Erro interno do servidor: ${error.message}`);
    }
  }

  static async pop(req: Request, res: Response): Promise<void> {
    try {
      const nomes = await Arquivo.read();
      if (nomes.length === 0) {
        res.status(404).send('Pilha vazia');
      } else {
        const nomeRemovido = nomes.pop();
        res.json(nomeRemovido);
      }
    } catch (error: any) {
      res.status(500).send(`Erro interno do servidor: ${error.message}`);
    }
  }
}