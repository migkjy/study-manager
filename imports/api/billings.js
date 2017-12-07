import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Billings = new Mongo.Collection('billings');

if (Meteor.isServer) {
  Meteor.publish('billings', () => Billings.find({}));
}
