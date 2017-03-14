function (user, context, callback) {
  console.log('Added via Github deploy ext');
  callback(null, user, context);
}
