import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Members = new Mongo.Collection('members');

if (Meteor.isServer) {
  Meteor.publish('members', () => Members.find({}));
}

Meteor.methods({
  'members.insert': function (name) {
    Members.insert({ name, hide: false, admin: false });
  },
  'members.remove': function (id) {
    Members.remove({ _id: id });
  },
  'members.setHide': function (id, hide) {
    Members.update({ _id: id }, { $set: { hide } });
  },
});
