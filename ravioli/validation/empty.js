module.exports = function (v) {
  if (!v) {
    return true
  }
  if (typeof v === 'string' && v.trim() == '') {
    return true
  }
  return false
}
