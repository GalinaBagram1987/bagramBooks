import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { fileURLToPath } from "url";
import prerenderStatic from "vite-plugin-prerender-static";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prerenderStatic({
      routes: [
        {
          path: "/",
          tags: {
            title: "Сайт писателя Галина Баграм",
            description:
              "Официальный сайт писательницы Галины Баграм. Читайте захватывающие книги в жанрах фантастика и фэнтези. Новинки, повести, рассказы — всё это доступно онлайн и бесплатно. Добро пожаловать в мир необычных сюжетов и ярких героев!",
            canonical: "",
            robots: "index, follow",
            schema: {
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Галина Баграм",
            },
          },
        },
      ],
      // render — функция, возвращающая HTML
      render: (route: any) => {
        const title = route.tags?.title || "Сайт писателя Галина Баграм";
        const description =
          route.tags?.description ||
          "Официальный сайт писательницы Галины Баграм.";

        return `<!DOCTYPE html>
        <html lang="ru">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${title}</title>
            <meta name="description" content="${description}" />
          </head>
          <body>
            <div id="app"></div>
            <script type="module" src="/src/main.ts"></script>
          </body>
        </html>`;
      },
      // headTags — строка (можно пустую)
      headTags: "", // или можно передать HTML-строку с дополнительными тегами
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/bagramBooks",
});
