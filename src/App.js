import SailorForm from "./components/argonaute-form/argonaute-form";
import SailorList from "./components/sailor-list/sailor-list";

function App() {
  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <SailorForm />
      <h2>Membres de l'équipage</h2>
      <SailorList />
    </>
  );
}

export default App;
