(function() {
  var rules;
  rules = {
    twitter: {
      domain: 'twitte.r',
      jumpto: 'http://twitter.com/'
    }
  };
  $(function() {
    var domain, id, l, ld, local, mailto, rule, x, _results;
    l = location;
    mailto = decodeURIComponent(l.search).split(':')[1];
    if (mailto) {
      if (mailto.match(/^[\w\.-@]+$/)) {
        ld = mailto.split('@');
        local = ld[0];
        domain = ld[1];
        _results = [];
        for (id in rules) {
          rule = rules[id];
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
