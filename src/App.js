import ArgonauteForm from "./components/argonaute-form/argonaute-form";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <h2>Ajouter un(e) Argonaute</h2>
      <ArgonauteForm />
      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        <div className={styles.memberItem}>Eleftheria</div>
      </section>
    </>
  );
}

export default App;
