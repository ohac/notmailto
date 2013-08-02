rules =
  twitter:
    domain: 'twitte.r'
    jumpto: 'http://twitter.com/'
  geo:
    domain: 'ge.o'
    jumpto: 'http://www.google.co.jp/maps?q='
    before: (x) -> x.replace('-', ',')
  github:
    domain: 'githu.b'
    jumpto: 'https://github.com/'
  htn:
    domain: 'htn.to'
    jumpto: 'http://htn.to/'
  tco:
    domain: 't.co'
    jumpto: 'http://t.co/'
  yubin:
    domain: 'yubi.n'
    jumpto: 'http://www.post.japanpost.jp/cgi-zip/zipcode.php?zip='
  mixi:
    domain: 'mix.i'
    jumpto: 'http://mixi.jp/show_friend.pl?id='
  text:
    domain: 'tex.t'
    jumpto: 'data:text/plain;base64,'
    before: (x) ->
      y = x + '==='
      y.substring(0, parseInt(y.length / 4) * 4)
  btih:
    domain: 'bti.h'
    jumpto: 'magnet:?xt=urn:btih:'
  gmail:
    domain: 'gmail.com'
    jumpto: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to='
    before: (x, y) -> x + '@' + y
  yahoofinance:
    domain: 'kab.u'
    jumpto: 'http://stocks.finance.yahoo.co.jp/stocks/detail/?code='

$.notmailto =
  rules: rules

$ ->
  l = location
  mailto = decodeURIComponent(l.search).split(':')[1]
  if mailto
    if mailto.match(/^[\w\.\-@]+$/) # support simple email address only
      ld = mailto.split('@')
      local = ld[0]
      domain = ld[1]
      rs = $.notmailto.rules
      for id, rule of rs
        if domain == rule.domain
          lc = rule.before?(local, domain) ? local
          href = rule.jumpto + lc
          l.href = href
          $('#result').html('<a href="' + href + '">' + href + '</a>')
          break
  else
    x = l.protocol + '//' + l.host + l.pathname + '?q=%s'
    navigator.registerProtocolHandler('mailto', x, 'NotMailTo')
