import "./css/Books.css";
import Book from "./Book";
import books from "./Booklist";
export default Books;

function Books() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className="books">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}
