import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const SearchResults = (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let data = props.data;
        setData(data ? data : null);
        setIsLoading(false);
        console.log(props);
        console.log(data);
    }, []);

    return (
        <React.Fragment>
            <div id="screen">
                {isLoading ? (
                    <div className="spinner-c">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <div style={{}}>
                        {data ? (
                            <>
                                <div className="movie-container m-c">
                                    <h2>Search Results</h2>
                                    <h3>
                                        {data.map((m) => {
                                            return `${m.name} `;
                                        })}
                                    </h3>
                                </div>
                            </>
                        ) : (
                            <div className="error">
                                <h1>No movie not found</h1>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default SearchResults;