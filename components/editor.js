const e = React.createElement;

const Editor = () => (
  <div>Editor yo</div>
)

const domContainer = document.querySelector('#storage_container');
ReactDOM.render(e(Editor), domContainer);
