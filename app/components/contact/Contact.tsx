import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="NAME" />
          <input type="email" name="email" placeholder="EMAIL" />
          <textarea name="message" placeholder="MESSAGE"></textarea>
          <button type="submit" className={styles.button}>
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
