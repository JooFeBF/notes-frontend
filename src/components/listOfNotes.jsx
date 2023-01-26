import Note from './note'

const ListOfNotes = ({ notes }) => {
  return (
    <div>
      {
        notes.map(({ id, title, content, important }) => {
          if (id) {
            return (
            <Note id={id} title={title} content={content} important={important} key={id}/>
            )
          }
          return null
        })
      }
    </div>
  )
}
export default ListOfNotes
