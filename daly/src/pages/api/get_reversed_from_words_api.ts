// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { reverse } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    ok: boolean;
    phrase: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    (async () => {
        let phrase = req.body.searchText;
        let ok = true;
        let newPhrase = "";

        for (let word of phrase.split(" ")) {
            let reversed = await get_reversed_from_words_api(word);
            console.log(reversed);
            if (reversed.antonyms.length == 0) {
                newPhrase += word;
            } else {
                newPhrase += reversed.antonyms[0];
            }
            newPhrase += " ";
        }

        console.log(phrase);

        res.status(200).json({
            ok,
            phrase: newPhrase,
        });
    })();
}

async function get_reversed_from_words_api(word: string): Promise<any> {
    let fetchRes = await fetch(
        `https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`,
        {
            headers: {
                "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
                "X-RapidAPI-Key": process.env.RAPID_API_KEY,
            },
        }
    );
    let data = await fetchRes.json();
    return data;
}
