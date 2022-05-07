const QueryGenerator = require("../generator/query.generator")
const database = require("../utils/database")

const UserModal = {
    async CreateUser(data){
        let query=QueryGenerator.insert('users',data)
        return database.promise().query(query)
    }
}

module.exports = UserModal;