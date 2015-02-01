import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteBody');
      var title = this.get('noteTitle');
      var note = this.store.createRecord('note', { body: body , title: title});
      this.set('noteTitle', '');
      this.set('noteBody', '');
      note.save();
    },
    deleteNote: function(note) {
      var controller = this;
      note.destroyRecord().then(function() {
        controller.flashMessage('success', 'Note successfully deleted.');
      });
    }
  }
});
