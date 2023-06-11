import React, { Component } from "react";
import { getMovieById } from "../backend/Movie";
import Spinner from "react-bootstrap/Spinner";

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
			isLoading: true,
		};
	}

	async componentDidMount() {
		let data = await getMovieById(this.props.movieId);
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
									<div className="movie-data-container m-c">
										<h2>Movie</h2>
										<h3>
											Title:{" "}
											<b>
												{this.state.data[0].name}
											</b>
										</h3>
										<h4>
											Year:{" "}
											<b>
												{this.state.data[0].year}
											</b>
										</h4>
										<h4>
											Rank:{" "}
											<b>
												{this.state.data[0].rank
													? `${this.state.data.rank}`
													: "-"}
											</b>
										</h4>
									</div>
								</>
							) : (
								<div className="error">
									<h1>Movie not found</h1>
								</div>
							)}
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}
