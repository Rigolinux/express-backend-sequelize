import { Request, Response } from 'express';

const getAllEntries = async (req: Request, res: Response) => {
    
    return res.json({message: "Obtener todos los registros"});
    // const entries = await Entries.findAll();
    // res.json(entries);
}

const getEntry = async (req: Request, res: Response) => {
    const { id } = req.params;
    return res.json({message: `Obtener el registro con id ${id}`});
    // const entry = await Entries.findByPk(id);
    // res.json(entry);
}

const createEntry = async (req: Request, res: Response) => {
    //const { date, text, picture } = req.body;
    return res.json({message: `Crear un nuevo registro`});
    // const entry = await Entries.create({ date, text, picture });
    // res.json(entry);
}

const updateEntry = async (req: Request, res: Response) => {
    const { id } = req.params;
   // const { date, text, picture } = req.body;
    return res.json({message: `Registro actualizado`});
}

const deleteEntry = async (req: Request, res: Response) => {
    return res.json({message: `Registro eliminado`});
}

export { getAllEntries, getEntry, createEntry, updateEntry, deleteEntry };