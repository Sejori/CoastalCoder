const e = React.createElement;
const useState = React.useState
const useEffect = React.useEffect

const Metadata = () => {
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

const domContainer = document.querySelector('#metadata_container');
ReactDOM.render(e(Metadata), domContainer);
