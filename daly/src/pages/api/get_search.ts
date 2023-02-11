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
      items: searchRes.items,
    });
  })();
}

async function get_search(phrase: string): Promise<any> {
  let url = new URL("https://www.googleapis.com/customsearch/v1");
  url.searchParams.append("q", phrase);
  url.searchParams.append("key", process.env.SEARCH_API_KEY as string);
  url.searchParams.append("cx", process.env.SEARCH_CX as string);
  let fetchRes = await fetch(url, {
    headers: {
      // "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      // "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
    },
  });
  let data = await fetchRes.json();
  console.log(data);
  return data;
}
