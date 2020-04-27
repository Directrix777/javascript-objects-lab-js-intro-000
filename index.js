var recipies = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object = Object.assign(object, {[key]: value})
}
/*
function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject
  newObject = Object.assign(newObject, object)
  newObject = Object.assign(key, value)
  return newObject
}
*/
