import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import store from './store.js';
import { Provider } from 'react-redux';
async function enableMocking() {
  const { worker } = await import('./mocks/browser.js');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
enableMocking()
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    );
  })
  .catch((e) => {
    console.error(e);
    console.error('Failed to enable mocking');
  });
