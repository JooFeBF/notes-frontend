const AllNotes = ({ notes }) => {
  return (
    <div>
      {
        notes.map(note => {
          if (note.id) {
            return (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
            )
          }
          return null
        })
      }
    </div>
  )
}
export default AllNotes
