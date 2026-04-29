class MinStack():
  # Since we have 2 stacks, define them both here
  def __init__(self):
    self.stack = []
    self.minStack = []

  def push(self, val: int) -> None:
    # add onto the traditional stack just by appending
    self.stack.append(val)
    # find the minimum value by updating val to compare using min
    # in min, use val, and top of min stack if it's not empty. if it is, just use val.
    val = min(val, self.minStack[-1] if self.minStack else val)
    # append newly found minimum val onto minStack
    self.minStack.append(val)
  
  
  def pop(self) -> None:
    # pop both top elements off
    self.stack.pop()
    self.minStack.pop()
  
  def top(self) -> int:
    # using the og stack, just return the top element
    return self.stack[-1]
  
  def getMin(self) -> int:
    # using the min stack, just return the top element
    return self.minStack[-1]