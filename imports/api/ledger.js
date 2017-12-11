import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Ledger = new Mongo.Collection('ledger');

if (Meteor.isServer) {
  Meteor.publish('ledger', () => Ledger.find({}));
}
