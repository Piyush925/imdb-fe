import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../popup.css"
import Select from "react-dropdown-select";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import Pagination from 'react-bootstrap/Pagination'
import "../../App.css"
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

class Showmovies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            director: '',
            actors: [],
            limit: 5,
            activec: 1,
            toggle: false,
            list: false

        }
    }
    compare = (a, b) => {
        // Use toUpperCase() to ignore character casing
        const bandA = a.label.toUpperCase();
        const bandB = b.label.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
    componentDidMount() {
        this.props.setDropdown();
        this.props.dashboard()
    }

    render() {

        let movies = [];
        this.props.movie.filter(name => name.name.toUpperCase().includes(this.props.search.toUpperCase())
            && name.releaseYear.includes(this.props.year)
        ).map((item) => {
            return (this.props.rating.length > 0 ?
                Number(this.props.rating) === item.rating ?
                    movies.push(item) : null : movies.push(item)
            )
        })
        let len = movies.length;
        let page = Math.ceil(len / 5);

        console.log(this.props.success)
        if (page < 1 && page > 0) { page = 1 }
        let item = [];
        for (let i = 1; i <= page; i++) {
            item.push(i)
        }

        return (
            <div>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
                <div>
                    <div className="auth-wrapper">
                        <div className="auth-innerd" >
                            <h5>Filter  <label onClick={() => { this.props.dashboard(); this.props.removeFilters() }} style={{ float: "right" }}>Remove all filters</label></h5>

                            <Select style={{ height: '42px', width: '400px', float: "left" }} onChange={async (value) => {
                                await this.props.setActor(value)
                                let data = {
                                    director: this.props.director,
                                    producer: this.props.producer,
                                    actor: this.props.actor,
                                    actress: this.props.actress
                                }
                                this.props.actor.length > 0 || this.props.actress.length > 0 ?
                                    await this.props.filter(data) : this.props.dashboard();
                            }} placeholder="Actors" options={this.props.actoroptions.sort(this.compare)} multi={true} />
                            <Select style={{ height: '42px', width: '400px', float: "left" }} placeholder="Actress" onChange={async (value) => {
                                await this.props.setActress(value);
                                let data = {
                                    director: this.props.director,
                                    producer: this.props.producer,
                                    actor: this.props.actor,
                                    actress: this.props.actress
                                }
                                this.props.actor.length > 0 || this.props.actress.length > 0 ?
                                    await this.props.filter(data) : this.props.dashboard();
                            }} options={this.props.actressoptions.sort(this.compare)} multi={true} />
                            <Dropdown className="cdtasks" options={this.props.directoroptions.sort()} onChange={async (value) => {
                                await this.props.setDirector(value);

                                let data = {
                                    director: this.props.director,
                                    producer: this.props.producer,
                                    actor: this.props.actor,
                                    actress: this.props.actress
                                }
                                await this.props.filter(data)
                            }}
                                value={this.props.director} placeholder="Director" />
                            <Dropdown className="cdtasks" options={this.props.produceroptions.sort()} onChange={async (value) => {
                                await this.props.setProducer(value);
                                let data = {
                                    director: this.props.director,
                                    producer: this.props.producer,
                                    actor: this.props.actor,
                                    actress: this.props.actress
                                }
                                await this.props.filter(data)
                            }}
                                value={this.props.producer} placeholder="Producer" />
                            <Dropdown className="cdtasks" options={this.props.yearoptions.sort(this.compare)} onChange={this.props.setYear}
                                value={this.props.year} placeholder="Release Year" />
                            <Dropdown className="cdtasks" options={this.props.ratingoptions.sort(this.compare)} onChange={this.props.setRating}
                                value={this.props.rating} placeholder="Rating" />
                        </div></div>
                    <div className="pagination">
                        {movies.map((item, key) => {
                            return (
                                key > this.state.limit - 6 && key < this.state.limit ?
                                    <div key={key} >
                                        <Card style={{ width: 220, height: 450 }} >
                                            <CardHeader style={{ width: 220, height: 100 }}>
                                                <Link onClick={() => { this.props.setID(item.id); }} to='/seedetails'>{item.name}</Link> </CardHeader>
                                            <CardBody style={{ width: 220, height: 300 }}>{item.imgURL ? <img src={item.imgURL} alt="" /> : <div>No Image found</div>}  </CardBody>
                                            {this.props.success ? <CardFooter style={{ width: 220, height: 50 }}><button style={{ background: "white" }} onClick={() => { this.props.addFavlist(item.id) }} >+ FavList
                                                    </button>
                                                <button style={{ background: "white" }} onClick={() => { this.props.addWatchlist(item.id) }} >+ WatchList
                                                    </button>
                                            </CardFooter> : null}
                                        </Card>
                                    </div> : null
                            )
                        })}
                    </div>
                </div>
                <br />
                {page > 0 ? <div className='pagination' >
                    <Pagination >

                        <Pagination.First onClick={() => { this.setState({ activec: 1, limit: 5 }) }} />
                        <Pagination.Prev onClick={() => { this.state.limit - 5 >= 5 ? this.setState({ activec: this.state.activec - 1, limit: this.state.limit - 5 }) : ToastsStore.warning("First Page") }} />
                        {
                            item.map((it, key) => {
                                return it >= this.state.activec && it < this.state.activec + 5 ?
                                    <Pagination.Item key={key} onClick={() => { this.setState({ activec: it, limit: 5 * it }) }} active={this.state.activec === key + 1 ? true : false}>{it}</Pagination.Item> : null
                            })
                        }

                        <Pagination.Next onClick={() => { this.state.limit + 5 <= page * 5 ? this.setState({ activec: this.state.activec + 1, limit: this.state.limit + 5 }) : ToastsStore.warning("Last Page") }} />
                        <Pagination.Last onClick={() => { this.setState({ activec: page, limit: this.props.movie.length }) }} />
                    </Pagination>

                </div> : null}
            </div>
        )
    }
}

export default Showmovies;