import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { getMoviesByFilter } from '../../../backend/Movie';

import './searchArea.scss';

const SearchArea = (props) => {
    const [state, setState] = useState({
        name: null,
        startYear: null,
        endYear: null,
        startRank: null,
        endRank: null,
        genre: null,
        actor: null,
        director: null,
        data : null,
    });

    const handleChange = e => {
        e.preventDefault();
        switch (e.target.name) {
            case "name":
                setState(prevState => ({ ...prevState, name: e.target.value }));
                break;
            case "startYear":
                setState(prevState => ({ ...prevState, startYear: parseInt(e.target.value) }));
                break;
            case "endYear":
                setState(prevState => ({ ...prevState, endYear: parseInt(e.target.value) }));
                break;
            case "startRank":
                setState(prevState => ({ ...prevState, startRank: parseFloat(e.target.value) }));
                break;
            case "endRank":
                setState(prevState => ({ ...prevState, endRank: parseFloat(e.target.value) }));
                break;
            case "genre":
                setState(prevState => ({ ...prevState, genre: e.target.value }));
                break;

            default:
                break;
        }
    };

    return (
        <React.Fragment>
            <div id="mainDiv">
                <Container>

                    <div className="main">
                        

                        <div id="form-wrapper">
                            <Form>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Text style={{ textAlign: "center", fontWeight: 'bold', color: "black", fontSize:'30px'}}>Search</Form.Text>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="name">
                                        <Form.Control className="formControl" type="text" placeholder="Name " name="name" onChange={handleChange} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="genre">
                                        <Form.Control className="formControl" type="text" placeholder="Genre " name="genre" onChange={handleChange} />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row style={{alignItems: 'center', justifyContent: 'space-between', margin:'10px'}}>
                                    <Form.Control className="formControlRank" type="number" placeholder="Start Year " name="startYear" onChange={handleChange} />
                                    <Form.Control className="formControlRank" type="number" placeholder="End Year" name="endYear" onChange={handleChange} />
                                </Form.Row>
                                <Form.Row style={{alignItems: 'center', justifyContent: 'space-between',  margin:'10px'}}>
                                    <Form.Control className="formControlRank" type="number" placeholder="Start Rank " name="startRank" onChange={handleChange} step="0.01" />
                                    <Form.Control className="formControlRank" type="number" placeholder="End Rank" name="endRank" onChange={handleChange} step="0.01" />

                                </Form.Row>
                                <Form.Row style={{display: 'flex', justifyContent:'center'}}>
                                        <Link to={{pathname: "/searchResults", state:{data: state.data}}}  onClick={async (e) => {
                                        
                                        let data = await getMoviesByFilter(state);
                                        setState({data: data})

                                        console.log(data);
                                    }}>Search</Link>

                                </Form.Row>
                            </Form>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )};

export default SearchArea;

 