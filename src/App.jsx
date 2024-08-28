import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import Title from "./components/Title";
import Grid from "./components/Grid";
import GoToTop from "./components/GoToTop";

function App() {
  const [quotes, setQuotes] = useState([]);

  const [searchData, setSearchData] = useState("");

  const handleData = (data) => {
    setQuotes(data);
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  const clearSearch = () => {
    setSearchData('')

    document.getElementById('filter').value = ''
  }

  useEffect(() => {
    handleData(data);
  }, []);

  const filteredItems = quotes.filter((item) =>
    item.quote.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="relative m-5 flex flex-col justify-center items-center gap-8">
      <Title />

      <div className="flex w-[70%] h-[56px] rounded-3xl px-8 bg-gray-200 gap-5 items-center border border-black">
        <label className="bg-transparent w-[10%]" htmlFor="filter">
          <p className="tracking-wider font-medium text-[#658439] text-2xl">
            Quote
          </p>
        </label>
        <div className="w-8 border-[0.5px] border-[#abd373] rotate-90" />
        <input
          className="w-[90%] focus-visible:outline-none bg-transparent tracking-wider font-medium text-gray-800 text-xl"
          type="text"
          id="filter"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <div onClick={clearSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-[20px] cursor-pointer">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </div>

      <Grid items={filteredItems} />

      <GoToTop />
    </div>
  );
}

export default App;
