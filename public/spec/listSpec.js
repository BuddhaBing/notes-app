'use strict';

describe("List", function() {
  it("can store new notes", function(){
    var list = new List;
    list.createNote("message");
    var message = list.notes[0].content;
    return assert.Equals(message, "message");
  });
})