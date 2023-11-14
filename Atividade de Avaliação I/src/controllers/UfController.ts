import { Request, Response } from 'express';
import ufs from './dados';

export function UfIbge(req: Request, res: Response) {
    try {
        const { ibge_cod } = req.params;
        const ibge_client = Number(ibge_cod)

        const meuUf = ufs.filter(({ ibge }) => ibge === ibge_client);
        if (meuUf.length > 0) {
            return res.json(meuUf[0])
        }
        else {
            return res.status(401).json({ message: `Código ${ibge_cod} não encontrado!` })
        }
    } catch (error) {
        res.json({ "ERRO AO BUSCAR UF": error })
    }
}

export function UfSigla(req: Request, res: Response) {
    try {
        const { sigla } = req.params;

        const meuUf = ufs.filter(({ uf }) => uf === sigla.toUpperCase());
        if (meuUf.length > 0) {
            return res.json(meuUf[0])
        }
        else {
            return res.status(401).json({ message: `SIGLA: ${sigla} não encontrada!` })
        }
    } catch (error) {
        res.json({ "ERRO AO BUSCAR UF por sigla": error })
    }
}