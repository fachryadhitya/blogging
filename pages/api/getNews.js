import { newsDb } from "../../db";

export default async function getNews(req, res, next) {
  try {
    const product = await newsDb;
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
}
