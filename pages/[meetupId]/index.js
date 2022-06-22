import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
  // fetch some data from an api
  const client = await MongoClient.connect("mongodb://localhost:27017/meetups");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetupsData.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  // fetch single data from an API

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect("mongodb://localhost:27017/meetups");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  const sendData = meetupData;
  sendData.id = meetupData._id.toString();
  delete sendData._id;

  return {
    props: {
      meetupData: sendData,
    },
  };
}

export default function MeetupDetailPage({ meetupData }) {
  console.log(meetupData);
  return (
    <MeetupDetail
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
      image={meetupData.image}
    />
  );
}
<MeetupDetail
  title="Title"
  address="{meetupData.address}"
  description="{meetupData.description}"
  image="/images/avatarrs.jpg"
/>;
