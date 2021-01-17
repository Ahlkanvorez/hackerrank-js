import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function insertNodeAtTail (head, data) {
    const root = head;
    if (!root) {
        return new SinglyLinkedListNode(data);
    }

    let next = head.next;
    while (next) {
        head = next;
        next = next.next;
    }
    head.next = new SinglyLinkedListNode(data);

    return root;
};
