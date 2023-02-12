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
        console.log("Not yet.");
        let fetchRes = await fetch(
            `http://127.0.0.1:8000/get_reversed_from_words_api`,
            {
                method: "post",
                headers: {
                    Accept: "application / json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: req.body.searchText,
            }
        );
        console.log("It has been done.");
        let data = await fetchRes.json();
        console.log(data);
        return data;
    })();
}
