const e = React.createElement;

const View = () => (
  <div>View yo</div>
)

const domContainer = document.querySelector('#view_container');
ReactDOM.render(e(View), domContainer);
