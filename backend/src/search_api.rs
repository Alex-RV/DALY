#![allow(non_snake_case)]

use reqwest::{Client, Url};
use serde::{Deserialize, Serialize};

const API_KEY: &str = include_str!("./../.rapidapi");

#[derive(Debug, Serialize, Deserialize)]
pub struct SearchItem {
    pub link: String,
    pub htmlTitle: String,
    pub displayLink: String,
    pub htmlSnippet: String,
}

#[derive(Debug, Deserialize)]
pub struct SearchApiRes {
    pub status: String,
    pub items: Vec<SearchItem>,
}

pub async fn get_search(term: &str) -> Result<SearchApiRes, Box<dyn std::error::Error>> {
    let post_client = Client::new();

    let req_url = Url::parse_with_params(
        "https://google-search72.p.rapidapi.com/search",
        &[("query", term)],
    )?;

    Ok(post_client
        .get(req_url)
        .header("X-RapidAPI-Host", "google-search72.p.rapidapi.com")
        .header("X-RapidAPI-Key", API_KEY.trim_end())
        .header("query", term)
        .send()
        .await?
        .json()
        .await?)
}
