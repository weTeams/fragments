Meteor.publish('fragments', function (options) {
  check(options, {
    sort: Object,
    limit: Number
  });
  return Fragments.find({ user: this.userId }, options);
});

Meteor.publish('searchHistory', function (options) {
  options = options || {};

  check(options, {
    limit: Match.Optional(Number)
  });

  options.sort = { created_at: -1 };

  if (!options.limit || options.limit > 50) {
    options.limit = 7;
  }

  return SearchHistory.find({ user: this.userId }, options);
});