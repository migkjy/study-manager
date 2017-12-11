import { Meteor } from 'meteor/meteor';
import React from 'react';

export default () => {
  const onSubmit = (e) => {
    e.preventDefault();
    Meteor.call('members.insert', e.target.name.value);
    e.target.name.value = '';
  };
  return (
    <form onSubmit={onSubmit} className="addMember">
      <input type="text" name="name" className="addMember item" />
      <button type="submit" className="addMember item">Add Member</button>
    </form>
  );
};
