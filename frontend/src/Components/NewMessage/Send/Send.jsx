import styles from "./Send.module.css"

export default function Send (props) {
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

    return <button className={styles.send} onClick={handleSend}>Send</button>
}
