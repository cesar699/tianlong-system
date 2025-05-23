
// registerServiceWorker.js
import { register } from 'register-service-worker';

register('/service-worker.js', {
  ready() { console.log('App is being served from cache.'); },
  registered() { console.log('Service worker registered.'); },
  cached() { console.log('Content has been cached for offline use.'); },
  updatefound() { console.log('New content is downloading.'); },
  updated() { console.log('New content is available; please refresh.'); },
  offline() { console.log('No internet connection found. App is running in offline mode.'); },
  error(error) { console.error('Error during service worker registration:', error); },
});
