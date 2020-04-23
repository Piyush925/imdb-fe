import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (

            <div>

                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">

                        <Link to='/' className="navbar-brand" onClick={() => { this.setState({ toggle: false }) }}>IMDB</Link>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <p className="collapse navbar-collapse"><input className="pagination" onChange={this.props.onSearchChange} placeholder="Search a movie"></input>

                                </p>

                                {!this.props.success ?
                                    <div className="navbar-nav ml-auto" > <li className="nav-item">
                                        <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/actorlist"}>ActorList</Link>
                                    </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/signin"}>Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/signup"}>Signup</Link>
                                        </li>
                                    </div>
                                    : null}

                                {this.props.success === true && this.props.isAdmin === false ?
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true, list: true }) }} to={"/actorlist"}>ActorList</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true, list: true }) }} to={"/watchlist"}>WatchList</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true, list: true }) }} to={"/favlist"}>FavList</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.props.setSuccess(false); this.props.setsubmit(false); this.setState({ toggle: false }) }} to={"/"} >Signout</Link>
                                        </li></div>
                                    : null}

                                {this.props.success && this.props.isAdmin ?
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/delete"}>Delete</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/addmovie"}>Add Movie</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/actor"}>Add Actor</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/actress"}>Add Actress</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/director"}>Add Director</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.setState({ toggle: true }) }} to={"/producer"}>Add Producer</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" onClick={() => { this.props.setSuccess(false); this.props.setsubmit(false); this.props.setAdmin(false); this.setState({ toggle: false }) }} to={"/"} >Signout</Link>
                                        </li>
                                    </div>
                                    : null}

                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        )
    }
}

export default NavBar;