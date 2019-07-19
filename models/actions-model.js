const db = require("../data/data-config");

module.exports = {
  find,
  findById,
  add,
  update
};

function find() {
  return db("actions");
}

function findById(id) {
  return db("actions")
    .where({ id })
    .first()
    .then(action => {
      if (action) {
        return action;
      } else {
        return null;
      }
    });
}

function update(changes, id) {
  return db("actions")
    .where({ id })
    .update(changes);
}

function add(action) {
  return db("actions")
    .insert(action, "id")
    .then(id => {
      return findById(...id);
    });
}
