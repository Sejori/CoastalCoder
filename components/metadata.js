const e = React.createElement;
const useState = React.useState
const useEffect = React.useEffect

const Editor = () => {
  const [ title, setTitle] = useState()

  useEffect(() => {
    const metaData = await fetch('../data/metadata.json')
    setTitle(metaData.title)
  }, [])

  return (
    <head>
      <title>{title}</title>
    </head>
  )
}

const domContainer = document.querySelector('#storage_container');
ReactDOM.render(e(Editor), domContainer);
