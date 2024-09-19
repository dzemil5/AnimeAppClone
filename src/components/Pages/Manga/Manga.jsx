import React, { useEffect } from "react";
import FetchManga from "../../FetchManga/FetchManga";
import SearchBar from "../../Search Bar/searchBar";
import CategorySearch from "../../CategorySearch/categorySearch";

const Manga = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <CategorySearch />
      <SearchBar />
      <FetchManga />
    </div>
  );
};

export default Manga;
