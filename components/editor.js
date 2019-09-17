const e = React.createElement
const useState = React.useState
const useEffect = React.useEffect

const Editor = () => {
  const [ editorContent, setEditorContent ] = useState("This is some sample content.")

  // useEffect(() => {
  //   ClassicEditor
  //     .create( document.querySelector( '#editor' ) )
  //     .then( editor => {
  //       console.log( editor );
  //     } )
  //     .catch( error => {
  //       console.error( error );
  //     } )
  // }, [])

  return (
    <textarea name="content" id="editor">{editorContent}</textarea>
  )
}

const domContainer = document.querySelector('#editor_container')
ReactDOM.render(e(Editor), domContainer);
