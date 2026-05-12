import BookCard from "./BookCard";

function App() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      rating: 4.8,
      img: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 299,
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
    },
    {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 350,
    rating: 4.4,
    img: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg"
  },
  {
    title: "Ikigai",
    author: "Héctor García",
    price: 320,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 450,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 420,
    rating: 4.7,
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    price: 380,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/71m-MxdJ2WL.jpg"
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 520,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/81YJFNc54lL._SY466_.jpg"
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    price: 410,
    rating: 4.6,
    img: "https://m.media-amazon.com/images/I/71QUhm-AnIL.jpg"
  }
  ];

  return (
    <div className="container">
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
}

export default App;