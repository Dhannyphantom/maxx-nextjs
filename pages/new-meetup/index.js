import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const onAddNewMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={onAddNewMeetupHandler} />;
}
