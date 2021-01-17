import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import reversePrint from './print_reverse';

describe('reversePrint', () => {
    const log = console.log;

    afterEach(() => console.log = log);

    test('Prints nothing for an empty list', () => {
        let log = [];
        console.log = s => log.push(s);

        reversePrint(new SinglyLinkedList().head);

        expect(log).toEqual([]);
    });

    test('Prints each non-empty list element on a new line reversed', () => {
        let log = [];
        console.log = s => log.push(s);

        const input = [16, 12, 4, 2, 5];

        let list = new SinglyLinkedList();              
        input.forEach(n => list.insertNode(n));

        reversePrint(list.head);

        expect(log).toEqual(input.reverse());
    });
});
