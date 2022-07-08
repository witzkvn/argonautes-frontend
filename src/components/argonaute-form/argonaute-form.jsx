import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { getBaseUrl } from "../../helpers/getBaseUrl";
import styles from "./argonaute-form.module.css";

const SailorForm = ({ updateListWithNewSailorAdded }) => {
  const inputRef = useRef();
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const baseUrl = getBaseUrl();
    const newSailorName = inputRef.current.value;

    try {
      const newSailorRequest = await fetch(`${baseUrl}/sailors/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newSailorName }),
      });
      const createSailorResponse = await newSailorRequest.json();

      inputRef.current.value = "";

      if (
        createSailorResponse.status === "error" ||
        !createSailorResponse.data.sailor
      ) {
        setError("Une erreur est survenue lors de l'ajout côté serveur.");
      }

      updateListWithNewSailorAdded(createSailorResponse.data.sailor);
    } catch (error) {
      setError(
        "Une erreur est survenue lors de l'ajout d'un nouvel argonaute...."
      );
    }
  };

  return (
    <form className={styles.newMemberForm} onSubmit={handleSubmit}>
      <label className={styles.newMemberFormLabel} htmlFor="name">
        Nom de l&apos;Argonaute
      </label>
      <input
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        placeholder="Charalampos"
      />
      <button type="submit">Envoyer</button>
      {error && <p className="errorText">{error}</p>}
    </form>
  );
};

export default SailorForm;
