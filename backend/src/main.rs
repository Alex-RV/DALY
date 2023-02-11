mod search_api;
mod server;
mod words_api;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    server::server().await?;
    Ok(())
}
