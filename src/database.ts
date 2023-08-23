import {Db, MongoClient} from 'mongodb';
import {config} from '../conf/config';

/**
 * Database connection class.
 */
export class Database {
    protected client: MongoClient

    /**
     * The constructor.
     */
    constructor() {
        this.client = new MongoClient(config.db.url)
    }

    /**
     * Connect to the database.
     */
    async connect() {
        try {
            await this.client.connect()
            console.log('Database connected')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    /**
     * Disconnect from the database.
     */
    async disconnect() {
        try {
            await this.client.close()
            console.log('Database disconnected')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    /**
     * Get the database reference.
     *
     * @return {Db} the database reference
     */
    getDb(): Db {
        try {
            return this.client.db(config.db.name)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}