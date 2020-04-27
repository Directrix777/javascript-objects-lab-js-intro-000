var recipies

function destructivelyupdateObjectWithKeyAndValue(object, key, value)
{
  object = Object.assign(key, value)
}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject
  newObject = Object.assign({}, object)
  newObject = Object.assign(key, value)
  return newObject
}
