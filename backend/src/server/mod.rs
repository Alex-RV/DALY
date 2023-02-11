use serde::Serialize;
use serde_json::json;
use tide::prelude::*;
use tide::Request;

mod reverse;
mod search;

use super::search_api;
use super::words_api;

pub async fn server() -> tide::Result<()> {
    let mut app = tide::new();
    app.at("/get_reversed_from_words_api")
        .post(reverse::serve_get_reversed_from_words_api);
    app.at("/get_search")
        .post(search::serve_get_reversed_from_words_api);
    app.listen("127.0.0.1:3001").await?;
    Ok(())
}
