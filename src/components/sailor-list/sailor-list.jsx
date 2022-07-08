import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getBaseUrl, getHeaders } from "../../helpers/getBaseUrl";
import styles from "./sailor-list.module.css";

const SailorList = ({ sailors, setSailors }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const baseUrl = getBaseUrl();

  const fetchSailors = useCallback(
    async (fetchUrl) => {
      setError(null);

      try {
        const response = await fetch(fetchUrl, {
          headers: getHeaders(),
        });
        const data = await response.json();

        if (data.data.sailors) {
          setSailors([...data.data.sailors]);
        } else {
          setError(
            "Une erreur est survenue lors de la récupéraation de la liste des marins."
          );
        }
      } catch (error) {
        setError("Une erreur est survenue. Merci de réessayer ultérieurement.");
      }
    },
    [setSailors]
  );

  useEffect(() => {
    setIsLoading(true);
    fetchSailors(`${baseUrl}/sailors`).then(() => setIsLoading(false));
  }, [baseUrl, fetchSailors]);

  if (error) {
    return <p className="errorText">{error}</p>;
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
