require("dotenv").config()

function envCheck() {
    const env = process.env

    // Databse Env Check
    if (!env.DATABASE_URL) throw new Error("Please provide DATABASE_URL in the api/.env file")

    // Github Oauth Env Check
    if (!env.GITHUB_CLIENT_ID) throw new Error("Please provide GITHUB_CLIENT_ID in the api/.env file")
    if (!env.GITHUB_CLIENT_SECRET) throw new Error("Please provide GITHUB_CLIENT_SECRET in the api/.env file")

    // Success Case
    console.log("All Environment Variables Present!")
}

envCheck()