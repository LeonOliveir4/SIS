import {Database} from './database'
import {DoencaItem, DoencaItemDAO} from './model'

/**
 * Custom exception to signal a database error
 */
export class DatabaseError extends Error {}

/**
 * A service to perform CRUD operations over a DoencaItem
 */
export class DoencaItemService {
    dao: DoencaItemDAO

    /**
     * The constructor.
     *
     * @param {Database} database the database
     */
    constructor(database: Database) {
        this.dao = new DoencaItemDAO(database)
    }

    /**
     * List the items
     *
     * @return {DoencaItem[]} a list of Doenca items
     */
    async list(): Promise<DoencaItem[]> {
        return await this.dao.list()
    }

    /**
     * List the items by region and season
     * 
     * @param {string} regiao the region
     * @param {string} estacao the season
     *
     * @return {DoencaItem[]} a list of Doenca items
     */
    async listByregionAndSeason(regiao: string, estacao: string): Promise<DoencaItem[]> {
        return await this.dao.listByRegionAndSeason(regiao, estacao)
    }

    /**
     * Add a new item
     *
     * @param {any} json the JSON representation of the item to add
     */
    async add(json: any): Promise<void> {
        const status = await this.dao.insert(DoencaItem.fromJSON(json))

        if (!status) {
            throw new DatabaseError('Failed to insert item in the database')
        }
    }

    /**
     * Remove an item
     *
     * @param {number} id the id of the item to remove
     */
    async remove(id: number): Promise<void> {
        const status = await this.dao.removeById(id)

        if (!status) {
            throw new DatabaseError(`Failed to remove item ${id} from
                                                         the database`);
        }
    }

    /**
     * Add a new item
     *
     * @param {any} json the JSON representation of the item to add
     */
    async update(json: any): Promise<void> {
        const status = await this.dao.update(DoencaItem.fromJSON(json));

        if (!status) {
            throw new DatabaseError('Failed to insert item in the database')
        }
    }

    /**
     * Get an item
     *
     * @param {number} id the id of the item to get
     * @return {DoencaItem} a DoencaItem
     */
    async get(id: number): Promise<DoencaItem> {
        const item = await this.dao.findById(id)

        if (!item) {
            throw new DatabaseError(`Failed to find item ${id} from
                                                         the database`);
        }

        return item;
    }
}