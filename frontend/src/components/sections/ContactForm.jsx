import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.error(data.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-form-heding">Send Me a Message</h1>

        {/* --- Status Message Display --- */}
        {status === "success" && (
          <div className="msg-send">Message sent successfully!</div>
        )}
        {status === "error" && (
          <div className="msg-faild">Sorry failed to send message.</div>
        )}
        {/* ------------------------------- */}

        <div className="row ">
          <div className="col-md-12 mb-3 ">
            <input
              type="text"
              name="name" // ADDED NAME ATTRIBUTE
              value={formData.name}
              onChange={handleChange}
              className="form-control contact-input"
              placeholder="Your Name *"
              required
            />
          </div>

          <div className="col-md-12 mb-3">
            <input
              type="email"
              name="email" // ADDED NAME ATTRIBUTE
              value={formData.email}
              onChange={handleChange}
              className="form-control custom-input contact-input"
              placeholder="Email Address *"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="subject" // ADDED NAME ATTRIBUTE
            value={formData.subject}
            onChange={handleChange}
            className="form-control custom-input contact-input"
            placeholder="Subject *"
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            name="message" // ADDED NAME ATTRIBUTE
            value={formData.message}
            onChange={handleChange}
            className="form-control contact-input"
            rows="5"
            placeholder="Your Message *"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn send-btn form-btn"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Sending..." : "Send Message"} <IoMdSend />
        </button>
      </form>
    </>
  );
};
export default ContactForm;
