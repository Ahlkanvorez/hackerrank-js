import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import printLinkedList from './print_linked_list';

describe('printLinkedList', () => {
    const log = console.log;

    afterEach(() => console.log = log);

    test('Prints nothing for an empty list', () => {
        let log = [];
        console.log = s => log.push(s);

        printLinkedList(new SinglyLinkedList().head);

        expect(log).toEqual([]);
    });

    test('Prints each non-empty list element on a new line', () => {
        let log = [];
        console.log = s => log.push(s);

        let list = new SinglyLinkedList();
        list.insertNode(16);
        list.insertNode(13);

        printLinkedList(list.head);

        expect(log).toEqual([16, 13]);
    });
});
