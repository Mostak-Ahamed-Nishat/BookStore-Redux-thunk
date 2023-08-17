import Navbar from "./Navbar";
import BookItem from "./BookItem";
import Form from "./Form";
import Menu from "./Menu";

export default function RootPage() {
  return (
    <>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <Menu />
            <BookItem />
          </div>
          <Form />
        </div>
      </main>
    </>
  );
}
