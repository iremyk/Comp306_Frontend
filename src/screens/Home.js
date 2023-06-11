import React, { Component } from 'react';
import SearchArea from '../components/HomeComponent/HomeTop/SearchArea';
import { getMoviesByFilter, getRandomMovies, getMostRatedDirectors } from "../backend/homeReqs";
import { Button, Container } from 'react-bootstrap';
import "./Home.scss";


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        }
    }

    componentDidMount = async () => {
        /*
        let data = await getRandomMovies();
        let genres = await getGenres();

        let selectList = []
        if (genres) {
            for (let i = 0; i < genres.data.length; i++) {
                const g = genres.data[i];
                selectList.push({ value: g.genre, label: g.genre })
            }
        }
        this.setState({ renderList: data.success ? data.data : [], loading: false, Sgenres: selectList });
        */
        let data = await getRandomMovies();
        let mostRatedDirectors = await getMostRatedDirectors();

        this.setState({ renderList: data , mostRatedDirectors: mostRatedDirectors, loading: false, Sgenres: [] });

    }

    /*
    getRand = async () => {
        let data = await getRandomMovies();
        this.setState({ renderList: data.success ? data.data : [], loading: false });
        
    }
    */
    render() {
        return (
            <React.Fragment>
                <div className="mainHomeDiv">
                    <Container>
                        <SearchArea />
                            <div className='mainHomeDiv'>
                                <h1>Random Movies</h1>
                            <table style={{minWidth: "70%"}}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Year</th>
                                        <th>Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state?.renderList.map((item) => (
                                        
                                            <tr key={item.id}>
                                                <a href={`/movie/${item.id}`} style={{width: "100%", display: "contents"}}>
                                                <td>{item.name}</td>
                                                <td>{item.year}</td>
                                                <td>{item.rank ? item.rank : "-"}</td>
                                                </a>
                                            </tr>
                                       
                                    ))}
                                </tbody>
                            </table>

                            <div style={{margin: "50px", width:'100%', display:'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'column'}}>
                                <h1>Most Rated Directors</h1>
                                <table style={{minWidth: "70%"}}>
                                    <thead>
                                        <tr>
                                            <th>Director</th>
                                            <th>Average Rank</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state?.mostRatedDirectors.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.avg_rank}</td>
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
}
