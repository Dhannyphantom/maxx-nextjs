import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

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
