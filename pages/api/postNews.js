import { newsDb } from "../../db";
import db from "../../db.json";
import { createId } from "../../utils/helpers";

export default async (req, res) => {
  try {
    const { title, imageLink, paragraph } = req.body;
    // mock retrieval of a real DB with async/await
    const news = await newsDb;
    const newId = createId(news);
    const newNews = {
      id: newId,
      title,
      imageLink: imageLink || "https://wallpaperaccess.com/full/30100.jpg",
      paragraph,
    };
    news.push(newNews);
    res.status(201).send(newNews);
  } catch (err) {
    res.status(500).send(err);
  }
};
