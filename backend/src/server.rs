use serde::Serialize;
use serde_json::json;
use tide::prelude::*;
use tide::Request;

pub async fn server() -> tide::Result<()> {
    let mut app = tide::new();
    app.at("/get_reversed_from_words_api").post(serve_get_reversed_from_words_api);
    app.listen("127.0.0.1:3001").await?;
    Ok(())
}

#[derive(Serialize, Deserialize)]
struct GetReversedFromWordsApiRequest {
    phrase: String,
}

async fn serve_get_reversed_from_words_api(mut req: Request<()>) -> tide::Result {
    let GetReversedFromWordsApiRequest { phrase } = req.body_json().await?;
    let mut res_phrase = String::new();
    let mut ok = true;
    for word in phrase.split(' ') {
        if let Ok(res) = super::words_api::get_from_words_api(word).await {
            let push_word = if res.antonyms.is_empty() {
                word
            } else {
                &res.antonyms[0]
            };
            res_phrase.push_str(push_word);
            res_phrase.push(' ');
        } else {
            ok = false;
            break;
        }
    }
    Ok(json! ({
        "ok": ok,
        "phrase": res_phrase,
    })
    .into())
}
