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
  img: "./images/gozlemcileri_gozlemleyenin_gozlemi.jpg",
  id: 2,
};

const books = [first_book, second_book];
function Books() {
  return (
    <section className="books">
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
      <EventExamples message={title} />
    </article>
  );
};
const EventExamples = (message) => {
  const handleButton = () => {
    alert("TIKLANDI");
  };
  const handleFormInput = (e) => {
    console.log("YAZILDI");
  };

  return (
    <div>
      <form>
        <h2>Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButton}>CLICK</button>
    </div>
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
