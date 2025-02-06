import "./css/Books.css";

export default Books;

const first_book = {
  author: "Mark Twain",
  title: "İnsan Nedir?",
  img: "./images/insan_nedir_1.jpg",
  id: 1,
};
const second_book = {
  author: "Friedrich Dürrenmatt",
  title: "Gözlemcileri Gözlemleyenin Gözlemi",
  img: "./imgaes/gozlemcileri_gozlemleyenin_gozlemi.jpg",
  id: 2,
};

const books = [first_book, second_book];
function Books() {
  return (
    <section className="books">
      {/* <Book
        img={first_book.img}
        title={first_book.title}
        author={first_book.author}
        /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (book) => {
  const { img, title, author } = book;
  return (
    <article className="book">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
    </article>
  );
};

const Image = (props) => {
  return <img src={props.img} alt={props.title} />;
};

const Title = (props) => {
  return <h1>{props.title}</h1>;
};

const Author = (adam) => {
  return <h4>{adam.author}</h4>;
};
