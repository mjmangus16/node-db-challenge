const db = require("../data/data-config");

module.exports = {
  find,
  findById,
  add,
  findActions,
  remove
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id: id })
    .first()
    .then(project => {
      if (project) {
        return project;
      } else {
        return null;
      }
    });
}

function findActions(id) {
  return db("projects")
    .join("actions", "actions.project_id", "projects.id")
    .select("actions.id", "actions.desc", "actions.notes", "actions.completed")
    .where("projects.id", id);
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(id => {
      return findById(...id);
    });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
