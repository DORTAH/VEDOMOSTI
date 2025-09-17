import type { InputParams } from "./types.js";

const BASE_URL = 'http://localhost:3000'

export function buildUrl(params: InputParams) {
    const {category, offset, limit} = params
    const url = new URL(`${BASE_URL}/${category}`)

    const queryParams = new URLSearchParams()
    queryParams.set('limit',String(limit))
    queryParams.set('offset',String(offset))
    //TODO append queryparams

    return url
}