'use strict';

const Nav = () => {
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

const navContainer = document.querySelector('#nav');
ReactDOM.render(React.createElement(Nav), navContainer);
