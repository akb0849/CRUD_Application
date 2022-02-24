import PostModel from "../../models/Post";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },
        getAll: async () => {
            return await PostModel.find();            
        },
    },
    Mutation: {
        createPost: async (parent: any, args: any, context: any, info: any) => {
            const { title, description } = args.post;
            const post = await new PostModel({ title, description }).save();
            return post;
          },
          updatePost: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            const { title, description } = args.post;
            const post = await PostModel.findByIdAndUpdate(
              id,
              { title, description },
              { new: true }
            );
            return post;
          },
          deletePost: async (parent: any, args: any, context: any, info: any) => {
            const { id } = args;
            await PostModel.findByIdAndDelete(id);
            return "Deleted";
          },        

    },
};
