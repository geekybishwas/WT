## Event Bubbling

Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event.

Syntax:

addEventListener(type, listener, useCapture)

type: Use to refer to the type of event.

listener: Function we want to call when the event of the specified type occurs.

userCapture: Boolean value. Boolean value indicates event phase. By Default useCapture is false. It means it is in the bubbling phase

## Event Capturing

In event capturing, an event propagates from the outermost element to the target element. It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements. Events trickle down in event capturing. Capturing happens before bubbling.

Syntax:

addEventListener(type, listener, useCapture)

type: Use to refer to the type of event.

listener: Function we want to call when the event of the specified type occurs.

userCapture: Boolean value. Boolean value indicates event phase. By Default useCapture is false. It means it is in the bubbling phase so we have to make it true in capturing.
