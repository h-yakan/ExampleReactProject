const Book = (book) => {
  const { img, title, author, number } = book;
  //   const getSingleBook = () => {
  //     getBook(id);
  //   };
  return (
    <article className="book">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
      <span className="number">{"# " + number}</span>
      {/* <EventExamples message={title} /> */}
      {/* <EventExamples message={title} getSingleBook={getSingleBook} /> */}
    </article>
  );
};
const EventExamples = (props) => {
  const { message } = props;
  //   const { message, getSingleBook } = props;
  const handleButton = () => {
    // getSingleBook();
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
      <button onClick={handleButton}>Tıkla</button>
    </div>
  );
};

const Image = (props) => {
  return <img src={props.img} alt={props.title} />;
};

const Title = (props) => {
  return <h1>{props.title}</h1>;
};

const Author = (props) => {
  return <h4>{props.author}</h4>;
};

export default Book;
