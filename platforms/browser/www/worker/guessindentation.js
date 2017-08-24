self.addEventListener('message', function(e) {
  var posted = e.data;
  if (posted.data.indexOf('\n') !== -1) {
    if (posted.data.indexOf('\n\t') !== -1) {
      self.postMessage({
        id: posted.id,
        hasTabs: true
      });
    } else {
      self.postMessage({
        id: posted.id,
        hasTabs: false
      });
    }
  }

  self.postMessage({
    id: posted.id,
    hasTabs: undefined
  });
});