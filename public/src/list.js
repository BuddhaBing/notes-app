'use strict';

function List() {
  this.notes = [];
}

List.prototype.createNote = function(description) {
  var note = new Note(description);
  this.notes.push(note);
};
