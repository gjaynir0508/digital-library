import "./BookShelfSearch.css";

const books = [
  {
    title: "Don't Make Me Think",
    author: "Steve Krug, 2000",
    edition: "Second Edition",
    rating: "4.5/5",
    category: "Computer Science, UX Design",
    availability: ["Hard Copy ", "E - Book", "Audio Book"],
    status: "In-Shelf",
    location: "CS A-15",
    source: "/assets/DontMakeMeThink.jpeg",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman, 1988",
    rating: "4.5/5",
    category: "Computer Science, UX Design",
    availability: ["Hard Copy", "E - Book", "Audio Book"],
    status: "Borrowed",
    borrower: "Sriram",
    source: "/assets/TheDesignofEverydayThings.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T.Kiyosaki, 1997",
    rating: "4.5/5",
    category: "Financial MGMT",
    availability: ["Hard Copy", "E - Book", "Audio Book"],
    status: "In-Shelf",
    location: "CS A-15",
    source: "/assets/RichDadPoorDad.webp",
  },
];

const Bookshelf = () => {
  return (
    <div className="bookshelf-container">
      <header className="header">
        <div className="logo">
          <h1>
            <span>Book</span>Hive
            <span> - A Digital Library</span>
          </h1>
        </div>
        <div className="header-right">
          <div className="header-lang">Lang</div>
          <div className="header-date">4-Mar-2023</div>
          <div className="header-user">Kenson</div>
        </div>
      </header>
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>My Shelf</li>
          <li>Contribute</li>
        </ul>
      </div>
      <div className="main">
        <div className="search-section">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <div className="filter-section">
            <button>Browse</button>
          </div>
        </div>
        <table className="book-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Ratings</th>
              <th>Category</th>
              <th>Availability</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>
                  <div className="book-info">
                    <img src={book.source} alt="Book Cover" />
                    <div>
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                      {book.edition && <small>{book.edition}</small>}
                    </div>
                  </div>
                </td>
                <td>{book.rating}</td>
                <td>{book.category}</td>
                <td>
                  <ul>
                    {book.availability.map((type, i) => (
                      <li key={i} className="availability-type">
                        {type}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div
                    className={`status ${
                      book.status === "In-Shelf" ? "in-shelf" : "borrowed"
                    }`}
                  >
                    {book.status === "In-Shelf" ? (
                      <>
                        <span>{book.status}</span>
                        <small>{book.location}</small>
                      </>
                    ) : (
                      <>
                        <span>{book.status}</span>
                        <small>{book.borrower}</small>
                      </>
                    )}
                  </div>
                  <button className="preview-btn">Preview</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookshelf;
