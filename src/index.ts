import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { DATASOURCE } from "./config/database";
import { SCHEMA } from "./Schemas";
import { errorHandler } from "./Middlewares/error.handler";
import { AUTH } from "./Routes/V1/auth.route";

const PORT = process.env.PORT ?? 4002;

const main = async () => {
  const APP = express();
  APP.use(cors());
  APP.use(express.json());
  APP.use(errorHandler)

  APP.use('/',AUTH)


  APP.use('/graphql',graphqlHTTP({
    schema: SCHEMA,
    graphiql: true
  }))

  DATASOURCE.initialize().then(()=>{
    console.log('Connected to DB')
  })

  APP.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};
main().catch(err=> {
    console.log(err)
    process.exit(0)
});
