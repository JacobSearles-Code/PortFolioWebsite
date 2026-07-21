import { useState } from "react";

const Contacts = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = () => {
        const subject = `New message from ${name}`;

        const body =
            `
            Name: ${name}
            Email: ${email}
            
            Message: 
            ${message}
            `;

        const mailto = `mailto:jacobtsearles@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        window.open(mailto, "_blank", "noopener noreferrer");
    }

    return (
        <div className="contactDiv">
            <title>Contact Me</title>
            <h1>Contact Me!</h1>
            <form onSubmit={sendEmail} className="contactForm">
                <label>Name: <input type="text" onChange={(e) => setName(e.target.value)} required/> </label>
                <label>Email: <input type="email" onChange={(e) => setEmail(e.target.value)} required/> </label>
                <label>Message: <textarea onChange={(e) => setMessage(e.target.value)} required/> </label>
                <button type="submit">Send Email!</button>
                <p><i>**This will open another tab to send the email**</i></p>
            </form>
        </div>
    )
}

export default Contacts;