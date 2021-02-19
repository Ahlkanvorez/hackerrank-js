import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

import reverse from './reverse_linked_list';

describe('reverse a linked list', () => {
    test('returns null for a null list', () => {
        expect(reverse(null)).toEqual(null);
    });

    test('returns a single element list unchanged', () => {
        const list = new SinglyLinkedListNode(5);
        expect(reverse(list)).toEqual(list);
    });

    test('reverses a two element list', () => {
        const list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        const reversed = new SinglyLinkedListNode(2);
        reversed.next = new SinglyLinkedListNode(1);
        expect(reverse(list)).toEqual(reversed);
    });

    test('reverses a three element list', () => {
        const list = new SinglyLinkedListNode(1);
        list.next = new SinglyLinkedListNode(2);
        list.next.next = new SinglyLinkedListNode(3);
        const reversed = new SinglyLinkedListNode(3);
        reversed.next = new SinglyLinkedListNode(2);
        reversed.next.next = new SinglyLinkedListNode(1);
        expect(reverse(list)).toEqual(reversed);
    });
});
