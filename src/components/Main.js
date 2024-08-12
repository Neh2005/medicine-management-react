import React from 'react';
import './Main.css';

function Main() {
  return (
    <div id="main">
      <header className="major container medium">
        <h2>We conduct experiments that<br />may or may not seriously<br />break the universe</h2>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <a href="#" className="image icon solid fa-signal">
            <img src="./assets/images/pic01.jpg" alt="Keeping Track" />
          </a>
          <div className="content">
            <h3>Keeping Track</h3>
            <p>Helps users keep track of their medicine stock, avoid running out of essential medications, and ensures they are aware of expiration dates to prevent usage of expired medicines.</p>
          </div>
        </section>

        <section className="feature right">
          <a href="#" className="image icon solid fa-code">
            <img src="./assets/images/pic02.jpg" alt="Health Management" />
          </a>
          <div className="content">
            <h3>Health Management</h3>
            <p>Ensures that users are taking the correct dosage of their medicines, which reduces the risk of overdose or underdose. It also enhances user confidence in managing their own health.</p>
          </div>
        </section>

        <section className="feature left">
          <a href="#" className="image icon solid fa-mobile-alt">
            <img src="./assets/images/pic03.jpg" alt="How it works" />
          </a>
          <div className="content">
            <h3>How it works</h3>
            <p>
              1. Sign Up / Log In: Create a secure account to start managing your medications.<br />
              2. Dashboard: Access your personal dashboard with an overview of your current medications and alerts.<br />
              3. Add Medicines: Use the 'Add Medicine' feature to enter new medications.<br />
              4. Edit and Update: Select any listed medication to edit details or update information.<br />
              5. Delete Medicines: Remove outdated or unused medications with ease.
            </p>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <div id="nav">
          <h3>Get shady with science</h3>
          <p>Click here to go to the Login/Sign up page</p>
          <ul className="actions special">
            <li className="button">Click
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Main;
