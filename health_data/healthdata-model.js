const db = require('../data/db-config')

module.exports = {
    add,
    getAll,
    findById,
    findBy,
    remove,
    update,
    getCount,
    getUserData,
    getAllApproved
}

function getCount() {
    return db('health_data').count("id as CNT")
}

async function add(data) {
    return db('health_data').insert(data).returning("*")

}

function findBy(filter) {
    return db('health_data').where(filter).first()
}

function getAll() {
    return db('health_data')
}
function getAllApproved() {
    return db('health_data').where({approved: true})
}

function getUserData(user_id) {
    return db('health_data').where({user_id})
}


function findById(id) {
    return db('health_data')
        .where({id})
        .first()
}
function remove(id) {
    return db('health_data')
    .where({ id })
    .first()
    .del();
  }

  function update(id, changes) {
    return db('health_data')
      .where({id})
      .update(changes, '*').returning("*");
  }