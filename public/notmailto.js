(function() {
  var rules;
  rules = {
    twitter: {
      domain: 'twitte.r',
      jumpto: 'http://twitter.com/'
    }
  };
  $.notmailto = {
    rules: rules
  };
  $(function() {
    var domain, id, l, ld, local, mailto, rs, rule, x, _results;
    l = location;
    mailto = decodeURIComponent(l.search).split(':')[1];
    if (mailto) {
      if (mailto.match(/^[\w\.-@]+$/)) {
        ld = mailto.split('@');
        local = ld[0];
        domain = ld[1];
        rs = $.notmailto.rules;
        _results = [];
        for (id in rs) {
          rule = rs[id];
          if (domain === rule.domain) {
            l.href = rule.jumpto + local;
            break;
          }
        }
        return _results;
      }
    } else {
      x = l.protocol + '//' + l.host + l.pathname + '?q=%s';
      return navigator.registerProtocolHandler('mailto', x, 'NotMailTo');
    }
  });
}).call(this);
