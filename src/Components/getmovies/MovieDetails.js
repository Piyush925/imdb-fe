import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class MovieDetails extends Component {

  componentDidMount() {
    this.props.particularmovie(this.props.id)
  }

  render() {
    let options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    return (<div>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
      <label>{this.props.movie.name}</label><br></br>
      <img src={this.props.movie.imgURL} alt="" />

      <div>
        <label >Rating: {this.props.movie.rating}</label>
        {this.props.success ? <div style={{ float: "right" }}>
          <Dropdown options={options} onChange={(value) => {
            this.props.setRating(value);
            let data = {
              id: this.props.movie.id,
              rating: this.props.rating
            }
            this.props.updaterating(data)
          }}
            value={this.props.rating} placeholder="Rating" />
          <input onChange={this.props.setReview} defaultValue={this.props.review} type="text" style={{ width: "200px", height: "100px" }} placeholder="Write a review"></input><br />
          <button onClick={() => { let data = { movieId: this.props.movie.id, review: this.props.review }; this.props.review(data) }} style={{ background: "blue", color: "white" }}>Submit</button>
        </div> : null}
        <br />
        <label>Cast</label><br />
        <label>Actors:</label>
        {
          this.props.cast.length > 0 ? this.props.cast.map((item, key) => {
            return <label key={key}> {item.roleId === 1 ? item.name + ", " : null}</label>
          }) : null
        }
        <br />
        <label>Actress:</label>
        {
          this.props.cast.length > 0 ? this.props.cast.map((item, key) => {
            return <label key={key}> {item.roleId === 2 ? item.name + ", " : null}</label>
          }) : null
        }
        <br />
        <label>Director:</label>
        {
          this.props.cast.length > 0 ? this.props.cast.map((item, key) => {
            return <label key={key}> {item.roleId === 3 ? item.name + ", " : null}</label>
          }) : null
        }
        <br />
        <label>Producer:</label>
        {
          this.props.cast.length > 0 ? this.props.cast.map((item, key) => {
            return <label key={key}> {item.roleId === 4 ? item.name + ", " : null}</label>
          }) : null
        }

      </div>
      <div>
        <label>Release Year: {this.props.movie.releaseYear}</label>
      </div>

    </div>)
  }
}

export default MovieDetails;