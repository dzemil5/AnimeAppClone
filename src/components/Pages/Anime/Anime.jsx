import React, { useEffect } from "react";
import FetchAnime from "../../FetchAnime/FetchAnime";
import SearchBar from "../../Search Bar/searchBar";
import CategorySearch from "../../CategorySearch/categorySearch";

const Anime = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className="search">
      <CategorySearch />
      <SearchBar />
      </div>
      <FetchAnime />
    </div>
  );
};

export default Anime;
