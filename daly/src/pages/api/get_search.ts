// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface Item {
  link: string;
  htmlTitle: string;
  displayLink: string;
  htmlSnippet: string;
}

type Data = {
  items: [Item];
  opposite: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  (async () => {
    let phrase = req.body.searchText;
    let reversed = await get_reversed(phrase);
    let searchRes = await get_search(reversed);
    res.status(200).json({
      items: searchRes.items,
      opposite: reversed,
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
      "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY as string,
    },
  });
  let data = await fetchRes.json();
  console.log(data);
  return data;
}

async function get_reversed(word: string): Promise<any> {
  let fetchRes = await fetch("https://api.openai.com/v1/completions", {
    method: "post",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY as string}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `What is the opposite of "${word}"?`,
      max_tokens: 4000,
      temperature: 1.0,
    }),
  });
  let data = await fetchRes.json();
  return data.choices[0].text;
}