import damPicture from "../../../assets/images/dam.png";
import "./Form.css";

export default function Form() {
  return (
    <>
      <section className="formSection">
        <figure>
          <img src={damPicture} alt="Dam Picture" />
        </figure>
        <form>
          <h1>Contact Us</h1>
          <p>To know more about the project or for any enquiries contact us.</p>
          <div>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                id="fullName"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="Enter your email" id="email" />
            </div>
            <div>
              <label htmlFor="fullName">Reason</label>
              <textarea
                name="reason"
                id="reason"
                placeholder="Tell us your reason for contacting us"
              />
            </div>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
