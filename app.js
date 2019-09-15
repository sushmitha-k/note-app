// Form reference
const form = {}
form.noteTitle = document.querySelector('#formNoteTitle');
form.noteText = document.querySelector('#formNoteText');
form.addButton = document.querySelector('#formAddButton');
form.color = document.querySelector('#formColor');

const notes = document.querySelector('#notes');

form.noteTitle.focus();
form.noteText.focus();

// Functions
function addNote() {
  let title = form.noteTitle.value;
  let text = form.noteText.value;
  let note = document.createElement('div');
  let editButton = document.createElement('i');
  let deleteButton = document.createElement('span');

  note.classList.add('note');
  note.classList.add(form.color.value);
  note.innerHTML = `<div class='note-text'>
                      <h4 class="note-title">${title}</h4>
                      <p class="note-text">${text}</p>
                    </div>`;
  editButton.classList.add('note-edit');
  editButton.innerHTML = '&#9998;';
  deleteButton.classList.add('note-delete');
  deleteButton.innerHTML = '&times;';

  $('#notes').css('display', 'block');
  $('.emptystate').css('display', 'none');

  note.appendChild(editButton);
  note.appendChild(deleteButton);
  notes.appendChild(note);

  form.noteTitle.value = '';
  form.noteText.value = '';
  form.noteText.focus();

  addListenerEditButton(editButton);
  addListenerDeleteButton(deleteButton);
}

function addListenerEditButton(editButton) {
  editButton.addEventListener('click', function (e) {
    e.stopPropagation();
    editNote(e);
  });
}

function addListenerDeleteButton(deleteButton) {
  deleteButton.addEventListener('click', function (e) {
    e.stopPropagation();
    deleteNote(e);
  });
}

function editNote (e) {
  let eventNote = e.target.parentNode;
  var title = e.target.parentElement.firstChild.childNodes[1].textContent;
  var text = e.target.parentElement.firstChild.childNodes[3].textContent;
  form.noteTitle.value = title;
  form.noteText.value = text;
  eventNote.parentNode.removeChild(eventNote);
}

function deleteNote (e) {
  let eventNote = e.target.parentNode;
  eventNote.parentNode.removeChild(eventNote);
}

// Event Listeners
form.addButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (form.noteText.value != '') {
    addNote();
  }
})
