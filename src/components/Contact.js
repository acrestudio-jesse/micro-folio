import "../styles/Contact/Contact.css"

const Contact = () => {
    return(
        <div> 
            <h1 className="contact-title">safd</h1>
            <form className="contact-card">
                <div className="contact-card__forms">
                <label className="email-label">Email</label>
                <input type="text"></input>
                <label className="subject-label">Subject</label>
                <input type="text"></input>
                <label className="text-label">What can I do for you?</label>
                <textarea className="email-content"></textarea>
                </div>
                <button className="contact-submit" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;