import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

export async function getStaticProps() {
  // fetch some data from API

  const client = await MongoClient.connect("mongodb://localhost:27017/meetups");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetupsData: meetupsData.map((meetup) => {
        const meetupObj = meetup;
        meetupObj.id = meetup._id.toString();
        delete meetupObj._id;
        return meetupObj;
      }),
    },
    revalidate: 10,
  };
}

export default function HomePage({ meetupsData }) {
  return <MeetupList meetups={meetupsData} />;
}
