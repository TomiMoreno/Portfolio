import { Client } from "@notionhq/client";
import { nullifyFalsyValuesOfObject } from "../utils/nullifyFalsyValuesOfObject";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getProjects() {
  const database_id = process.env.PROJECTS_DATABASE_ID;
  const projects = await notion.databases.query({
    database_id,
    sorts: [{ property: "Order", direction: "ascending" }],
  });
  const sanitizedProjects = projects.results.map(sanitizeProject);
  return sanitizedProjects;
}

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
      imageURL,
    },
  } = project;

  const sanitizedProject = {
    id,
    title: Title.title?.[0]?.text?.content,
    description: Description.rich_text?.[0]?.text?.content,
    titleEs: TitleEs.rich_text?.[0]?.text?.content,
    descriptionEs: DescriptionEs.rich_text?.[0]?.text?.content,
    codeURL: codeURL?.url,
    pageURL: pageURL?.url,
    imageURL: imageURL?.url,
  };

  return nullifyFalsyValuesOfObject(sanitizedProject);
}
