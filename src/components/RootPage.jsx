import Navbar from "./Navbar";
import BookItem from "./BookItem";
import BookAddForm from "./BookAddForm";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import getAllBooksThunk from "../Redux/books/thunk/getBooksAsyncThunk";

export default function RootPage() {
  const books = useSelector((state) => state.books.books);
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksThunk);
  }, [dispatch]);

  let content = [];

  if (filter === "All") {
    books.map((book) => {
      content.push(<BookItem key={book.id} bookInfo={book} />);
    });
  }
  if (filter === "Featured") {
    books.filter((book) => {
      if (book.featured) {
        content.push(<BookItem key={book.id} bookInfo={book} />);
      }
    });
  }

  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <Menu />
            <div className="lws-bookContainer">{content}</div>
          </div>
          <div>
            <BookAddForm />
          </div>
        </div>
      </main>
    </>
  );
}
