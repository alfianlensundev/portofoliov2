import { z } from "zod"

import { publicProcedure, router } from "./trpc"
import prisma from "@/lib/prisma.lib"

type Comments = { 
    from: string
    description: string
}
export const appRouter = router({
    getComments: publicProcedure.query(async (): Promise<number> => {
        const result = await prisma.comments.findMany({
            where: {
                deleted_at: null
            }
        })
        return result.length
    }),
    createComments: publicProcedure
        .input(z.object({
            from: z.string(),
            description: z.string()
        }))
        .mutation(async ({ input }) => {
            const result = await prisma.comments.create({
                data: input
            })
            return result
        }),
})
// This type will be used as a reference later...
export type AppRouter = typeof appRouter