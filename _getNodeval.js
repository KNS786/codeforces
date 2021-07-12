 *
 */
function getNode(head, positionFromTail) {
  var stack = [];
    var curNode = head;
    
    while(curNode) {
        stack.push(curNode.data);
        curNode = curNode.next;
    }
    
    while(positionFromTail) {
        stack.pop();
        positionFromTail--;
    }
    
    return stack.pop();

}
