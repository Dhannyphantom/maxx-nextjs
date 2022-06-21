import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image: "./images/avatarrs.jpg",
    address: "Some address, some city 4323",
    description: "This is the first address",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "images/avatarrs.jpg",
    address: "Some address, some city 4323",
    description: "This is the second address",
  },
  {
    id: "m3",
    title: "Third Meetup",
    image: "images/avatarrs.jpg",
    address: "Some address, some city 4323",
    description: "This is the third address",
  },
];

export default function HomePage() {
  const [meetupsData, setMeetupsData] = useState([]);

  useEffect(() => {
    setMeetupsData(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={meetupsData} />;
}
