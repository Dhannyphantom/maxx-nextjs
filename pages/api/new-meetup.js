import { MongoClient } from "mongodb";
// this is an api route -- /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/meetups"
    );
    const db = client.db();

    const meetupsCollection = await db.createCollection("meetups");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}
