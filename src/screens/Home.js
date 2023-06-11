import React, { useState, useEffect, useCallback } from 'react';
import SearchArea from '../components/HomeComponent/HomeTop/SearchArea';
import { getMostRatedDirectors } from "../backend/Director";
import { getRandomMovies } from "../backend/Movie";
import { Container } from 'react-bootstrap';
import "./Home.scss";

const Home = () => {
  const [state, setState] = useState({
    startIndex: 0,
    length: 10,
    searchError: false,
    renderList: [],
    mostRatedDirectors: [],
    currCriterias: null,
    searchMade: false,
    loading: true,
    Sgenres: null,
    selectedGenre: null,
  });
  const [filterResults, setFilterResults] = useState([]);

  const fetchData = useCallback(async () => {
    let data = await getRandomMovies();
    let mostRatedDirectors = await getMostRatedDirectors();

    setState(prevState => ({
      ...prevState,
      renderList: data,
      mostRatedDirectors: mostRatedDirectors,
      loading: false,
      Sgenres: []
    }));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="mainHomeDiv">
        <Container>
          <SearchArea setFilterResults={setFilterResults} />

          {filterResults.length > 0 && (
            <div style={{ marginTop: "50px", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <table style={{ minWidth: "70%" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {filterResults.map((item) => (
                    <tr key={item.name}>
                      <a href={`/movie/${item.id}`}><td>{item.name}</td></a>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className='mainHomeDiv'>
            <table style={{ minWidth: "70%" }}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                {state.renderList.map((item) => (
                  <tr key={item.id}>
                    <a href={`/movie/${item.id}`} style={{ width: "100%", display: "contents" }}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.year}</td>
                      <td>{item.rank ? item.rank : "-"}</td>
                    </a>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ margin: "50px", width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <table style={{ minWidth: "70%" }}>
                <thead>
                  <tr>
                    <th>Director</th>
                    <th>Average Rank</th>
                  </tr>
                </thead>
                <tbody>
                  {state.mostRatedDirectors.map((item) => (
                    <tr key={item.id}>
                      <a href={`/director/${item.id}`} style={{ width: "100%", display: "contents" }}>
                        <td>{item.name}</td>
                        <td>{Math.round(item.avg_rank * 10) / 10}</td>
                      </a>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </Container>

      </div>
    </React.Fragment>
  )
}

export default Home;
