import './dice_app/styles/index.scss'
import DiceApp from './dice_app/index.jsx';

window.addEventListener('load', () => {
  const mountPoint = document.getElementById('app-mount');
  const App = new DiceApp(mountPoint);
  App.render();
});

