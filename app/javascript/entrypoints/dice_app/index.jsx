import axios from 'axios'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store'
import App from './App';


class DiceApp {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
    this.store = this.initReduxState();
    this.initAxios();
  }

  initReduxState() {
    try {
      const preloadedState = JSON.parse(this.mountPoint.dataset.state || '{}')
      if (process.env.NODE_ENV === 'development') {
        console.log('<<<< InitState >>>>', preloadedState)
      }
      return store;
    } catch (error) {
      return {}
    } finally {
      console.log('<<<< RemoveAttribute >>>>', this.mountPoint)
      this.mountPoint.removeAttribute('data-state')
    }
  }

  initAxios() {
    const {info} = this.store.getState()
    if (typeof info === 'object') {
      axios.defaults.baseURL = info.api_url || null
      axios.defaults.headers.common['X-USer-Identity'] = info.userid
      axios.defaults.headers.common['X-User-Token'] = info.password
      axios.defaults.headers.common['X-CSRF-Token'] = document.querySelector('meta[name=csrf-token]').content
      axios.defaults.withCredentials = true
      axios.defaults.timeout = 10000
      // axios.interceptors.request.use(requestLogger)
      // axios.interceptors.request.use(requestSetLoading)
      //
      // axios.interceptors.response.use(responseRedirect)
      // axios.interceptors.response.use(responseLogger)
      // axios.interceptors.response.use(responseToastify)
      // axios.interceptors.response.use(responseSetLoading, responseSetLoading)
    } else {
      console.warn('Axios init failure!')
    }
  }


  render() {
    const root = ReactDOM.createRoot(this.mountPoint);
    root.render(<Provider store={this.store}>
      <App/>
    </Provider>);
  }
}

export default DiceApp;
