import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
class DeletePersons extends Component {
    constructor(props) {
        super(props)
        this.nameref = React.createRef();

    }

    handleSubmit = () => {

        if (this.props.name.length <= 0) {
            ToastsStore.warning('Name is Mandatory')
            this.nameref.current.focus()
        }
        else {
            let data = {
                roleId: this.props.roleId,
                name: this.props.name,
            }
            this.props.deleteperson(data)
        }

    }
    render() {
        let options = [{ label: "Actor", value: 1 },
        { label: "Actress", value: 2 },
        { label: "Director", value: 3 },
        { label: "Producer", value: 4 }]
        return (
            <div>
                <form>
                    <div>
                        <h3>DeletePersons</h3>
                        <div className="form-group">
                            <label>Select Role</label>
                            <Dropdown options={options} onChange={this.props.onRoleChange}
                                value={this.props.role} placeholder="Select Role" />
                        </div>
                        <div className="form-group">
                            <label>Select Name</label>
                            <Dropdown options={this.props.options} onChange={this.props.onNameChange}
                                ref={this.nameref} value={this.props.name} placeholder="Select Name" />
                        </div>

                        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Delete</button>
                        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

                    </div>
                </form>

            </div>
        );
    }
}

export default DeletePersons;