use super::*;

#[derive(Serialize, Deserialize)]
struct GetSearchRequest {
    phrase: String,
}

pub async fn serve_get_reversed_from_words_api(mut req: Request<()>) -> tide::Result {
    let GetSearchRequest { phrase } = req.body_json().await?;

    if let Ok(res) = search_api::get_search(&phrase).await {
        Ok(json!({
            "ok": res.status == "success",
                "items": res.items
        })
        .into())
    } else {
        Ok(json!({"ok": false}).into())
    }
}
