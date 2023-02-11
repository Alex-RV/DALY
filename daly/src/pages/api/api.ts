interface GetReversedFromWordsApiReq {
    phrase: string;
}

interface GetReversedFromWordsApiRes {
    ok: boolean;
    phrase: string;
}

async function getReversedFromWordsApi(
    req: GetReversedFromWordsApiReq
): Promise<GetReversedFromWordsApiRes> {
    return fetch("localhost:3001/get_reversed_from_words_api", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(req),
    }).then((res) => res.json());
}

export type {
    GetReversedFromWordsApiReq,
    GetReversedFromWordsApiRes,
    getReversedFromWordsApi,
};
