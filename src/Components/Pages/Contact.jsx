import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jxr79xh', 'template_5v7ydwh', form.current, 'j0kw8sFwbByiq61QU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
        return (
            <div class="container" style={{ backgroundColor: "#b9bebd", marginTop: "40px", marginBottom: "40px" }}>
                <h1 className="font-weight-bold text-center ">CONTACT US</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" name="from_name" class="form-control" placeholder="Full Name" required />
                            </div>
                            <div class="col">
                                <input type="email" name="from_email" class="form-control" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                </form>
            </div>
        )
    }

    export default Contact