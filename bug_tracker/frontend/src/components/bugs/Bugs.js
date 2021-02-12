import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBugs, deleteBug } from '../../actions/bugs';
import bugs from '../../reducers/bugs';

export class Bugs extends Component {
    static propTypes = {
        bugs: PropTypes.array.isRequired,
        getBugs: PropTypes.func.isRequired,
        deleteBug: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBugs();
    }

    render() {
        return (
            <Fragment>
                <h2>Bugs</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Desc</th>
                            <th>User ID</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.bugs.map(bug => (
                            <tr key={bug.id}>
                                <td>{bug.id}</td>
                                <td>{bug.title}</td>
                                <td>{bug.desc}</td>
                                <td>{bug.user}</td>
                                <td>
                                    <button onClick={this.props.deleteBug.bind(this, bug.id)} 
                                            className="btn btn-danger btn-sm">
                                                Delete
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    bugs: state.bugs.bugs
});

export default connect(mapStateToProps, { getBugs, deleteBug })(Bugs);
