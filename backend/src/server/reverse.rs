use super::*;

#[derive(Serialize, Deserialize)]
struct GetReversedFromWordsApiRequest {
    phrase: String,
}

pub async fn serve_get_reversed_from_words_api(mut req: Request<()>) -> tide::Result {
    let GetReversedFromWordsApiRequest { phrase } = req.body_json().await?;
    let mut res_phrase = String::new();
    let mut ok = true;
    for word in phrase.split(' ') {
        if let Ok(res) = words_api::get_reversed_from_words_api(word).await {
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
