var recipies

function destructivelyupdateObjectWithKeyAndValue(object, key, value)
{
  object.assign(key, value)
}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject.assign({}, object)
  newObject.assign(key, value)
  return newObject
}
