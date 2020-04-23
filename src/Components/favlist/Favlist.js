import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Pagination from 'react-bootstrap/Pagination'
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { Link } from 'react-router-dom'
class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 5,
            activec: 1,

        }
        this.props.getfavlist();
    }
    componentDidMount() {
        this.props.getfavlist()
    }
    render() {

        let movies = [];
        if (this.props.movie.length > 0) {
            this.props.movie.filter(name => name.Movies[0].name.toUpperCase().includes(this.props.search.toUpperCase())).
            map((item) => {
                return movies.push(item.Movies[0])
            })
        }
        let len = movies.length;
        let page = Math.ceil(len / 5);
        if (page < 1 && page > 0) { page = 1 }
        let item = [];
        for (let i = 1; i <= page; i++) {
            item.push(i)
        }

        return (
            <div>
                <div className="pagination">
                    {movies.length > 0 ?
                        movies.map((item, key) => {
                            return key > this.state.limit - 6 && key < this.state.limit ?
                                <div key={key} >
                                    <Card style={{ width: 220, height: 450 }} >
                                        <CardHeader style={{ width: 220, height: 100 }}>
                                            <Link onClick={() => { this.props.setID(item.id); }} to='/seedetails'>{item.name}</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label onClick={() => {
                                                this.props.deletefavlist(item.id);
                                                this.props.getfavlist();
                                            }} style={{ float: "left" }}>X</label> </CardHeader>
                                        <CardBody style={{ width: 220, height: 300 }}>{item.imgURL ? <img src={item.imgURL} alt="" /> : <div>No Image found</div>}  </CardBody>
                                    </Card>
                                </div> : null
                        })
                        : null}
                </div>
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
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

            </div>

        )
    }
}

export default FavList;