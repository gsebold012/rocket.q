const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
                            id INTEGER PRIMARY KEY,
                            pass TEXT
                        )`);

        await db.exec(`Create TABLE questions(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        title TEXT,
                        read INT,
                        room INT,
                        FOREIGN KEY (room) REFERENCES rooms(id)
                        )`);

        await db.close()
    }
}

initDb.init()



