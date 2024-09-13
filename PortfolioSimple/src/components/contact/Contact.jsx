import "./Contact.scss"
import { PiEnvelopeOpen } from "react-icons/pi"

export const Contact = () => {
    return (
        <section className="contact" id="contact" >
            <div className="contact__container wrapper">
                <div className="contact_left">
                    <form action="">
                        <div className="input__container">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="text" placeholder="Subject" required />
                            <select>
                                <option value="">Services</option>
                                <option value="branding">Branding</option>
                                <option value="ui-design">UI/UX Design</option>
                                <option value="web-design">Web Design</option>
                                <option value="web-dev">Web Development</option>
                            </select>
                        </div>
                        <textarea
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Message"
                        >
                        </textarea>
                        <div className="btn-container">
                            <a href="#" className="btn">Send Message</a>
                        </div>
                    </form>
                </div>
                <div className="contact__right">
                    <p className="cl-blue">contact</p>
                    <h2>Get In Touch</h2>
                    <p>
                        using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing

                    </p>
                    <div className="contact__info">
                        <div className="btn">
                            <PiEnvelopeOpen />
                        </div>

                        <div>
                            <h5>Contact Info</h5>
                            <div>
                                <span>Phone:</span>
                                <a href="tel:01274352">+1 038 3843</a>
                            </div>
                            <div>
                                <span>Email:</span>
                                <a href="mailto:info@example.com">info@contact.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
