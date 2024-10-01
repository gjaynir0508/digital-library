import "./BooskShelf.css";
const Bookshelf = () => {
  return (
    <div className="bookshelf-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2>
            My<span>Book</span>Shelf
          </h2>
        </div>
        <nav id="nav">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Search</li>
            </a>
            <a href="#">
              <li>Shelf</li>
            </a>
            <a href="#">
              <li>Contribute</li>
            </a>{" "}
          </ul>

          <footer>
            <a href="#">About</a>
            <br />
            <a href="#">Support</a>
            <br />
            <a href="#">Terms & Condition</a>
            <br />
          </footer>
        </nav>
      </aside>

      {/* main content */}
      <div className="main-content">
        <header className="header">
          <div className="search-bar">
            <input id="search-bar-id" type="text" placeholder="Search..." />
          </div>
          <div className="header-options">
            <select>
              <option id="Mode">Mode</option>
              <option id="Dark">Dark</option>
              <option id="Light">Light</option>
            </select>
            <div className="date-time">09:00 AM | 4-Mar-2023</div>
            <div className="user-profile">
              <img
                id="user-profile"
                src="/assets/profile.webp"
                alt="User Avatar"
              />
              <span>Kenson</span>
            </div>
          </div>
        </header>

        <section className="quote-section">
          <div className="quote">
            <p>
              “There is more treasure in books than in all the pirate's loot on
              Treasure Island.”
            </p>
            <span>-Walt Disney</span>
          </div>
        </section>

        <section className="new-arrivals">
          <p id="new-arrivals">
            <b>New Arrivals</b>
          </p>
          <div className="book-carousel">
            <div className="book">
              <img src="/assets/HolyBible.jpg" alt="Holy Bible" />
              <p>Holy Bible</p>
            </div>
            <div className="book">
              <img src="/assets/HarryPotter.jpg" alt="Harry Potter" />
              <p>Harry Potter</p>
            </div>
          </div>
        </section>

        <section className="recommended-section">
          <p id="recommended-section">
            <b>Recommended section</b>
          </p>
          <div className="book-list">
            <div className="book">
              <img
                src="/assets/DontMakeMeThink.jpeg"
                alt="Don't Make Me Think"
              />
              <p>Don't Make Me Think</p>
            </div>
            <div className="book">
              <img
                src="/assets/TheDesignofEverydayThings.jpg"
                alt="Design of Everyday Things"
              />
              <p>The Design of Everyday Things</p>
            </div>
          </div>
        </section>

        <section className="recent-readings">
          <p id="recent-readings">
            <b>Recent Readings</b>
          </p>
          <br />
          <div className="book-list">
            <div className="book">
              <img src="/assets/RichDadPoorDad.webp" alt="Rich Dad Poor Dad" />
              <p>Rich Dad Poor Dad</p>
            </div>
            <div className="book">
              <img src="/assets/HarryPotter.jpg" alt="Harry Potter" />
              <p>Harry Potter</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bookshelf;
