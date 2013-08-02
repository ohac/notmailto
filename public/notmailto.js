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
    gmail: {
      domain: 'gmail.com',
      jumpto: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to=',
      before: function(x, y) {
        return x + '@' + y;
      }
    },
    yahoofinance: {
      domain: 'ka.bu',
      jumpto: 'http://stocks.finance.yahoo.co.jp/stocks/detail/?code='
    }
  };

  $.notmailto = {
    rules: rules
  };

  $(function() {
    var domain, href, id, l, lc, ld, local, mailto, rs, rule, x, _ref, _results;
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
            lc = (_ref = typeof rule.before === "function" ? rule.before(local, domain) : void 0) != null ? _ref : local;
            href = rule.jumpto + lc;
            l.href = href;
            $('#result').html('<a href="' + href + '">' + href + '</a>');
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
