import ContactInfo from "./CantactIfno";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div id="contact">
      <center>
        <h5 className="about-me">GET IN TOUCH</h5>
      </center>
      <center>
        <h1 className="who-i">Contact Me</h1>
      </center>
      <center>
        <p className="who-i-am">
          Feel free to reach out to me for any questions, project inquiries, or
          just to say hello. I'll do my best to get back to you as soon as
          possible.
        </p>
      </center>
      
       <div className="container col-xxl-10 ">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-6">
           <ContactInfo></ContactInfo>
          </div>
          <div className="col-10 col-sm-12 col-lg-6">
              <div className=" contact-form-box">
            <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
