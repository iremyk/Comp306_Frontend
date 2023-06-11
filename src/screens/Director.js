import React, { Component } from "react";
import { getDirectorById } from "../backend/getDirectorById";
import Spinner from "react-bootstrap/Spinner";

export default class Director extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getDirectorById(this.props.DirectorId);
		this.setState({
			data: data ? data : null,
			isLoading: false,
		});

		console.log(data);
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
						<div style={{}}>
							{this.state.data ? (
								<>
									<div className="director-data-container m-c">
										<h2>Director</h2>
                                        <h3>
                                            Name:{" "}
                                            <b>
                                                {this.state.data[0].name}
                                            </b>
                                        </h3>
                                        <h4>
                                            
                                        </h4>
										
									</div>
								</>
							) : (
								<div className="error">
									<h1>Director not found</h1>
								</div>
							)}
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}
