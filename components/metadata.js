const e = React.createElement;
const useState = React.useState
const useEffect = React.useEffect

const Metadata = () => {
  const [ title, setTitle] = useState()
  const [ scripts, setScripts ] = useState()

  useEffect(async () => {
    const metaData = await fetch('../data/metadata.json')
    setTitle(metaData.title)
    setScripts(metaData.scripts.map( script => {
      return (
        <script src={script}></script>
      )
    }))
  }, [])

  return (
    <head>
      <title>{title}</title>

      // load scripts
      {scripts}
    </head>
  )
}

const domContainer = document.querySelector('#metadata_container');
ReactDOM.render(e(Metadata), domContainer);
