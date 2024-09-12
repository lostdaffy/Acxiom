import React from "react";
import "./Home.css";

const Hero = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "260cad70-c5b5-4493-bad4-59b3452c6603");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="container hero">
        <div className="hero-text">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            accusamus cupiditate aspernatur illum doloremque ipsam sint nobis
            rem saepe molestias omnis laudantium perferendis quas nisi, nesciunt
            consectetur sapiente nam iusto!
          </p>
          <button className="btn">
            Explore more <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <i class="ri-message-3-line"></i>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            debitis neque voluptas delectus aperiam enim totam accusantium sint
            in, rem veritatis, adipisci deleniti labore molestiae quia aliquam
            perspiciatis? Ut, at.
          </p>
          <ul>
            <li>
              <i class="ri-mail-line"></i> satyaasingh001@gmail.com
            </li>
            <li>
              <i class="ri-phone-line"></i> +91 8273998875
            </li>
            <li>
              <i class="ri-map-pin-user-fill"></i> Saharanpur, 247001 <br />
              Uttar Pradesh, India
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />

            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="btn dark-btn">
              Submit now <i className="ri-arrow-right-line"></i>
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
