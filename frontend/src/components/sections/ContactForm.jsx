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
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const API =
        import.meta.env.VITE_API_URL || "https://portfolio-ve6v.onrender.com";
        console.log("API URL:", import.meta.env.VITE_API_URL);
        const response = await fetch(`${API}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-form-heding">Send Me a Message</h2>

      {status === "success" && (
        <div className="msg-send">Message sent successfully!</div>
      )}

      {status === "error" && (
        <div className="msg-faild">Sorry failed to send message.</div>
      )}

      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control contact-input"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control contact-input"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          name="subject"
          className="form-control contact-input"
          placeholder="Subject *"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          rows="5"
          className="form-control contact-input"
          placeholder="Your Message *"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn send-btn form-btn"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
        <IoMdSend />
      </button>
    </form>
  );
};

export default ContactForm;
