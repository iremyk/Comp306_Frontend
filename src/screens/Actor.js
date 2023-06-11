import React, { Component } from "react";
import { getActorById, getMostRatedRoles} from "../backend/Actor";
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";


export default class Actor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
            data2: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getActorById(this.props.ActorId);
        let data2 = await getMostRatedRoles(this.props.ActorId);
		this.setState({
			data:  data,
            data2: data2 ,
			isLoading: false,
		});
        console.log(data);
		console.log(data2);

	}

    

	render() {
		return (
			<React.Fragment>
				<div id="screen">
					{this.state.isLoading ? (
						<div className="spinner-c">
							<Spinner animation="border" />
						</div>
					) : (
						<div >
							{this.state.data ? (
								<>
									<div className="actor-data-container m-c" style={{display:'flex', flexDirection:'column'}}>
										<h2>Actor</h2>
                                        <h3>
                                            Name:{" "}
                                            <b>
                                                {this.state.data[0].name}
                                            </b>
                                        </h3>
                                        <h4 style={{marginTop: '30px'}}>
                                            Most Rated Roles
                                        </h4>
                                        

                                        <table>
                                            <tr>
                                                <th>Role</th>
                                                <th>Movie</th>
                                                <th>Year</th>
                                                <th>Rank</th>
                                            </tr>
                                            {this.state.data2.map((r) => {
                                                return (
                                                    <tr>
                                                        <td>{r.role}</td>
                                                        <td>{r.name}</td>
                                                        <td>{r.year}</td>
                                                        <td>{r.rank}</td>
                                                    </tr>
                                                )
                                            })}

                                        </table>
                                         
                                            
										
									</div>

                                    <div id="form-wrapper">
                                        <Form>

                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Text style={{ textAlign: "center", fontWeight: 'bold', color: "black", fontSize:'30px'}}>Find common movies with another actor</Form.Text>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="name">
                                                    <Form.Control className="formControl" type="text" placeholder="Name " name="name" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Button variant="primary" type="submit" onClick={async (e) => {
                                                    
                                                }}>
                                                    Submit
                                                </Button>
                                            </Form.Row>
                                        </Form>
                                    </div>
								</>
							) : (
								<div className="error">
									<h1>Actor not found</h1>
								</div>
							)}
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}
