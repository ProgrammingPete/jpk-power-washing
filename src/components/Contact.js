function Contact() {
  return (
    <div  className="container contact">
      <div style={{marginTop:'20rem',width:'100%',height:'30px'}} className="contact"></div>
      <h2 className="main-title text-center">Request a Free Estimate</h2>
      <div className="col-md-12">
            <p className="main-p">
              If you're interested in our cleaning services, please fill out the fields below. We'll provide your with a personalized quote based on your specific needs.
              Our experienced team will work closely with you to ensure your property is clean and well-maintained.
              We look forward to hearing from you and providing you with a free, no-obligation quote.  
            </p>
      </div>
      <div className="px-2">
        <div className="row text-center">
          <div className="col-md-3 mb-1">
            <input name="name" placeholder="Name" className="contact-input" />
          </div>
          <div className="col-md-3 mb-1">
            <input name="email" placeholder="Email" className="contact-input" />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="I would like to request a free quote!"
            // value="I would like to request a free quote!"
            onfocus="value=''"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Send Message" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
