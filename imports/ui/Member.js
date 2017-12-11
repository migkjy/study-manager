import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import React from 'react';
import PropTypes from 'prop-types';


export default class Member extends React.Component {
  renderEditMembers() {
    if (Session.get('memberEditMode')) {
      return (
        <span>
          <a onClick={() =>
            Meteor.call('members.setHide', this.props._id, !this.props.hide)}
          >{` Hide `}
          </a>
          <a onClick={() =>
            Meteor.call('members.remove', this.props._id)}
          >{` Delete `}
          </a>
        </span>
      );
    }
  }
  render() {
    return (
      <li className="memberList">
        <span className={this.props.hide ? 'memberList hide' : ''}>
          name: {this.props.name} / hide: {this.props.hide.toString()} / admin: {this.props.admin.toString()}
        </span>
        <span className="memberList item">
          {this.renderEditMembers()}
        </span>
      </li>
    );
  }
}

Member.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
