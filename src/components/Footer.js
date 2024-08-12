import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Questions or comments?</h2>
        </header>
        <p>
          If you have any questions or comments, please feel free to reach out. We are here to assist you and look forward to hearing from you soon.
        </p>
        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobilep">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobilep">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" rows="6"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li><input type="submit" value="Send Message" /></li>
              </ul>
            </div>
          </div>
        </form>

        <ul className="icons">
          <li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="/" className="icon brands fa-github"><span className="label">Github</span></a></li>
          <li><a href="/" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
        </ul>

        <ul className="copyright">
          <li>&copy; Untitled. All rights reserved.</li>
          <li>Design: <a href="#">Medico</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
