// =============Mouse events=============
// In this chapter we’ll get into more details about mouse events and their properties.

// Please note: such events may come not only from “mouse devices”, but are also from other devices, such as phones and tablets, where they are emulated for compatibility.

// Mouse event types
// We’ve already seen some of these events:

// mousedown/mouseup
// Mouse button is clicked/released over an element.
// mouseover/mouseout
// Mouse pointer comes over/out from an element.
// mousemove
// Every mouse move over an element triggers that event.
// click
// Triggers after mousedown and then mouseup over the same element if the left mouse button was used.
// dblclick
// Triggers after two clicks on the same element within a short timeframe. Rarely used nowadays.
// contextmenu
// Triggers when the right mouse button is pressed. There are other ways to open a context menu, e.g. using a special keyboard key, it triggers in that case also, so it’s not exactly the mouse event.
// …There are several other events too, we’ll cover them later.

// Events order
// As you can see from the list above, a user action may trigger multiple events.

// For instance, a left-button click first triggers mousedown, when the button is pressed, then mouseup and click when it’s released.

// In cases when a single action initiates multiple events, their order is fixed. That is, the handlers are called in the order mousedown → mouseup → click.

// Click the button below and you’ll see the events. Try double-click too.

// On the teststand below, all mouse events are logged, and if there is more than a 1 second delay between them, they are separated by a horizontal rule.

// Also, we can see the button property that allows us to detect the mouse button; it’s explained below.

 

// mousedown   button=0
// mouseup     button=0
// click       button=0

// Mouse button
// Click-related events always have the button property, which allows to get the exact mouse button.

// We usually don’t use it for click and contextmenu events, because the former happens only on left-click, and the latter – only on right-click.

// On the other hand, mousedown and mouseup handlers may need event.button, because these events trigger on any button, so button allows to distinguish between “right-mousedown” and “left-mousedown”.

// The possible values of event.button are:

// Button state	event.button
// Left button (primary)	0
// Middle button (auxiliary)	1
// Right button (secondary)	2
// X1 button (back)	3
// X2 button (forward)	4
// Most mouse devices only have the left and right buttons, so possible values are 0 or 2. Touch devices also generate similar events when one taps on them.

// Also there’s event.buttons property that has all currently pressed buttons as an integer, one bit per button. In practice this property is very rarely used, you can find details at MDN if you ever need it.

// The outdated event.which
// Old code may use event.which property that’s an old non-standard way of getting a button, with possible values:

// event.which == 1 – left button,
// event.which == 2 – middle button,
// event.which == 3 – right button.
// As of now, event.which is deprecated, we shouldn’t use it.

// Modifiers: shift, alt, ctrl and meta
// All mouse events include the information about pressed modifier keys.

// Event properties:

// shiftKey: Shift
// altKey: Alt (or Opt for Mac)
// ctrlKey: Ctrl
// metaKey: Cmd for Mac
// They are true if the corresponding key was pressed during the event.

// For instance, the button below only works on Alt+Shift+click:

// <button id="button">Alt+Shift+Click on me!</button>

// <script>
//   button.onclick = function(event) {
//     if (event.altKey && event.shiftKey) {
//       alert('Hooray!');
//     }
//   };
// </script>

// Attention: on Mac it’s usually Cmd instead of Ctrl
// On Windows and Linux there are modifier keys Alt, Shift and Ctrl. On Mac there’s one more: Cmd, corresponding to the property metaKey.

// In most applications, when Windows/Linux uses Ctrl, on Mac Cmd is used.

// That is: where a Windows user presses Ctrl+Enter or Ctrl+A, a Mac user would press Cmd+Enter or Cmd+A, and so on.

// So if we want to support combinations like Ctrl+click, then for Mac it makes sense to use Cmd+click. That’s more comfortable for Mac users.

// Even if we’d like to force Mac users to Ctrl+click – that’s kind of difficult. The problem is: a left-click with Ctrl is interpreted as a right-click on MacOS, and it generates the contextmenu event, not click like Windows/Linux.

// So if we want users of all operating systems to feel comfortable, then together with ctrlKey we should check metaKey.

// For JS-code it means that we should check if (event.ctrlKey || event.metaKey).

// There are also mobile devices
// Keyboard combinations are good as an addition to the workflow. So that if the visitor uses a keyboard – they work.

// But if their device doesn’t have it – then there should be a way to live without modifier keys.

// Coordinates: clientX/Y, pageX/Y
// All mouse events provide coordinates in two flavours:

// Window-relative: clientX and clientY.
// Document-relative: pageX and pageY.
// We already covered the difference between them in the chapter Coordinates.

// In short, document-relative coordinates pageX/Y are counted from the left-upper corner of the document, and do not change when the page is scrolled, while clientX/Y are counted from the current window left-upper corner. When the page is scrolled, they change.

// For instance, if we have a window of the size 500x500, and the mouse is in the left-upper corner, then clientX and clientY are 0, no matter how the page is scrolled.

// And if the mouse is in the center, then clientX and clientY are 250, no matter what place in the document it is. They are similar to position:fixed in that aspect.

// Move the mouse over the input field to see clientX/clientY (the example is in the iframe, so coordinates are relative to that iframe):

// <input onmousemove="this.value=event.clientX+':'+event.clientY" value="Mouse over me">

// =============Preventing selection on mousedown=============
// Double mouse click has a side effect that may be disturbing in some interfaces: it selects text.

// For instance, double-clicking on the text below selects it in addition to our handler:

// <span ondblclick="alert('dblclick')">Double-click me</span>

// If one presses the left mouse button and, without releasing it, moves the mouse, that also makes the selection, often unwanted.

// There are multiple ways to prevent the selection, that you can read in the chapter Selection and Range.

// In this particular case the most reasonable way is to prevent the browser action on mousedown. It prevents both these selections:

// Before...
// <b ondblclick="alert('Click!')" onmousedown="return false">
//   Double-click me
// </b>
// ...After

// Now the bold element is not selected on double clicks, and pressing the left button on it won’t start the selection.

// Please note: the text inside it is still selectable. However, the selection should start not on the text itself, but before or after it. Usually that’s fine for users.

// Preventing copying
// If we want to disable selection to protect our page content from copy-pasting, then we can use another event: oncopy.

// <div oncopy="alert('Copying forbidden!');return false">
//   Dear user,
//   The copying is forbidden for you.
//   If you know JS or HTML, then you can get everything from the page source though.
// </div>

// If you try to copy a piece of text in the <div>, that won’t work, because the default action oncopy is prevented.

// Surely the user has access to HTML-source of the page, and can take the content from there, but not everyone knows how to do it.

// =============Summary=============
// Mouse events have the following properties:

// Button: button.

// Modifier keys (true if pressed): altKey, ctrlKey, shiftKey and metaKey (Mac).

// If you want to handle Ctrl, then don’t forget Mac users, they usually use Cmd, so it’s better to check if (e.metaKey || e.ctrlKey).
// Window-relative coordinates: clientX/clientY.

// Document-relative coordinates: pageX/pageY.

// The default browser action of mousedown is text selection, if it’s not good for the interface, then it should be prevented.

// In the next chapter we’ll see more details about events that follow pointer movement and how to track element changes under it.

