import './views/app.html';

Promise.resolve()
  .then(() => {
    riot.mount('app')
  });
