# Portfolio

My portfolio, built with Next.js (pages router) and Notion as a CMS 💼

Live at [tomimoreno.com](https://www.tomimoreno.com), in English and Spanish.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without Notion credentials the dev server shows placeholder projects
(`services/sampleProjects.js`). To load the real ones, copy `.env.example` to
`.env.local` and fill it in:

| Variable               | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `NOTION_API_KEY`       | Token of a Notion integration with read access |
| `PROJECTS_DATABASE_ID` | ID of the projects database                    |

Both are required for `npm run build`.

## Notion database

Each row of the projects database is one project card:

| Property        | Type         | Notes                                 |
| --------------- | ------------ | ------------------------------------- |
| `Title`         | Title        | English title                         |
| `Description`   | Text         | English description                   |
| `TitleEs`       | Text         | Spanish title (falls back to English) |
| `DescriptionEs` | Text         | Spanish description                   |
| `codeURL`       | URL          | Optional, shows the "Code" button     |
| `pageURL`       | URL          | Optional, shows the "Live site" button |
| `technologies`  | Multi-select | Rendered as tags, using Notion colours |
| `Order`         | Number       | Ascending sort order                  |
| `published`     | Checkbox     | Only checked rows are shown           |

The home page is statically generated and revalidated hourly, so Notion edits
show up without a redeploy.

## Project layout

- `pages/` – home, gallery and the full-screen sketch pages
- `components/`, `styles/` – UI and CSS modules
- `locales/` – `en` / `es` messages (next-intl)
- `services/notionService.js` – Notion query and mapping
- `utils/galleryProjects.js` – list of gallery sketches (HTML files in `public/`)

## Scripts

- `npm run dev` – development server
- `npm run build` / `npm start` – production build
- `npm run lint` – ESLint
