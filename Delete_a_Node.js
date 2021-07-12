/*Hackerank Delete a Node*/
function DeleteNode(head,position)
{
	if (position == 0) { 
        head = head.next;
        return head;
    }
    head.next = DeleteNode(head.next, --position);
    return head;
}


