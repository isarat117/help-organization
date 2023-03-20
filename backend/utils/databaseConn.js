import pg from "pg"


export const pool = new pg.Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"toor",
    database:"etkinlik",
    max: 99
})

