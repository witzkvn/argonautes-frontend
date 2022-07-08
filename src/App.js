import { useState } from "react";
import SailorForm from "./components/argonaute-form/argonaute-form";
import SailorList from "./components/sailor-list/sailor-list";

function App() {
  const [sailors, setSailors] = useState([]);

  const updateListWithNewSailorAdded = (newSailor) => {
    setSailors((prevState) => [...prevState, newSailor]);
  };

  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <SailorForm updateListWithNewSailorAdded={updateListWithNewSailorAdded} />
      <h2>Membres de l'équipage - {sailors.length} membres</h2>
      <SailorList sailors={sailors} setSailors={setSailors} />
    </>
  );
}

export default App;
