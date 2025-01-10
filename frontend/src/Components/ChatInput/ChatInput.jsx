import styles from "./ChatInput.module.css"

export default function ChatInput (props) {
    const message = props.message
    const setMessage = props.setMessage

    const handleType = function (e) {
        setMessage(e.target.value)
    }

    return <input className={styles.chatinput} onChange={handleType} value={message}></input>
}