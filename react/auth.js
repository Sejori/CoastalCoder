'use strict';

const Auth = () => {
  const [ liked, setLiked ] = React.useState(false)

  if (liked) {
    return 'You liked this.';
  }

  return React.createElement(
    'button',
    { onClick: () => setLiked(true) },
    'Like'
  )
}

const authContainer = document.querySelector('#auth');
ReactDOM.render(React.createElement(Auth), authContainer);
