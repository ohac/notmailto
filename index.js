(function() {
  $(function() {
    var domain, l, ld, local, mailto, x;
    l = location;
    mailto = decodeURIComponent(l.search).split(':')[1];
    if (mailto) {
      if (mailto.match(/^[\w\.-@]+$/)) {
        ld = mailto.split('@');
        local = ld[0];
        domain = ld[1];
        $('#result').html(local + ' @ ' + domain);
        if (domain === 'twitte.r') {
          return l.href = 'http://twitter.com/' + local;
        }
      }
    } else {
      x = l.protocol + '//' + l.host + l.pathname + '?q=%s';
      return navigator.registerProtocolHandler('mailto', x, 'NotMailTo');
    }
  });
}).call(this);
