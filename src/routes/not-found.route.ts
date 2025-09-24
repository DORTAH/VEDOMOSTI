import type { Context } from "hono"

export default function notFound(c: Context) {
    return c.json({ status: 'NOT FOUND' })
}