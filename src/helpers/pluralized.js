export default function (n, singular, plural_) {
  const plural = plural_ || `${singular}s`
  if (n === 0) {
    return plural
  } else if (n === 1) {
    return singular
  } else {
    return plural
  }
}
