import { baseProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
    hello: baseProcedure
        .query(() => {
            return {
                greeting: `hello`,
            };
        }),
});

export type AppRouter = typeof appRouter;