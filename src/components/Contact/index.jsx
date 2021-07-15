import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1347892504746!2d107.75683415650734!3d-6.97748586098805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c30135cc37f7%3A0xc874cea45693f71!2sToko%20Army%20Sembiring%20Muham!5e0!3m2!1sid!2ssg!4v1626317513850!5m2!1sid!2ssg"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      >My Location In Indonesia</iframe>

      <h4>Phone</h4>
      <p>+62 81394671261</p>

      <h4>Email</h4>
      <p>mramadhaniyanto@gmail.com</p>

      <h4>Address</h4>
      <p>Jalan Raflesia 01 Rt 01 Rw 16 Rancaekek Bandung, Jawa Barat</p>
    </div>
  );
};

export default About;
