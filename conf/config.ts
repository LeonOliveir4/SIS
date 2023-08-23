import {secrets} from './secrets';

export const config = {
    db: {
        url: secrets.url,
        name: 'doencasdb',
        testName: 'doencasdb-test',
        collections: {
            doencaItems: 'doenca-items',
            sequences: 'sequences',
        },
        sequences: {
            doencaItemId: 'doenca-item-id',
        },
    },
    test: {
        url: 'http://localhost:3000/api',
    },
}