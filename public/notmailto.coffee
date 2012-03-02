rules =
  twitter:
    domain: 'twitte.r'
    jumpto: 'http://twitter.com/'
  geo:
    domain: 'ge.o'
    jumpto: 'http://www.google.co.jp/maps?q='
    before: (x) -> x.replace('-', ',')

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
          lc = rule.before?(local) ? local
          l.href = rule.jumpto + lc
          break
  else
    x = l.protocol + '//' + l.host + l.pathname + '?q=%s'
    navigator.registerProtocolHandler('mailto', x, 'NotMailTo')
