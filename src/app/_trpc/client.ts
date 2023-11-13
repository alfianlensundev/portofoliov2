import { type AppRouter } from "@/server"
import { createTRPCReact, httpBatchLink } from "@trpc/react-query"

export const trpc = createTRPCReact<AppRouter>({})


export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: `/api/trpc`
        })
    ]
})