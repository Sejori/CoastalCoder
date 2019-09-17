const e = React.createElement;

const Editor = () => (
  <div>Editor yo</div>
)

const domContainer = document.querySelector('#editor_container');
ReactDOM.render(e(Editor), domContainer);
