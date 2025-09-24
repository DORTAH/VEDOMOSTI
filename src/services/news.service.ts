import { XMLParser } from "fast-xml-parser"
import { fetchNews } from "../data-provider.js"

export async function findNewsByCategory(category: string) {
    const newsXml = await fetchNews(category)

    const xmlParser = new XMLParser()
    const newsObject = xmlParser.parse(newsXml)

    return newsObject
}