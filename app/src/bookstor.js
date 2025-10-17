import React, { useState } from "react";

const books = [
  { id: 1, title: "c programing", price: 10 },
  { id: 2, title: "python programing", price: 10 },
  { id: 3, title: "java programing", price: 10 }
];

function BookApp() {
  const [cart, setCart] = useState([]);
  const addToCart = (book) => setCart([...cart, book]);
  const deleteFromCart = (indextoremove) => {
    const newCart = cart.filter((item, index) => {
      return index !== indextoremove;
    });
    setCart(newCart);
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="App">
      <h1>simple book store</h1>
      <div className="book-list">
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} - ${book.price}{" "}
              <button onClick={() => addToCart(book)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.title} - ${item.price}{" "}
            <button onClick={() => deleteFromCart(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default BookApp;
