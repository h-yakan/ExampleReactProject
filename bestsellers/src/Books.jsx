import "./css/Books.css";

export default Books;

function Books() {
  return (
    <section className="Books">
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
  return (
    <img
      src="https://img.kitapyurdu.com/v1/getImage/fn:11668214/wh:true/wi:800"
      alt="İnsan Nedir?"
    />
  );
};

const Title = () => {
  return <h1>İnsan Nedir?</h1>;
};

const Author = () => {
  return <h4>Mark Twain</h4>;
};
