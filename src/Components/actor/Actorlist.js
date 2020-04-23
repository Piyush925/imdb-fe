import React, { Component } from 'react';

class Actorlist extends Component {
    componentDidMount() {
        this.props.actorlist()
    }
    render() {

        return (

            <div>
                <div>
                    <label>Actors</label>
                    <p style={{ float: "right" }}> Filter<input type="number" onChange={this.props.setAge} value={this.props.age} placeholder="Enter age"></input></p>
                </div>
                {this.props.list.length > 0 ? this.props.age.length > 0 ? this.props.list.map((item, key) => {
                    return this.props.age.includes(item.age) ? <div key={key}>
                        {item.name}
                    </div> : null

                }) : this.props.list.map((item, key) => {
                    return <div key={key}>
                        {item.name}
                    </div>

                })
                    : null}
            </div>
        )
    }
}

export default Actorlist;