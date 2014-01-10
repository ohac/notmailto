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
    },
    github: {
      domain: 'githu.b',
      jumpto: 'https://github.com/'
    },
    htn: {
      domain: 'htn.to',
      jumpto: 'http://htn.to/'
    },
    tco: {
      domain: 't.co',
      jumpto: 'http://t.co/'
    },
    yubin: {
      domain: 'yubi.n',
      jumpto: 'http://www.post.japanpost.jp/cgi-zip/zipcode.php?zip='
    },
    mixi: {
      domain: 'mix.i',
      jumpto: 'http://mixi.jp/show_friend.pl?id='
    },
    text: {
      domain: 'tex.t',
      jumpto: 'data:text/plain;base64,',
      before: function(x) {
        var y;
        y = x + '===';
        return y.substring(0, parseInt(y.length / 4) * 4);
      }
    },
    btih: {
      domain: 'bti.h',
      jumpto: 'magnet:?xt=urn:btih:'
    },
    sakuracoin: {
      domain: 'sk.r',
      jumpto: 'sakuracoin:'
    },
    sha1coin: {
      domain: 'sh.a',
      jumpto: 'sha1coin:'
    },
    monacoin: {
      domain: 'mon.a',
      jumpto: 'monacoin:'
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
          } else {
            _results.push(void 0);
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
