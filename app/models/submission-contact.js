import Ember from 'ember';
import ContactDetails from '../mixins/contact-details';
import SubmissionContact from './submission-contact';

export default Ember.Object.extend(ContactDetails, Ember.Copyable, {
  copy() {
    return SubmissionContact.create().deserialize(this.serialize());
  }
});
