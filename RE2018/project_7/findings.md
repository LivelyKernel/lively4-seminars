# Use Cases

## SMailDir

Sort mails into different folders:

1) determine that mail is missing in current folder
2) remove mail object, hold onto it
3) traverse folder structure
4) if it is found in another folder, put the mail object into the folder representation

`MDMailBox>>#synchronizeOwnMessageEntries`, `MDMailArchive>>#mailIdIndex`

Useful info or determining when / if a mail object was touched, before it went missing:

- who is referencing me
- who is sending me as part of a message to other objects

Test to execute:
`MDMessageBoxTest>>testSynchronizationMovesMovedFiles`

## Squeak Web Request Processing

Request handling is a complex and hard to understand. With redirects and authentication, it is difficult to see what is happening with a request.

`authenticate:from:`, `sendRequest:contentBlock:`

Useful info for determining where / why a request failed or lead to an unexpected result:

- who is modifying me / sending with messages to me
- who is sending me as part a message to other objects

Test to execute:
`WebClientServerTest>>testRedirectLoop`

## Morphic Canvas Interactions

When creating a morph, it needs to be placed on a canvas to be rendered. This canvas is passed to morphs, so that they can put themselves on it.

How to filter information?

Useful info for getting an overview of all morphs that are placed on a canvas:

- who is sending messages of a specific type to me
- what are the contents/arguments of messages of a specific type

"Test" to execute:
`MorphInteractionsTest>>run`

# Interaction Patterns

- Someone sends a message to me
    - who
    - what message
    - from what method / block
    - with which arguments
    - more context?
        - return value of message
    - e.g. `request headerAt: 'Host' put: server.`

- I send a message to someone else
    - who
    - what message
    - with which arguments

OFA Aliases:
- pass me as message argument
    - to whom
    - which message
    - return value of message
    - `repeatRedirect := self redirect: request from: response.`
- return me at end of method
- store me in field / variable / collection


# Design

## How To Select Objects?

- calling the wrapper explicitly
- `anObject garp`, `self garp`
- during a block
- via UI (halo)

# Implementation

## `MwMethodWrapper` from SwaUtils

`GarpMethodWrapper`
- implements message send / receive analysis by overriding `valueWithReceiver:arguments:`
- provides `(un)wrapClass:` and `(un)wrapObject:` methods
- stores wrapped classes and objects in class fields `ClassWrappers` and `ObjectWrappers`
- wrapper instances store whether they have a target object, if not, they target all objects of the wrapped class in `valueWithReceiver:arguments:`
- provides `wrap(Class|Object):in:`, receiving a block and only wrapping given class/object during execution of that block
- TODO: provides `wrapAllIn:`, receiving a block and wrapping all classes that take part in execution of that block

`Object`
- has `garp` as extension method, which calls `GarpMethodWrapper wrapObject: self`

## `Context` class

- access stack frame below using `sender`
- simulate execution of a method using `runSimulated:contextAtEachStep:`
- `method`
- `willSend`
- `peekMessageSend`


##`InstructionStream`, `Simulator`