import { Hono } from "hono";
import * as routes from './routes/index.js'

export const app = new Hono()

app.get('/news', routes.getNews)
app.notFound(routes.notFound)

export type App = typeof app