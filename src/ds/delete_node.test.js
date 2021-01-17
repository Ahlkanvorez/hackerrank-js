import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import deleteNode from './delete_node';

describe('delete node at position', () => {
    test('returns null for a null list', () => {
        const list = deleteNode(null, 0);
        expect(list).toEqual(null);
    });

    test('returns null when deleting only node in list', () => {
        const list = deleteNode(new SinglyLinkedListNode(5), 0);
        expect(list).toEqual(null);
    });

    test('Can remove nodes in the middle', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list.next.next = new SinglyLinkedListNode(3);
        list = deleteNode(list, 1);

        let expected = new SinglyLinkedListNode(1);
        expected.next = new SinglyLinkedListNode(3);

        expect(list).toEqual(expected);
    });

    test('Can remove nodes at end', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list.next.next = new SinglyLinkedListNode(3);
        list = deleteNode(list, 2);

        let expected = new SinglyLinkedListNode(1);
        expected.next = new SinglyLinkedListNode(2);

        expect(list).toEqual(expected);
    });

    test('Can remove nodes at start', () => {
        let list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list.next.next = new SinglyLinkedListNode(3);
        list = deleteNode(list, 0);

        let expected = new SinglyLinkedListNode(2);
        expected.next = new SinglyLinkedListNode(3);

        expect(list).toEqual(expected);
    });
});
