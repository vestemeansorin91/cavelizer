async function getById(id, collection, model) {
  const itemFound = await collection.findById(id);

  if (!itemFound) {
    throw new Error(`${model} not found!`);
  }

  return itemFound;
}

module.exports = { getById };
