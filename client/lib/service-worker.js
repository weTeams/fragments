Meteor.startup(function () {
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/sw.js')
      .then()
      .catch(function (error) {
        console.log('ServiceWorker registration failed: ', err);
      });
  }
});