chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('main/index.html', {
      id: 'mainWindow',
      bounds: {width: 800, height: 600}
    }
  );
});

chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});

chrome.runtime.onInstalled.addListener(function() {
    // chrome.storage.local.set(object items, function callback);
});
