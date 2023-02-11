// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { reverse } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";

interface Item {
    link: string;
    htmlTitle: string;
    displayLink: string;
    htmlSnippet: string;
}

type Data = {
    ok: boolean;
    items: [Item];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    (async () => {
        let phrase = req.body.searchText;
        let searchRes = await get_search(phrase);
        res.status(200).json({
            ok: searchRes.status == "success",
            items: searchRes.items,
        });
    })();
}

async function get_search(phrase: string): Promise<any> {
    let url = new URL("https://google-search72.p.rapidapi.com/search");
    url.searchParams.append("query", phrase);
    let fetchRes = await fetch(url, {
        headers: {
            "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        },
    });
    let data = await fetchRes.json();
    return data;
}
