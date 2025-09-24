import { findNewsByCategory } from "../services/news.service.js"

export async function getNews(c) {
    const { category, limit, offset } = c.req.query()

    if (!category) {
        return c.json({ status: 'CATEGORY NOT FOUND' })
    }

    const result = await findNewsByCategory({ category, limit, offset })
    // TODO

    return c.json({ result })
}