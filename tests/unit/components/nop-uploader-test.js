import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('nop-uploader', 'Unit | Component | nop uploader', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it has sensible defaults', function(assert) {
  const component = this.subject();

  assert.equal(component.progress, 0);
  assert.equal(component.complete, false);
  assert.equal(component.showProgress, false);
  assert.equal(component.instruction, 'Drop file or click here to upload');
  assert.equal(component.accept, null);
});

test('_fileValid is true if accept not specified', function(assert) {
  const component = this.subject();

  assert.ok(component._fileValid());
});

test('_fileValid is true if filename matches one of those accepted', function(assert) {
  const component = this.subject({accept: '.docx,.pdf'});
  const file = {
    file: {
      name: 'monkeys.docx'
    }
  };

  assert.ok(component._fileValid(file));
});

test('_fileValid is false if filename does not match one of those accepted', function(assert) {
  const component = this.subject({accept: '.docx'});
  const file = {
    file: {
      name: 'monkeys.doc'
    }
  };

  assert.notOk(component._fileValid(file));
});

test('_fileAdded sets everything correctly when a valid file is added', function(assert) {
  const component = this.subject({_fileValid: () => true});
  let uploadCalled = false;
  const resumable = {upload() {uploadCalled = true;}};

  component._fileAdded(null, resumable);

  assert.equal(component.complete, false);
  assert.equal(component.progress, 0);
  assert.equal(component.showProgress, true);
  assert.equal(component.instruction, 'Currently uploading, please wait…');
  assert.ok(uploadCalled);
});

test('_fileAdded sets everything correctly when an invalid file is added', function(assert) {
  const component = this.subject({_fileValid: () => false});
  let uploadCalled = false;
  const resumable = {upload: () => uploadCalled = true};
  const file = {
    file: {
      name: 'monkeys.doc'
    }
  };

  component._fileAdded(file, resumable);

  assert.equal(component.complete, false);
  assert.equal(component.progress, 0);
  assert.equal(component.showProgress, false);
  assert.equal(component.instruction, "'monkeys.doc' is not a valid file type");
  assert.notOk(uploadCalled);
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

test('_uploadCompleted should sets everythign correctly', function(assert) {
  const component = this.subject();

  component._uploadCompleted();

  assert.equal(component.progress, 100);
  assert.equal(component.complete, true);
  assert.equal(component.instruction, 'Upload Complete');
});
