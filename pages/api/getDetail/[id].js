import { newsDb } from "../../../db";
import db from "../../../db.json";
import { findById } from "../../../utils/helpers";

export default async (req, res, next) => {
  try {
    const { id } = req.query;
    //mock retrieval of a real database with async/await
    const allNews = await newsDb;
    const news = findById(allNews, id);

    if (!news) {
      return res.status(404).json({
        message: "id not found",
      });
    }

    return res.status(200).send(news);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
