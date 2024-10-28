import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '41229',
    database: 'bdcopa'
});

connection.connect()

export const consult = (SQL, values="") => {
    return new Promise((resolve, reject) =>{
        connection.query(SQL, values,  (err, results) => {
            if(err)
                return reject({'err': err})
            const RESULT = JSON.parse(JSON.stringify(results))
            return resolve(RESULT)
        })
    })
}

export default connection;