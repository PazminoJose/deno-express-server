import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { connection } from '../config/db.ts';
export interface taskSchema {
    _id: Bson.ObjectId;
    title: string;
    description: string;
    done: boolean
}

const client = await connection();

const db = client?.database('deno-express-db');
export default db?.collection<taskSchema>('tasks')




