mod server;
mod words_api;

#[async_std::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    server::server().await?;
    Ok(())
}

