function BookCard({ img, title, author, price, rating }) {
  return (
    <div className="card">
      
      {/* Image Section */}
      <div className="image-container">
        <img src={img} alt="book" />
        <div className="rating">⭐ {rating}</div>
      </div>

      {/* Info Section */}
      <div className="content">
        
        <div className="title-price">
          <h3>{title}</h3>
          <span className="price">₹{price}</span>
        </div>

        <p className="author">{author}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default BookCard;