// Service Worker 登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

// iframe操作
const iframe = document.querySelector('iframe');

function reloadFrame() {
  iframe.contentWindow.location.reload();
}

function changeUrl(type) {
  if (type === 1) {
    iframe.src = 'https://sakurazaka46.com/';
  }
  if (type === 2) {
    iframe.src = 'https://www.google.com/';
  }
}
