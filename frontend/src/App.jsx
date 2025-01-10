import { useState } from "react"
import styles from "./App.module.css"
import ChatInput from "./Components/ChatInput/ChatInput"
import ChatSend from "./Components/ChatSend/ChatSend"

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.app}>
      <ChatInput message={message} setMessage={setMessage}></ChatInput>
      <ChatSend message={message} setMessage={setMessage}></ChatSend>
    </div>
  )
}

export default App
