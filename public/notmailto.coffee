rules =
  twitter:
    domain: 'twitte.r'
    jumpto: 'http://twitter.com/'

$ ->
  l = location
  mailto = decodeURIComponent(l.search).split(':')[1]
  if mailto
    if mailto.match(/^[\w\.-@]+$/) # support simple email address only
      ld = mailto.split('@')
      local = ld[0]
      domain = ld[1]
      for id, rule of rules
        if domain == rule.domain
          l.href = rule.jumpto + local
          break
  else
    x = l.protocol + '//' + l.host + l.pathname + '?q=%s'
    navigator.registerProtocolHandler('mailto', x, 'NotMailTo')
