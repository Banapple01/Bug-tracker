import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if(error.msg.title) {alert.error(`Title: ${error.msg.title.join()}`)}
            if(error.msg.desc) {alert.error(`Description: ${error.msg.desc.join()}`)}
            if(error.msg.user) {alert.error(`User: ${error.msg.user.join()}`)}
            if(error.msg.non_field_errors) {alert.error(error.msg.non_field_errors.join())}
            if(error.msg.username) {alert.error(error.msg.username.join())}
            if(error.msg.email) {alert.error(error.msg.email.join())}
        }

        if(message !== prevProps.message) {
            if(message.bugDelete) {alert.success(message.bugDelete)}
            if(message.bugAdd) {alert.success(message.bugAdd)}
            if(message.passwordsNotMatch) {alert.error(message.passwordsNotMatch)}
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
