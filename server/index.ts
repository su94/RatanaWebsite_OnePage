import express from "express";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);
  app.use(express.static(resolve(__dirname, "../client/public")));
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    try {
      let template = resolve(__dirname, "../client/index.html");
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      const err = e as Error;
      vite.ssrFixStacktrace(err);
      console.error(err);
      res.status(500).end(err.message);
    }
  });

  const port = process.env.PORT || 5000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
  });
}

createServer();