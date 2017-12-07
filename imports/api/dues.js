import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Dues = new Mongo.Collection('dues');

if (Meteor.isServer) {
  Meteor.publish('dues', () => Dues.find({}));
}
