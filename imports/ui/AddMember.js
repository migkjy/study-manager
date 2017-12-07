import { Meteor } from 'meteor/meteor';
import React from 'react';

export default () => {
  const onSubmit = (e) => {
    e.preventDefault();
    Meteor.call('members.insert', e.target.name.value);
    e.target.name.value = '';
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Add Member</button>
    </form>
  );
};
