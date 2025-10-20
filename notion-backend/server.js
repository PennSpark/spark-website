import express from "express";
import { Client } from "@notionhq/client";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DB_ID;

const notion = new Client({ auth: NOTION_TOKEN });

app.post("/submitFormToNotion", async (req, res) => {
  const { name, label } = req.body ?? {};
  try {
    const page = await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Label: { rich_text: [{ text: { content: label } }] },
      },
    });
    res.status(200).json({ success: true, data: page });
  } catch (error) {
    console.error("Error adding entry:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/getNotionData", async (req, res) => {
  try {
    const start_cursor = typeof req.query.start === "string" ? req.query.start : undefined;

    const resp = await notion.databases.query({
      database_id: DATABASE_ID,
      start_cursor,
      page_size: 100,
      // filter: { property: "Status", status: { equals: "Published" } },
      // sorts: [{ property: "Created", direction: "descending" }],
    });

    const rows = resp.results.map((r) => {
      const p = r.properties ?? {};
      return {
        id: r.id,
        name: p.Name?.title?.[0]?.plain_text ?? "",
        label: p.Label?.rich_text?.[0]?.plain_text ?? "",
      };
    });

    res.status(200).json({
      success: true,
      data: rows,
      has_more: resp.has_more,
      next_cursor: resp.next_cursor ?? null,
    });
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(4000, "localhost", () => {
  console.log("Running on http://localhost:4000");
});
