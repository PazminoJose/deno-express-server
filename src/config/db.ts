import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const DB_URI: string = <string>Deno.env.get("DB_MONGO");

export  const connection = async () => {
    try {
        const client = new MongoClient();
        await client.connect(<string>DB_URI);
        
        console.log("Database connected: ", client.listDatabases());
        return client;

    } catch (error) {
        console.log(error);
        return null;
    }
}