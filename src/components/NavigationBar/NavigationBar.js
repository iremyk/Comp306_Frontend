import React, { Component } from 'react'
import './NavigationBar.scss';
import Navbar from 'react-bootstrap/Navbar'

export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand href="/">Comp306 IMDB</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='nav-item'>
                            <a href="/movie">Movie</a>
                        </Navbar.Text>
                        <Navbar.Text  className='nav-item'>
                            <a href="/actor">Actor</a>
                        </Navbar.Text>
                        <Navbar.Text  className='nav-item'>
                            <a href="/director">Director</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
