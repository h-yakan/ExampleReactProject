import "./css/Books.css";

export default Books;

const first_book = {
  author: "Mark Twain",
  title: "İnsan Nedir?",
  img: "./images/insan_nedir_1.jpg",
};
const second_book = {
  author: "Friedrich Dürrenmatt",
  title: "Gözlemcileri Gözlemleyenin Gözlemi",
  img: "./imgaes/gozlemcileri_gozlemleyenin_gozlemi.jpg",
};

function Books() {
  return (
    <section className="books">
      <Book
        img={first_book.img}
        title={first_book.title}
        author={first_book.author}
      />
      <Book
        img={second_book.img}
        title={second_book.title}
        author={second_book.author}
      />
      <Book
        img={first_book.img}
        title={first_book.title}
        author={first_book.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <Image img={props.img} title={props.title} />
      <Title title={props.title} />
      <Author author={props.author} />
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
