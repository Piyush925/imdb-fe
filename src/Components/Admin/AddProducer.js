import React, { Component } from "react";
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
class AddProducer extends Component {
    constructor(props) {
        super(props)
        this.name = React.createRef();
        this.age = React.createRef();
    }
    handleSubmit = () => {
        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            this.name.current.focus()
        }
        else if (this.props.age.length <= 0) {
            ToastsStore.warning('Age is Mandatory')
            this.age.current.focus()
        }
        else {
            let data = {
                name: this.props.name,
                age: this.props.age,
                roleId: 4
            }
            this.props.addperson(data);
        }

    }
    render() {

        return (
            <div>
                <form>
                    <div>
                        <h3>Add Producer</h3>
                        <div className="form-group">
                            <label>Producer Name</label>
                            <input type="text" ref={this.name} className="form-control" placeholder="Producer name" onChange={this.props.onNameChange} value={this.props.name} title="Must be Alphabet" required />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="number" ref={this.age} className="form-control" placeholder="Age" onChange={this.props.onAgeChange} value={this.props.age} title="Must be Alphabet" required />
                        </div>

                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Add Producer</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

                    </div>
                </form>

            </div>
        );
    }
}

export default AddProducer;