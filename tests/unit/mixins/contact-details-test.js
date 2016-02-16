import Ember from 'ember';
import ContactDetailsMixin from '../../../mixins/contact-details';
import { module, test } from 'qunit';

module('Unit | Mixin | contact details');

// Replace this with your real tests.
test('it works', function(assert) {
  let ContactDetailsObject = Ember.Object.extend(ContactDetailsMixin);
  let subject = ContactDetailsObject.create();
  assert.ok(subject);
});
