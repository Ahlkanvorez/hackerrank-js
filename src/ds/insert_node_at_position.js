import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function insertNodeAtPosition (head, data, position) {
    const root = head;

    let node = new SinglyLinkedListNode(data);
    if (!head) {
        return node;
    }

    let idx = 1;
    let next = head.next;
    while (idx < position && next) {
        ++idx;
        head = next;
        next = head.next;
    }

    head.next = node;
    node.next = next;

    return root;
};
