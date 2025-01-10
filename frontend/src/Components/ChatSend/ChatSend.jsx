import styles from "./ChatSend.module.css"

export default function ChatSend (props) {
    const message = props.message
    const setMessage = props.setMessage

    const handleSend = function () {
        fetch(import.meta.env.VITE_SERVER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: message
        }).then((res) => setMessage(""))
    }

    return <button className={styles.chatsend} onClick={handleSend}>Send</button>
}
