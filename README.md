# Cloudflare Workers Static Site Template

**Demo:** https://change-this.fernandodilland.workers.dev/

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fernandodilland/cloudflare-workers-static-template)

> **Note:** Place all your static files inside the `src` folder. It is recommended to create a main page as `index.html` and a `404.html` page for non-existent routes.

This is a blank template for deploying static projects on Cloudflare Workers without consuming Workers requests.

It is recommended to open this project with Visual Studio Code for the best experience.

## Initial Setup

Before deploying or testing locally, edit the `wrangler.toml` file and replace the value of `name = "change-this"` with your desired project name. For example:

```toml
name = "my-project"
```

---

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
