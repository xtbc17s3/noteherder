import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes }) => {
  const noteIds = Object.keys(notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => (
          <Note
            key={noteId}
            note={notes[noteId]}
          />
        ))}
      </ul>
    </div>
  )
}

export default NoteList
