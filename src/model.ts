import {config} from '../conf/config'
import {Database} from './database'

/**
 * Custom exception to signal a validation error
 */
export class ValidationError extends Error {}

/**
 * Domain Object.
 */
export class DoencaItem {
    id?: number = 0
    nome: string
    descricao: string
    sintomas: string[] = []
    tratamentos: string
    reincidencias: { [regiao: string] : string[] }
    tags?: string[] = []
    deadline?: string = ''

    /**
     * The constructor.
     *
     * @param {string}   nome o nome
     * @param {string}   descricao a descricao
     * @param {string[]} sintomas os sintomas
     * @param {string}   tratamentos os tratamentos
     * @param {{}}       reincidencias as reincidencias
     */
    constructor(nome: string, descricao: string, sintomas: string[], 
        tratamentos: string, reincidencias: { [regiao: string] : string[]}) {
        this.nome = nome
        this.descricao = descricao
        this.sintomas = sintomas
        this.tratamentos = tratamentos
        this.reincidencias = reincidencias
    }

    /**
     * Validate the Doenca.
     *
     * @return {boolean} true if the Doenca is valid, false otherwise
     */
    isValid = () => this.descricao.length > 0 && this.nome.length > 0 && 
    this.sintomas.length > 0 && this.tratamentos.length > 0 && 
    this.reincidencias.keys.length > 0

    /**
     * Check equality between two Doencas.
     *
     * @param {DoencaItem} item the other item to compare
     * @return {boolean} true, if items are equal, false otherwise
     */
    isEqual = (doenca: DoencaItem) => {
        const compareDeadlines = (dateStrA: string, dateStrB: string) => {
            const dateA = Date.parse(dateStrA)
            const dateB = Date.parse(dateStrB)

            if (isNaN(dateA) && isNaN(dateB)) {
                return true
            } else if (isNaN(dateA) || isNaN(dateB)) {
                return false
            } else if (dateA == dateB) {
                return true
            }

            return false
        }

        return this.id == doenca.id &&
            this.nome == doenca.nome 
           
    }

    /**
     * Converts a JSON representation to a DoencaItem instance, if possible.
     *
     * @param {any} json the JSON representation of an Doenca
     * @return {DoencaItem} a DoencaItem instance
     */
    static fromJSON(json: any): DoencaItem {
        if (!('nome' in json)) {
            throw new ValidationError('Missing nome field')
        }
        if (!('descricao' in json)) {
            throw new ValidationError('Missing descricao field')
        }
        if (!('sintomas' in json)) {
            throw new ValidationError('Missing sintomas field')
        }
        if (!('tratamentos' in json)) {
            throw new ValidationError('Missing tratamentos field')
        }
        if (!('reincidencias' in json)) {
            throw new ValidationError('Missing reincidencias field')
        }

        const item = new DoencaItem(json.nome, json.descricao, json.sintomas, json.tratamentos, json.reincidencias)

        return item
    }
}

export interface DoencaId {
    name: string,
    value: number
}

/**
 * Data Acess Object.
 */
export class DoencaItemDAO {
    protected database: Database

    /**
     * The constructor.
     *
     * @param {Database} db the database
     */
    constructor(db: Database) {
        this.database = db
    }

    /**
     * Get the Doenca collection, as specified in the configuration file.
     * The collection received a type parameter due to structural typing.
     *
     * @return {Collection} the Doenca collection
     */
    protected getItemCollection() {
        return this.database.getDb()
            .collection<DoencaItem>(config.db.collections.doencaItems)
    }

    /**
     * Get the sequence collection, as specified in the configuration file.
     *
     * @return {Collection} the sequence collection
     */
    protected getSequenceCollection() {
        return this.database.getDb()
            .collection<DoencaId>(config.db.collections.sequences)
    }

    /**
     * Generate a new sequential id via the sequences collection.
     * The sequence name is specified in the configuration file.
     *
     * @return {number} the new id number
     */
    private async newId(): Promise<number> {
        try {
            let lastId = await this.getSequenceCollection()
                .findOne<DoencaId>({name: config.db.sequences.doencaItemId})

            if (!lastId) {
                lastId = {
                    name: config.db.sequences.doencaItemId,
                    value: 1,
                }
            } else {
                lastId.value++
            }

            const result = await this.getSequenceCollection().replaceOne(
                {name: config.db.sequences.doencaItemId},
                lastId,
                {upsert: true},
            )

            if (result.acknowledged) {
                return lastId.value
            }

            throw new Error('Invalid value during id generation')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    /**
     * Insert a item.
     *
     * @param {DoencaItem} item the item
     * @return {number} the id of the new item
     */
    async insert(doenca: DoencaItem): Promise<number> {
        try {
            doenca.id = await this.newId()

            const response = await this.getItemCollection().insertOne(doenca)

            if (response.acknowledged) {
                return doenca.id
            }
            throw new Error('Invalid result while inserting an element')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    /**
     * List all Doencas.
     *
     * @return {DoencaItem[]} an array containing all Doencas
     */
    async list(): Promise<DoencaItem[]> {
        try {
            return (await this.getItemCollection().find<DoencaItem>({}).toArray())
                .map((it) => DoencaItem.fromJSON(it))
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    /**
      * Find an Doenca using its id
      *
      * @param {number} id the item id
      */
    async findById(id: number): Promise<DoencaItem> {
        try {
            const response = await this.getItemCollection()
                .findOne<DoencaItem>({id: id})

            if (response) {
                return response
            }
            throw new Error('Failed to find element with the given id')
        } catch (error) {
            console.error('Failed to find element by id')
            throw error
        }
    }

    /**
     * Update the target Doenca that matched the base Doenca id. All properties
     * of the target Doenca will be updated with the property values of
     * the base Doenca.
     *
     * @param {DoencaItem} Doenca the base Doenca
     * @return {boolean} true if the update was successfull, false otherwise
     */
    async update(doenca: DoencaItem): Promise<boolean> {
        try {
            const response = await this.getItemCollection().replaceOne(
                {id: doenca.id}, doenca)
            return (response) ? response.matchedCount > 0 : false
        } catch (error) {
            console.error('Failed to update element')
            throw error
        }
    }

    /**
     * Remove an Doenca given its id.
     *
     * @param {number} id the Doenca id
     * @return {boolean} true if the Doenca was removed, false otherwise
     */
    async removeById(id: number): Promise<boolean> {
        try {
            const response = await this.getItemCollection().deleteOne(
                {id: id},
                {})
            return (response.deletedCount) ? response.deletedCount > 0 : false
        } catch (error) {
            console.error('Failed to remove element')
            throw error
        }
    }
}