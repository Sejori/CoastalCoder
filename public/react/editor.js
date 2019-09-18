const Editor = () => {
  return(
    <div>
      yooooo
      <Auth test="test" />
    </div>
  )
}

const domContainer = document.querySelector('#editor_container')
ReactDOM.render(React.createElement(Editor), domContainer)
