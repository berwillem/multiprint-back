exports.arrayify = (_) => {
  return _ ? (Array.isArray(_) ? _ : [_]) : [];
};
