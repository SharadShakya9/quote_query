import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import Title from "./components/Title";
import Grid from "./components/Grid";

function App() {
  const [quotes, setQuotes] = useState([]);

  const [searchData, setSearchData] = useState("");

  const handleData = (data) => {
    setQuotes(data);
  };

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    handleData(data);
  }, []);

  const filteredItems = quotes.filter((item) =>
    item.quote.toLowerCase().includes(searchData.toLowerCase())
  );

  return (
    <div className="m-5 flex flex-col justify-center items-center gap-8">
      <Title />

      <div className="flex w-[70%] h-[56px] rounded-3xl px-8 bg-gray-200 gap-5 items-center border border-black">
        <label className="bg-transparent" htmlFor="filter">
          <p className="tracking-wider font-medium text-[#658439] text-2xl">Quote</p>
        </label>
        <div className="w-8 border-[0.5px] border-[#abd373] rotate-90" />
        <input
          className="focus-visible:outline-none bg-transparent tracking-wider font-medium text-gray-800 text-xl"
          type="text"
          id="filter"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>

      <Grid items={filteredItems}/>
    </div>
  );
}

export default App;
