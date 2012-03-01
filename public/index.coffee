$ ->
  l = location
  mailto = decodeURIComponent(l.search).split(':')[1]
  if mailto
    if mailto.match(/^[\w\.-@]+$/) # support simple email address only
      ld = mailto.split('@')
      local = ld[0]
      domain = ld[1]
      $('#result').html(local + ' @ ' + domain)
      if domain == 'twitte.r'
        l.href = 'http://twitter.com/' + local
  else
    x = l.protocol + '//' + l.host + l.pathname + '?q=%s'
    navigator.registerProtocolHandler('mailto', x, 'NotMailTo')
