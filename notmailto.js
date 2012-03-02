(function() {
  var rules;
  rules = {
    twitter: {
      domain: 'twitte.r',
      jumpto: 'http://twitter.com/'
    },
    geo: {
      domain: 'ge.o',
      jumpto: 'http://www.google.co.jp/maps?q=',
      before: function(x) {
        return x.replace('-', ',');
      }
    }
  };
  $.notmailto = {
    rules: rules
  };
  $(function() {
    var domain, id, l, lc, ld, local, mailto, rs, rule, x, _ref, _results;
    l = location;
    mailto = decodeURIComponent(l.search).split(':')[1];
    if (mailto) {
      if (mailto.match(/^[\w\.\-@]+$/)) {
        ld = mailto.split('@');
        local = ld[0];
        domain = ld[1];
        rs = $.notmailto.rules;
        _results = [];
        for (id in rs) {
          rule = rs[id];
          if (domain === rule.domain) {
            lc = (_ref = typeof rule.before === "function" ? rule.before(local) : void 0) != null ? _ref : local;
            l.href = rule.jumpto + lc;
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
