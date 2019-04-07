// fun utility to change favicon on every page load

(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = `/favicon-${Math.floor(Math.random() * 9)}.ico`;
  document.getElementsByTagName('head')[0].appendChild(link);
})();