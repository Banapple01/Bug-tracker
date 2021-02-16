import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addBug } from '../../actions/bugs'

export class Form extends Component {
    state = {
        title: '',
        desc: '',
    };

    static propTypes = {
        addBug: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { title, desc } = this.state;
        const bug = { title, desc };
        this.props.addBug(bug);
        this.setState({
            title: '',
            desc: '',
        });
    };

    render() {
        const { title, desc,} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Bug</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                        className="form-control"
                        type="text"
                        placeholder="must enter at least 3 characters"
                        name="title"
                        onChange={this.onChange}
                        value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                        className="form-control"
                        type="text"
                        placeholder="must enter more than ten characters"
                        name="desc"
                        onChange={this.onChange}
                        value={desc}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label>User ID</label>
                        <input
                        className="form-control"
                        type="number"
                        min="0"
                        placeholder="enter a number >= 0"
                        name="user"
                        onChange={this.onChange}
                        value={user}
                        />
                    </div> */}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addBug })(Form);

