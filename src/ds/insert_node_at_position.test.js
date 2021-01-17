import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import insertNodeAtPosition from './insert_node_at_position';

describe('insert node at position', () => {
    test('returns a list with one element when adding to empty', () => {
        const list = insertNodeAtPosition(null, 5, 3);
        expect(list).toEqual(new SinglyLinkedListNode(5));
    });

    test('adds new nodes at the position', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list = insertNodeAtPosition(list, 3, 1);

        let expected = new SinglyLinkedListNode(1);
        expected.next = new SinglyLinkedListNode(3);
        expected.next.next = new SinglyLinkedListNode(2);

        expect(list).toEqual(expected);
    });

    test('adds new nodes at the position', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list = insertNodeAtPosition(list, 3, 2);

        let expected = new SinglyLinkedListNode(1);
        expected.next = new SinglyLinkedListNode(2);
        expected.next.next = new SinglyLinkedListNode(3);

        expect(list).toEqual(expected);
    });
});
