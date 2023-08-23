import {secrets} from './secrets';

export const config = {
    db: {
        url: secrets.url,
        name: 'doencasdb',
        testName: 'doencasdb-test',
        collections: {
            doencasItems: 'doencas-items',
            sequences: 'sequences',
        },
        sequences: {
            toDoItemId: 'doenca-item-id',
        },
    },
    test: {
        url: 'http://localhost:3000/api',
    },
}