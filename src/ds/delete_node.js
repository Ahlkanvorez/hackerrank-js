import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function deleteNode (head, position) {
    const root = head;

    if (!head || position === 0) {
        return head ? head.next : null;
    }

    let idx = 1;
    let next = head.next;
    while (idx < position && next) {
        ++idx;
        head = next;
        next = head.next;
    }

    head.next = next && next.next ? next.next : null;

    return root;
};
