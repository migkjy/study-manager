import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import React from 'react';
import PropTypes from 'prop-types';


export default class Member extends React.Component {
  renderEditMembers() {
    if (Session.get('memberEditMode')) {
      return (
        <span>
          <button onClick={() =>
            Meteor.call('members.setHide', this.props._id, !this.props.hide)}
          >Hide
          </button>
          <button onClick={() =>
            Meteor.call('members.remove', this.props._id)}
          >Delete
          </button>
        </span>
      );
    }
  }
  render() {
    return (
      <div>
        name: {this.props.name} / hide: {this.props.hide.toString()} / admin: {this.props.admin.toString()}
        {this.renderEditMembers()}
      </div>
    );
  }
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
