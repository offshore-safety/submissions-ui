import Ember from 'ember';

export default Ember.Service.extend({
  validate(entity) {
    const errors = {};

    if (entity.titles === undefined || entity.titles.length < 1) {
      errors['titles'] = 'At least one title must be specified';
    }

    if (entity.titles) {
      entity.titles.forEach((title, index) => {
        const errorName = `titles.${index}`;

        if (title.titleOrApplicationNumber == undefined || title.titleOrApplicationNumber.length < 3) {
          errors[`${errorName}.titleOrApplicationNumber`] = 'A valid title or application number must be specified'
        }

        if (title.region == undefined) {
          errors[`${errorName}.region`] = 'A region must be specified for each title'
        }

        if (title.commonwealthWaters == undefined) {
          errors[`${errorName}.commonwealthWaters`] = 'Please specify the Commonwealth waters adjacent to each title'
        }
      });
    }

    return errors;
  }
});
