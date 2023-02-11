use reqwest::Client;
use serde::{Deserialize, Serialize};

const API_KEY: &str = include_str!("./../.wordsapi");

#[derive(Debug, Deserialize)]
pub struct WordsApiRes {
    pub antonyms: Vec<String>,
}

pub async fn get_from_words_api(word: &str) -> Result<WordsApiRes, Box<dyn std::error::Error>> {
    let post_client = Client::new();

    Ok(post_client
        .get(format!(
            "https://wordsapiv1.p.rapidapi.com/words/{}/antonyms",
            word.trim()
        ))
        .header("X-RapidAPI-Host", "wordsapiv1.p.rapidapi.com")
        .header("X-RapidAPI-Key", API_KEY.trim_end())
        .send()
        .await?
        .json()
        .await?)
}
