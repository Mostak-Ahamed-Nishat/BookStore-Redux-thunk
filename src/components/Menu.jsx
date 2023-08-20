import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedBooks } from "../Redux/filter/action";
export default function Menu() {
  const filter = useSelector((state) => state.filter.filter);
  const [status, setStatus] = useState("All");
  const dispatch = useDispatch();
  const onFilterChangeHandler = (e, value) => {
    console.log("value: " + value);
    e.preventDefault();
    setStatus(value);
    dispatch(getFeaturedBooks(status));
  };

  return (
    <>
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className="filter-btn active-filter"
            id="lws-filterAll"
            onClick={(e) => {
              onFilterChangeHandler(e, "All");
            }}
          >
            All
          </button>
          <button
            className="filter-btn"
            id="lws-filterFeatured"
            onClick={(e) => {
              onFilterChangeHandler(e, "Featured");
            }}
          >
            Featured
          </button>
        </div>
      </div>
    </>
  );
}
