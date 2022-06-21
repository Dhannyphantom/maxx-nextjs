import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticProps(context) {
  // fetch single data from an API

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "First Meetup",
        address: "Some address",
        description: "This is some description",
        image: "/images/avatarrs.jpg",
      },
    },
  };
}

export default function MeetupDetailPage() {
  return (
    <MeetupDetail
      title="First Meetup"
      address="Some address"
      description="This is some description"
      image="/images/avatarrs.jpg"
    />
  );
}
