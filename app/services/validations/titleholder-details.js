import Ember from 'ember';

export default Ember.Service.extend({
  _validateAddress(address, key, errors) {
    if (Ember.isBlank(address.street) || address.street.length < 3) {
      errors[`${key}.street`] = 'Street address is required';
    }

    if (Ember.isBlank(address.state) || address.locality.length < 3) {
      errors[`${key}.locality`] = 'Suburb or Locality is required';
    }

    if (Ember.isBlank(address.state) || address.state.length < 1) {
      errors[`${key}.state`] = 'State or Territory is required';
    }

    if (Ember.isBlank(address.postcode) || address.postcode.length < 1) {
      errors[`${key}.postcode`] = 'Postcode is required';
    }

    if (Ember.isBlank(address.country)) {
      errors[`${key}.country`] = 'Country is required';
    }
  },
  _validateDetails(titleholder, key, errors) {
    if (Ember.isBlank(titleholder.name) || titleholder.name.length < 3) {
      errors[`${key}.name`] = 'A business name must be specified for titleholders';
    }

    if (!Ember.isBlank(titleholder.abn) && titleholder.abn.length !== 11) {
      errors[`${key}.abn`] = 'An ABN must be 11 digits long';
    }

    if (!Ember.isBlank(titleholder.acn) && titleholder.acn.length !== 9) {
      errors[`${key}.acn`] = 'An ACN must be 9 digits long';
    }

    if (titleholder.businessAddress === undefined) {
      errors[`${key}.businessAddress`] = 'Business address is required for titleholders';
    } else {
      this._validateAddress(titleholder.businessAddress, `${key}.businessAddress`, errors);
    }
  },
  validate(entity) {
    const errors = {};

    if (!entity.titleholderDetails) {
      errors['titleholderDetails'] = 'Titleholder details must be specified';
    } else {
      this._validateDetails(entity.titleholderDetails, 'titleholderDetails', errors);
    }

    return errors;
  }
});
