import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function(){
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId //getting this from Blaze and Meteor 
        });
    }
})

export const Bins = new Mongo.Collection('bins');

