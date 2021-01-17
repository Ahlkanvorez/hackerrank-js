import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import insertNodeAtHead from './insert_node_at_head';

describe('insert node at head', () => {
    test('returns a list with one element when adding to empty', () => {
        const list = insertNodeAtHead(null, 5);
        expect(list).toEqual(new SinglyLinkedListNode(5));
    });

    test('adds new nodes at the head', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list = insertNodeAtHead(list, 3);

        let expected = new SinglyLinkedListNode(3);
        expected.next = new SinglyLinkedListNode(1);
        expected.next.next = new SinglyLinkedListNode(2);

        expect(list).toEqual(expected);
    });
});
