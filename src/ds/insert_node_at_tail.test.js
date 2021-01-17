import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import insertNodeAtTail from './insert_node_at_tail';

describe('insert node at tail', () => {
    test('returns a list with one element when adding to empty', () => {
        const list = insertNodeAtTail(null, 5);
        expect(list).toEqual(new SinglyLinkedListNode(5));
    });

    test('adds new nodes at the end', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list = insertNodeAtTail(list, 3);

        let expected = new SinglyLinkedListNode(1);
        expected.next = new SinglyLinkedListNode(2);
        expected.next.next = new SinglyLinkedListNode(3);

        expect(list).toEqual(expected);
    });
});
