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
     * Validate the item.
     *
     * @return {boolean} true if the item is valid, false otherwise
     */
    isValid = () => this.descricao.length > 0 && this.nome.length > 0 && 
    this.sintomas.length > 0 && this.tratamentos.length > 0 && 
    this.reincidencias.keys.length > 0

    /**
     * Check equality between two items.
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
     * @param {any} json the JSON representation of an item
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

