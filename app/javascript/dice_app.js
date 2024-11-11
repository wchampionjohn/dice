import DiceApp from './dice_app/index';

window.addEventListener('load', () => {
  const mountPoint = document.getElementById('app-mount');
  const App = new DiceApp(mountPoint);
  App.render();
});

