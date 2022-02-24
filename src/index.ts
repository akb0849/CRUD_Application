import Koa from 'koa';
import CORS from '@koa/cors';
import { connectDB } from './db';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './graphQL/typeDef';
import { resolvers } from './graphQL/resolvers/resolvers';
import router from './router/router';
import {ApolloServer} from 'apollo-server-koa';

const startServer = async () => {
    const schema  = makeExecutableSchema({
        typeDefs,
        resolvers,
    });
    
    await connectDB();

    const app = new Koa();
    app.use(CORS());

    app.use(router.routes()).use(router.allowedMethods());

    const koaServer = new ApolloServer({
        schema: schema,
        resolvers: resolvers,
    });

    await koaServer.start();
    koaServer.applyMiddleware({app: app});

    app.listen(4000, ()=>{console.log(`http://localhost:4000${koaServer.graphqlPath}`)});
}
startServer();