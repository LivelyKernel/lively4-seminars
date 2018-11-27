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

## Squeak Web Request Processing

Request handling is a complex and hard to understand. With redirects and authentication, it is difficult to see what is happening with a request.

`authenticate:from:`, `sendRequest:contentBlock:`

Useful info for determining where / why a request failed or lead to an unexpected result:

- who is modifying me / sending with messages to me
- who is sending me as part a message to other objects

## Morphic Canvas Interactions

When creating a morph, it needs to be placed on a canvas to be rendered. This canvas is passed to morphs, so that they can put themselves on it.

How to filter information?

Useful info for getting an overview of all morphs that are placed on a canvas:

- who is sending messages of a specific type to me
- what are the contents/arguments of messages of a specific type

# Interaction Patterns

- send message to me
    - who
    - from what method / block
    - with which arguments
    - return value of message
    - more context?
    - `request headerAt: 'Host' put: server.`

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

- `self garp` analogue to `self halt`
- enable / disable for a class `Garp enableFor: WebRequest`
- enable for all objects in a certain method
- pass a method to be executed on its own and enable during execution

garp registry


# Implementation

`PointerFinder`

`MwMethodWrapper` from SwaUtils

`thisContext`