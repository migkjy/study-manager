import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class MemberListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberEditMode: false,
    };
  }
  componentDidMount() {
    console.log('ComponentDidMount MemberListFilter');
    this.memberEditModeTracker = Tracker.autorun(() => {
      console.log(Session.get('memberEditMode'));
      this.setState({
        memberEditMode: Session.get('memberEditMode'),
      });
    });
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount MemberListFilter');
    this.memberEditModeTracker.stop();
  }
  render() {
    return (
      <div>
        <button onClick={() => Session.set('memberEditMode', !this.state.memberEditMode)}>Edit</button>
      </div>
    );
  }
}

