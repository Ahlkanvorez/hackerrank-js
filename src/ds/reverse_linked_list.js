import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

const reverseNode = (current, prior) => {
    if (current) {
        const next = current.next;
        current.next = prior;
        return reverseNode(next, current);
    } else {
        return prior;
    }
};

export default function reverse (head) {
    if (head) {
        return reverseNode(head, null);
    } else {
        return null;
    }
};
