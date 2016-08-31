export default{
  getApi (url) {
    return window.location.origin + '/readapi?uri=' + url
  }
}
