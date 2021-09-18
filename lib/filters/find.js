module.exports = (thingToBeSearched, key, val) => {
  return thingToBeSearched.find(function callbackFn(element){
    if (element[key] === val.toLowerCase()) {
      return element
    }
  })
}
