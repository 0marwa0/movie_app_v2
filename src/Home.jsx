import React, { useState, useEffect } from "react";
import Card from "./card";
import useCounter from "./useCounter";
export const Context = React.createContext();

function Home() {
  const [data, setData] = useState([]);

  // 1-step is to create loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 2-step to set setLoading to true
    setLoading(true);

    const options = {
      method: "GET",
    };
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=01947fdc028668cbba608f3d08618bef&language=en-US",
      options
    )
      .then((result) => result.json())
      .then((movies) => {
        setData(movies.results);
        setLoading(false);
        console.log(movies.results);
      });
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {/* 3-step render the date according to loading state */}
        {loading ? (
          <div class="spinner-border m-4 text-info" role="status">
            <span class="sr-only">.</span>
          </div>
        ) : (
          data?.map((item, i) => <Card movie={item} />)
        )}
      </div>
    </div>
  );
}
export default Home;
