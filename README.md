
# Cloudflare Workers Static Site Template

> **Note:** Place all your static files inside the `src` folder. It is recommended to create a main page as `index.html` and a `404.html` page for non-existent routes.


# Cloudflare Workers Static Site Template

This is a blank template for deploying static projects on Cloudflare Workers without consuming Workers requests.

It is recommended to open this project with Visual Studio Code for the best experience.

## Requirements

- Node.js (latest LTS recommended)
- Wrangler (Cloudflare Workers CLI)


## Local Testing in VS Code

1. Open the project in Visual Studio Code.
2. Go to the "Run and Debug" panel.
3. Select and run **"Run Wrangler Dev"** for local development.

---

## Deploy to Cloudflare in VS Code

1. Open the project in Visual Studio Code.
2. Go to the "Run and Debug" panel.
3. Select and run **"Run Wrangler Deploy"** to deploy your static site to Cloudflare.

---


## Local Testing via Terminal

1. Open a terminal and navigate to the project directory.
2. Run:
   ```sh
   wrangler dev
   ```

---

## Deploy to Cloudflare via Terminal

1. Open a terminal and navigate to the project directory.
2. Run:
   ```sh
   npm run prepare-404-file
   wrangler deploy
   ```

---

## License

This project is licensed under the [MIT License](./LICENSE).
