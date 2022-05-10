const QueryGenerator = require("../generator/query.generator")
const database = require("../utils/database")

const UserModal = {
    async CreateUser(data){
        let query=QueryGenerator.insert('users',data)
        return database.promise().query(query)
    },
    async LoginUser(data){
        let query = `select * from where user_email = ${data.user_email} and user_password = ${data.user_password}`;
        return await database.promise().query(query);
    }
}

module.exports = UserModal;