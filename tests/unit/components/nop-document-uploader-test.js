import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('nop-document-uploader', 'Unit | Component | nop document uploader', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it has sensible defaults', function(assert) {
  const component = this.subject();

  assert.equal(component.progress, null);
  assert.equal(component.message, null);
  assert.equal(component.descriptionRequired, false);
  assert.equal(component.accepts, null);
});

test('_fileValid is true if accepts not specified', function(assert) {
  const component = this.subject();

  assert.ok(component._fileValid('abc.test'));
});

test('_fileValid is true if filename matches one of those accepted', function(assert) {
  const component = this.subject({accepts: '.docx,.pdf'});
  const fileName = 'monkeys.docx';

  assert.ok(component._fileValid(fileName));
});

test('_fileValid is true if filename matches one of those accepted in a different case', function(assert) {
  const component = this.subject({accepts: '.docx,.pdf'});
  const fileName = 'monkeys.DOCX';

  assert.ok(component._fileValid(fileName));
});

test('_fileValid is false if filename does not match one of those accepted', function(assert) {
  const component = this.subject({accepts: '.docx'});
  const fileName = 'monkeys.doc';

  assert.notOk(component._fileValid(fileName));
});

test('_fileAdded sets everything correctly when a valid file is added and returns true', function(assert) {
  let uploadEventReceived = false;
  const uploadStatus = {
    uploadStarted() {
      uploadEventReceived = true;
    }
  };
  const component = this.subject({_fileValid: () => true, uploadStatus});

  const result = component._fileAdded({});

  assert.equal(component.progress, 0);
  assert.equal(component.get('showProgress'), true);
  assert.equal(component.message, 'Currently uploading, please wait…');
  assert.ok(result);
  assert.ok(uploadEventReceived);
});

test('_fileAdded sets everything correctly when an invalid file is added and returns false', function(assert) {
  const component = this.subject({_fileValid: () => false});

  const result = component._fileAdded({ name: 'monkeys.doc' });
  assert.equal(component.progress, null);
  assert.equal(component.get('showProgress'), false);
  assert.equal(component.message, "'monkeys.doc' is not a valid file type");
  assert.notOk(result);
});

test('_progressUpdated should update progress as a percentage', function(assert) {
  const component = this.subject();
  const file = {
    progress() {
      return 0.1;
    }
  };

  component._progressUpdated(file);

  assert.equal(component.progress, 10);
});

test('_uploadCompleted should set everything correctly', function(assert) {
  let uploadEventReceived = false;
  const uploadStatus = {
    uploadComplete() {
      uploadEventReceived = true;
    }
  };
  const component = this.subject({uploadStatus});

  component._uploadCompleted('o2719832njkj');

  assert.equal(component.progress, null);
  assert.ok(uploadEventReceived);
});

test('_uploadFailed should show an error message', function(assert) {
  let uploadEventReceived = false;
  const uploadStatus = {
    uploadCancelled() {
      uploadEventReceived = true;
    }
  };
  const component = this.subject({uploadStatus});
  const fileName = 'monkeys.doc';

  component._uploadFailed({ name: fileName });

  assert.equal(component.message, "Upload failed for 'monkeys.doc'. Please check your connection and try again");
  assert.ok(uploadEventReceived);
});
