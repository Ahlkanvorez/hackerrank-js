import {
    SinglyLinkedListNode,
    SinglyLinkedList
} from './hackerrank_linked_list';

export default function reversePrint (head) {
    let stack = [];
    let i = 0;
    while (head) {
        stack.push(head.data);
        head = head.next;
        ++i;
    }
    for (--i; i >= 0; --i) {
        console.log(stack[i]);
    }
};
