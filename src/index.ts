import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema"
import cors from "cors";
import SqliteDataSource from "./datasources/sqlite";


const main = async () => {

    SqliteDataSource.initialize().then(
        () => console.log("Data Source has been established.")
    ).catch(
        (err) => console.error("Error during Data Source initialization.", err)
    )

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
};

main().catch((err) => {
    console.log(err);
});