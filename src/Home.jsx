import React, { useState, useEffect } from "react";
import Card from "./card";
export const Context = React.createContext();
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
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

        console.log(movies.results);
      });
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {console.log(data, "current movies")}
        {data?.map((item, i) => (
          <Card movie={item} />
        ))}
      </div>
    </div>
  );
}
export default Home;
