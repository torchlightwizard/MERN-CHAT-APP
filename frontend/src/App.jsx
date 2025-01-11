import styles from "./App.module.css"
import NewMessage from "./Components/NewMessage/NewMessage";

function App() {
  return (
    <div className={styles.app}>
      <NewMessage />
    </div>
  )
}

export default App
