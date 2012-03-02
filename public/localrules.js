(function() {
  var k, my_rules, rules, v;
  my_rules = {
    example: {
      domain: 'exampl.e',
      jumpto: 'http://example.com/'
    }
  };
  rules = $.notmailto.rules;
  for (k in my_rules) {
    v = my_rules[k];
    rules[k] = v;
  }
}).call(this);
