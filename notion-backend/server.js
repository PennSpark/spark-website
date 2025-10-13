import express from "express";
import { Client } from "@notionhq/client";
import bodyParser from "body-parser";
import cors from "cors";

var jsonparser = bodyParser.json();

const app = express();
app.use(cors());

const PORT = 4000;

const HOST = "localhost";


const notion = new Client({ auth: "ntn_bg132571928bg9bHOBnRrDzljYGMs3KKnoxTatNwWzA0uB" });
const databaseId = "28b007e6e3188013ba92f3d97782bdd3";


app.post("/submitFormToNotion", jsonparser, async (req, res) => {

  const name = req.body.name;
  const label = req.body.label;

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: { 
        Name: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        "Label": {
          rich_text: [
            {
              text: {
                content: label
              }
            }
          ]
        }
      }
    });
    console.log(response);
    console.log("Success! Entry added.");
    res.status(200).json({ success: true, data: response });

  } catch (error) {
    console.error("Error adding entry:", error);
    res.status(500).json({ success: false, error: error.message });
  }
  
})


app.listen(PORT, HOST, () =>
{
  console.log(`Running on http://${HOST}:${PORT}`)
}
);


app.get("/getNotionData", async (req, res) => {
  try {
    const database = await notion.databases.retrieve({ database_id: databaseId });
    const dataSources = database.data_sources || [];

    const allPages = [];

    for (const source of dataSources) {
      const dataSource = await notion.dataSources.retrieve({ data_source_id: source.id });
      const pages = await notion.dataSources.query({ data_source_id: dataSource.id });

      pages.results.forEach(page => {
        allPages.push({
          id: page.id,
          name: page.properties.Name?.title[0]?.text?.content || "",
          label: page.properties.Label?.rich_text[0]?.text?.content || "",
        });
      });
    }

    res.status(200).json({ success: true, data: allPages });

  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

