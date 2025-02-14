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
    <>
      <h2>AAAAAA</h2>
      <section className="books">
        {books.map((book, index) => {
          console.log(book);
          return <Book {...book} key={book.id} number={index + 1} />;
        })}
      </section>
    </>
  );
}
