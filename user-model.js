import { Client } from 'pg'
const client = new Client({
    user: process.env.database-user,
    password: process.env.database-password,
    port: 5432,
    host: '127.0.0.1'
})
 
try {
   const res = await await client.connect()
   console.log('connected')
} catch (err) {
   console.error(err);
} finally {
   await client.end()
}