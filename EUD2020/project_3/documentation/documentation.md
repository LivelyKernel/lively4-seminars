# Project 3: Petrinet Simulator

Contributors: Linus Heinzl and Anne Radunski

## Introduction

The Petrinet Simulator is a software tool for the simulation and design of discrete-event systems based on petrinet models. The petrinet is a common method for modelling concurrency and synchronisation in distributed systems. It consists of places, tokens, connectors and transitions. Probabilities can be assigned to conflicting transitions. We implemented 2 types of petrinet models: classic petrinet and the high-level petrinet.
Users can draw, store, edit and delete petrinet models, as well as start the procedures for simulation and debugging. Using our debugging tools, the user is able to change the petrinet iteratively until it works. With a code transition, the end user can set custom rules for transitions. This is also useful for the high-level petrinet. Thus, the user is able to model attributes with colored tokens.


## Elements Of a Petrinet

### Place

<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/SimplePlace.html"></lively-import>

Within a petrinet, a place stores the so-called tokens. To move or fire a token from one place to another, we need a transition.


### Transition

<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/SimpleTransition.html"></lively-import>

A transition is used to move tokens from one place to another. A transition can only fire when each of the places before the transition have at least one token. When the transition fires, it removes one token from each place, and adds one token to each of the places that come after the transition. We have added a field for probability to model concurrent behaviour. This means: When each of the places connected to the transition have a token, the transition fires with probability P, where P is input by the user. P can range from 0 to 1.


## Basic Petrinet

Let us create a basic petrinet that looks like this:

<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/Simple.html"></lively-import>


Here is an empty net, which you can use to recreate the petrinet from above:

<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/Empty.html"></lively-import>

- First, we want to add two places. For this, right click on an area where you want to place them. If you want to move them, you can do this via drag-and-drop. If you want to name the transition, Type in something into the "Eingabe" field.
- Now, we want to add a token on the first place. For this, right-click on the first place and click on "add token". 
- Now we want to add a transition. For this, right click on where you want to place the transition, right click, and select "add transition". Put a number between 0 and 1 as a probability value.
- To connect the first place to the transition, double click on the first place. A connector should appear. Move your mouse to the transition, and double click again. Now these two should be connected. Repeat the same step to connect the transition to the second place.


## Barber Example

Very nice, you created your first petrinet! But it gets kind of boring to only look at the petrinet, we want to do something with them. For this, look at the next example. It is about a barber shop, which has two customers and two barbers. With the petrinet, we model how the haircutting process of the customers. First they wait, then they get accepted by a free barber, and then they are finished. 

How do we simulate this now? For this, right click on the petrinet and select "activate toolbar". First, change the probabilities to a positive value. You then can start the simulation by clicking on "Start", and then on "Run".



<div style="height:450px"><lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/Barber.html"></lively-import><div>
</div>


You can also use the slider to go back in time, or "Step" to go to the next transition of the petrinet.

## Deadlock Example

In the Barber Example, we have a clear and satisfying end point - when everyone has his hair cut. But a petrinet doesn't always have this. Sometimes, it is in a state where no transition can fire - we call this a "Deadlock". To get an example for a deadlock, simulate the following petrinet: 


<div style="height:600px"><lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/Deadlock.html"></lively-import><div>
</div>

<script>
const button = <button>Show solution</button>;
lively.addEventListener("Show Solution", button, "click", () => lively.openBrowser("https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/DeadlockFixed.md"));
button
</script>


How can you fix this? Edit the petrinet so that the deadlock is not present anymore! To delete a token/connector/transition/place, click on them and then click on the trash icon in the toolbar.





## High-Level Petrinet

### Code Transition

With code transitions, the end user can program custom behaviour into the transition. Following things are possible with code transitions:
- Decide (based on token colour for example) if the transition should fire or not.
- Decide things for the places that have a connector to the transition. Mainly, decide which tokens shall be removed from them.
- Decide where to add new tokens (and which colours they should have).

Here is an example on how we can use the code transitions for a more concise petrinet for our barber example. The red tokens model the customer, and the blue tokens model the barber. Click on the "+" button to view the code of the code transition. Can you modify the code transition such that one barber can make the haircut for two customers at the same time?



<lively-import src="https://lively-kernel.org/lively4/lively4-seminars/EUD2020/project_3/petrinets/HighLevelPetrinet.html"></lively-import>

