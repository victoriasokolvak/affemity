import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import { Root } from './Root';
import store from './store/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
