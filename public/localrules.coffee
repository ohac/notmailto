my_rules =
  example:
    domain: 'exampl.e'
    jumpto: 'http://example.com/'

rules = $.notmailto.rules
rules[k] = v for k, v of my_rules
