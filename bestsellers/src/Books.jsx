import "./css/Books.css";

export default Books;

function Books() {
  return (
    <section className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return <img src="./images/insan_nedir_1.jpg" alt="İnsan Nedir?" />;
};

const Title = () => {
  return <h1>İnsan Nedir?</h1>;
};

const Author = () => {
  return <h4>Mark Twain</h4>;
};
