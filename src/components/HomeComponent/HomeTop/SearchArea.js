import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { getMoviesByFilter } from '../../../backend/Movie';

import './searchArea.scss';

const SearchArea = ({ setFilterResults }) => {
  const [state, setState] = useState({ name: "", startYear: 0, endYear: 0, startRank: 0, endRank: 0, genre: "", director: "", actor: "" });

  const handleChange = (event) => {
    setState((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const movies = await getMoviesByFilter(state);
    setFilterResults(movies);
  };

  return (
    <React.Fragment>
      <div id="mainDiv">
        <Container>
          <div className="main">
            <div id="form-wrapper">
              <Form onSubmit={handleSubmit}>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Text style={{ textAlign: "center", fontWeight: 'bold', color: "black", fontSize: '30px' }}>Search</Form.Text>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="name" style={{ padding: '0' }}>
                    <Form.Control className="formControl" value={state.name} onChange={handleChange} type="text" placeholder="Movie Name" name="name" />
                  </Form.Group>
                </Form.Row>

                <Form.Row style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <Form.Control className="formControlRank" value={state.startYear || undefined} onChange={handleChange} type="number" placeholder="Start Year" name="startYear" />
                  <Form.Control className="formControlRank" value={state.endYear || undefined} onChange={handleChange} type="number" placeholder="End Year" name="endYear" />
                </Form.Row>

                <Form.Row style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <Form.Control className="formControlRank" value={state.startRank || undefined} onChange={handleChange} type="number" placeholder="Start Rank" name="startRank" step="0.01" />
                  <Form.Control className="formControlRank" value={state.endRank || undefined} onChange={handleChange} type="number" placeholder="End Rank" name="endRank" step="0.01" />
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="genre" style={{ padding: '0' }}>
                    <Form.Control className="formControl" value={state.genre} onChange={handleChange} as="select" placeholder="Genre" name="genre">
                      <option disabled value="">Genre</option>
                      <option value="Documentary">Documentary</option>
                      <option value="Short">Short</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Crime">Crime</option>
                      <option value="Western">Western</option>
                      <option value="Animation">Animation</option>
                      <option value="Drama">Drama</option>
                      <option value="Romance">Romance</option>
                      <option value="Mystery">Mystery</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Adult">Adult</option>
                      <option value="Music">Music</option>
                      <option value="Action">Action</option>
                      <option value="Fantasy">Fantasy</option>
                      <option value="Sci-Fi">Sci-Fi</option>
                      <option value="Horror">Horror</option>
                      <option value="Musical">Musical</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Film-Noir">Film-Noir</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="director" style={{ padding: '0' }}>
                    <Form.Control className="formControl" value={state.director} onChange={handleChange} type="text" placeholder="Director Name" name="director" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="actor" style={{ padding: '0' }}>
                    <Form.Control className="formControl" value={state.actor} onChange={handleChange} type="text" placeholder="Actor Name" name="actor" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} style={{ display: 'flex', padding: '10px', alignItems: 'center', justifyContent: 'center' }}>
                    <Button className="formControl" variant="primary" type="submit" style={{ width: "200px" }}>
                      Search
                    </Button>
                  </Form.Group>
                </Form.Row>

              </Form>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
};

export default SearchArea;
