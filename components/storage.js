const e = React.createElement

const Storage = () => {
  return (
    <div>Storage yo</div>
  )
}

const domContainer = document.querySelector('#storage_container')
ReactDOM.render(e(Storage), domContainer)
