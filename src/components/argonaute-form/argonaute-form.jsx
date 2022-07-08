import React from "react";
import styles from "./argonaute-form.module.css";

const ArgonauteForm = () => {
  return (
    <form className={styles.newMemberForm}>
      <label className={styles.newMemberFormLabel} htmlFor="name">
        Nom de l&apos;Argonaute
      </label>
      <input id="name" name="name" type="text" placeholder="Charalampos" />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ArgonauteForm;
