import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";
import Card from "./components/card";
import Title from "./components/Title";

function App() {
  const [quotes, setQuotes] = useState([]);

  const [searchData, setSearchData] = useState("");

  const handleData = (poke) => {
    setQuotes(poke);
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

      <div className="flex w-[70%] h-[48px] rounded-3xl px-8 bg-gray-200 gap-5 items-center border border-black">
        <label className="bg-transparent" htmlFor="filter">
          Items
        </label>
        <div className="w-4 border-[0.5px] border-black rotate-90" />
        <input
          className="focus-visible:outline-none bg-transparent"
          type="text"
          id="filter"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <Card quote={item.quote} author={item.author} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
