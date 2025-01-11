import { useState } from "react"
import Input from "./Input/Input"
import Send from "./Send/Send"

export default function NewMessage () {
    const [message, setMessage] = useState("");

    return <>
        <Input message={message} setMessage={setMessage}></Input>
        <Send message={message} setMessage={setMessage}></Send>
    </>
}