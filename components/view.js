const e = React.createElement
const useState = React.useState
const useEffect = React.useState

const View = () => {
  return (
    <div>Storage yo</div>
  )
}

const domContainer = document.querySelector('#view_container');
ReactDOM.render(e(View), domContainer);
