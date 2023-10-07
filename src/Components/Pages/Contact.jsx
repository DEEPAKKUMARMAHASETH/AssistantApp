const Contact = () => {
    return (
        <div class="container" style={{backgroundColor:"#b9bebd", marginTop:"40px" ,marginBottom:"40px"}}>
            <h1 className="font-weight-bold text-center ">CONTACT US</h1>
            <form  action="https://formsubmit.co/el/difiwa" method="POST">
                <div class="form-group">
                    <div class="form-row">
                        <div class="col">
                            <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                        </div>
                        <div class="col">
                            <input type="email" name="email" class="form-control" placeholder="Email Address" required />
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