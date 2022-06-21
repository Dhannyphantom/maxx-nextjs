import styles from "./MeetupDetail.module.css";

export default function MeetupDetail({ image, address, description, title }) {
  return (
    <section className={styles.detail}>
      <img className={styles.image} src={image} alt={title} />
      <h1> {title} </h1>
      <address> {address} </address>
      <small> {description} </small>
    </section>
  );
}
