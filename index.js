var recipies = {}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object = Object.assign(object, {[key]: value})
  return object
}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject = Object.assign(newObject, object, {[key]: value})
  return newObject
}
