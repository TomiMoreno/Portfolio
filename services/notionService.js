import { Client } from "@notionhq/client";
import { nullifyFalsyValuesOfObject } from "../utils/nullifyFalsyValuesOfObject";
import { sampleProjects } from "./sampleProjects";

export async function getProjects() {
  const { NOTION_API_KEY, PROJECTS_DATABASE_ID } = process.env;

  if (!NOTION_API_KEY || !PROJECTS_DATABASE_ID) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NOTION_API_KEY and PROJECTS_DATABASE_ID must be set to build the site."
      );
    }
    console.warn(
      "[notion] NOTION_API_KEY / PROJECTS_DATABASE_ID not set, using sample projects."
    );
    return sampleProjects;
  }

  const notion = new Client({ auth: NOTION_API_KEY });
  const results = [];
  let start_cursor;
  do {
    const page = await notion.databases.query({
      database_id: PROJECTS_DATABASE_ID,
      start_cursor,
      sorts: [{ property: "Order", direction: "ascending" }],
      filter: { property: "published", checkbox: { equals: true } },
    });
    results.push(...page.results);
    start_cursor = page.has_more ? page.next_cursor : undefined;
  } while (start_cursor);

  return results.map(sanitizeProject);
}

const plainText = (richText) =>
  richText?.map((part) => part.plain_text).join("");

function sanitizeProject(project) {
  const {
    id,
    properties: {
      Title,
      Description,
      TitleEs,
      DescriptionEs,
      codeURL,
      pageURL,
      technologies,
    },
  } = project;

  return nullifyFalsyValuesOfObject({
    id,
    title: plainText(Title?.title),
    description: plainText(Description?.rich_text),
    titleEs: plainText(TitleEs?.rich_text),
    descriptionEs: plainText(DescriptionEs?.rich_text),
    codeURL: codeURL?.url,
    pageURL: pageURL?.url,
    technologies: technologies?.multi_select,
  });
}
