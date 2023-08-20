import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooksThunk from "../Redux/books/thunk/postBookAsyncThunk";
import editBookAsyncThunk from "../Redux/books/thunk/postEditBookAsyncThunk";

export default function Form() {
  const bookWouldBeEdit = useSelector((state) => state.books.editBook);

  const dispatch = useDispatch();

  const [bookInfo, setBookInfo] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  useEffect(() => {
    setBookInfo({
      name: bookWouldBeEdit.name,
      author: bookWouldBeEdit.author,
      thumbnail: bookWouldBeEdit.thumbnail,
      price: bookWouldBeEdit.price,
      rating: bookWouldBeEdit.rating,
      featured: bookWouldBeEdit.featured,
    });
  }, [
    bookWouldBeEdit.author,
    bookWouldBeEdit.featured,
    bookWouldBeEdit.name,
    bookWouldBeEdit.price,
    bookWouldBeEdit.rating,
    bookWouldBeEdit.thumbnail,
  ]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setBookInfo((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onFeaturedChangeHandler = () => {
    setBookInfo((prevData) => ({
      ...prevData,
      featured: !bookInfo.featured,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBooksThunk(bookInfo));
    setBookInfo({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  const submitUpdateHandler = (e, id) => {
    e.preventDefault();
    dispatch(editBookAsyncThunk(id, bookInfo));
    setBookInfo({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  if (bookWouldBeEdit.hasOwnProperty("id")) {
    return (
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form
          className="book-form"
          onSubmit={(e) => submitUpdateHandler(e, bookWouldBeEdit.id)}
        >
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={bookInfo.name}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={bookInfo.author}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={bookInfo.thumbnail}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={bookInfo.price}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={bookInfo.rating}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={bookInfo.featured}
              onChange={() => onFeaturedChangeHandler()}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Update Book
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={(e) => submitHandler(e)}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={bookInfo.name}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={bookInfo.author}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={bookInfo.thumbnail}
              onChange={(e) => onChangeHandler(e)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={bookInfo.price}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={bookInfo.rating}
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              onChange={() => onFeaturedChangeHandler()}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}
