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
  const fileName = 'monkeys.docx';

  assert.ok(component._fileValid(fileName));
});

test('_fileValid is false if filename does not match one of those accepted', function(assert) {
  const component = this.subject({accept: '.docx'});
  const fileName = 'monkeys.doc';

  assert.notOk(component._fileValid(fileName));
});

test('_fileAdded sets everything correctly when a valid file is added and returns true', function(assert) {
  const component = this.subject({_fileValid: () => true});

  const result = component._fileAdded();

  assert.equal(component.complete, false);
  assert.equal(component.progress, 0);
  assert.equal(component.showProgress, true);
  assert.equal(component.instruction, 'Currently uploading, please wait…');
  assert.ok(result);
});

test('_fileAdded sets everything correctly when an invalid file is added and returns false', function(assert) {
  const component = this.subject({_fileValid: () => false});

  const result = component._fileAdded('monkeys.doc');

  assert.equal(component.complete, false);
  assert.equal(component.progress, 0);
  assert.equal(component.showProgress, false);
  assert.equal(component.instruction, "'monkeys.doc' is not a valid file type");
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

test('_uploadCompleted should sets everything correctly', function(assert) {
  const component = this.subject();

  component._uploadCompleted('o2719832njkj');

  assert.equal(component.progress, 100);
  assert.equal(component.complete, true);
  assert.equal(component.instruction, 'Upload Complete');
  assert.equal(component.token, 'o2719832njkj');
});

test('_uploadFailed should show an error message', function(assert) {
  const component = this.subject();
  const fileName = 'monkeys.doc';

  component._uploadFailed(fileName);

  assert.equal(component.instruction, "Upload failed for 'monkeys.doc'. Please try again");
});
