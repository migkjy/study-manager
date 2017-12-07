import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import React from 'react';
import FlipMove from 'react-flip-move';
import { Members } from './../api/members';

import Member from './Member';

export default class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }
  componentDidMount() {
    console.log('ComponentDidMount MemberList');
    this.meetingTracker = Tracker.autorun(() => {
      Meteor.subscribe('members');
      let members = null;

      if (Session.get('memberEditMode')) {
        members = Members.find({}, { sort: { hide: 1 } }).fetch();
      } else {
        members = Members.find({ hide: false }).fetch();
      }
      this.setState({ members });
    });
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount MemberList');
    this.meetingTracker.stop();
  }
  renderMembers = () => {
    if (this.state.members.length === 0) {
      return <div>Add new members</div>;
    }
    return this.state.members.map(member =>
      <Member key={member._id} {...member} />);
  }
  render() {
    return (
      <div>
        <FlipMove >
          {this.renderMembers()}
        </FlipMove>
      </div>
    );
  }
}

