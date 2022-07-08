import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getBaseUrl } from "../../helpers/getBaseUrl";
import styles from "./sailor-list.module.css";

const SailorList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [sailors, setSailors] = useState([]);
  const baseUrl = getBaseUrl();

  const fetchSailors = useCallback(async (fetchUrl) => {
    setError(null);

    try {
      const response = await fetch(fetchUrl);
      const data = await response.json();

      if (data.data.data) {
        setSailors([...data.data.data]);
      } else {
        setError(
          "Une erreur est survenue lors de la récupéraation de la liste des marins."
        );
      }
    } catch (error) {
      setError("Une erreur est survenue. Merci de réessayer ultérieurement.");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchSailors(`${baseUrl}/sailors`).then(() => setIsLoading(false));
  }, [baseUrl, fetchSailors]);

  if (error) {
    return <p className={styles.center}>{error}</p>;
  }

  if (isLoading) {
    return <p className={styles.center}>Chargement ...</p>;
  }

  return (
    <section className="member-list">
      {sailors &&
        sailors.map((sailor) => (
          <div key={sailor._id} className={styles.memberItem}>
            {sailor.name}
          </div>
        ))}
    </section>
  );
};

export default SailorList;
