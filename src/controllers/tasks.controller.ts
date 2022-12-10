import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { Request, Response } from "npm:express";
import Task, { taskSchema } from "../models/task.model.ts";

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await Task?.find().toArray();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getTaskById = async (req: Request, res: Response) => {

  try {
    const { id } = req.params
    const task = await Task?.findOne({ _id: new Bson.ObjectId(id) });
    return res.json(task);
  } catch (error) {
    return res.status(500).json(error);
  }


}

export const saveTask = async (req: Request, res: Response) => {

  try {
    const { body } = req;
    const task = await Task?.insertOne(body);
    return res.json(task);
  } catch (error) {
    return res.status(500).json(error);

  }

}

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { body, params: { id } } = req;
    let task = await Task?.findOne({ _id: new Bson.ObjectId(id) });
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    const taskSchema : taskSchema = {
      _id: new Bson.ObjectId(id),
      title:body.title,
      description: body.description,
      done: body.done
    }
   task = taskSchema;
    
    await Task?.replaceOne({ _id: new Bson.ObjectId(id) }, task!);
    
    res.json(task)

  } catch (error) {
    return res.status(500).json(error);

  }
}

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { params: {id} } = req;
    let task = await Task?.findOne({ _id: new Bson.ObjectId(id) });
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
    
    await Task?.deleteOne({_id: new Bson.ObjectId(id)});
    return res.json(true);
  } catch (error) {
    return res.status(500).json(error);

  }
}