# Buttons, Layers, and Callbacks

Buttons are arguably the most important part of NextBindings. They provide
the functionality that NextBindings is all about: bindings!

## Buttons

To create a button, use the `button` function. In addition to creating the
button, this function also registers it with the `BindingManager`
automatically so you don't have to do it yourself!

:::tabs key:code

== Kotlin

```kotlin
val myButton = button { someBooleanCondition }

// for example:
val gamepad1a = button { gamepad1.a }
```

== Java

Make sure to add the static import to be able to just say `button`:

```java
import static dev.nextftc.bindings.Bindings.*;
```

If you don't want to do the static import, you must instead use the
`Bindings.button` function.

To create a button, do the following.

```java
Button myButton = button(() -> someBooleanCondition);

// for example:
Button gamepad1a = button(() -> gamepad1.a);
```

:::

There are four events in buttons that callbacks can be bound to. They are:

- `whenTrue`: every loop when the button is true.
- `whenFalse`: every loop when the button is false.
- `whenBecomesTrue`: the first loop when the button is true, a.k.a. the
  rising edge.
- `whenBecomesFalse`: the first loop when the button is false, a.k.a. the
  falling edge.

> [!IMPORTANT]
> Bindings should be made in `start` (or `onStartButtonPressed` in NextFTC)
> and **not** in `loop`. This may not be what you are used to, but the
> bindings are saved and run when `BindingManager.update()` is called, in
> `loop`.

Each function takes a `Runnable` to run when the event happens. This means
that you can pass a lambda function. If you are using NextFTC commands, this
means that you can also pass commands, as they implement `Runnable`. The
functions also return the button, allowing for fluent-style method chaining.

Now enough with the talk, let's get to the code!

:::tabs key:code

== Kotlin

```kotlin
val myButton = button { gamepad1.a }
myButton.whenTrue { runSomething() }
        .whenFalse { runSomethingElse() }
        .whenBecomesTrue { runAnotherThing() }
        .whenBecomesFalse { runAnotherNotherThing() }
    
// you can also use them directly on the button function:
button { gamepad1.a }
    .whenBecomesTrue { runSomeCode() }
    .whenBecomesFalse { runSomeMoreCode() }
    
// since we're in Kotlin, we can use infix notation if all our code is on a single line:
button { gamepad1.a } whenBecomesTrue { yellowCard() } whenFalse { redCard() }
```

== Java

```java
Button myButton = button(() -> gamepad1.a);
myButton.whenTrue(() -> runSomething())
        .whenFalse(() -> runSomethingElse())
        .whenBecomesTrue(() -> runAnotherThing())
        .whenBecomesFalse(() -> runAnotherNotherThing());
    
// you can also use them directly on the button function:
button(() -> gamepad1.a)
    .whenBecomesTrue(() -> runSomeCode())
    .whenBecomesFalse(() -> runSomeMoreCode());
```

:::

## Toggles

Buttons also support toggles. There are two toggle functions,
`toggleOnBecomesTrue` and `toggleOnBecomesFalse`, each of which return a new
button. The returned button of `toggleOnBecomesTrue` always starts at false and
becomes true on the first rising edge, false on the second, and so on. For
`toggleOnBecomesFalse`, it is very similar, except for the falling edge.

As an example:

:::tabs key:code

== Kotlin

```kotlin
button { gamepad2.right_bumper }
  .toggleOnBecomesTrue()
  .whenBecomesTrue { openClaw() } // runs every other rising edge, including the first one
  .whenBecomesFalse { closeClaw() } // runs the rest of the rising edges
```

== Java

```java
button(() -> gamepad2.right_bumper)
  .toggleOnBecomesTrue()
  .whenBecomesTrue(() -> openClaw()) // runs every other rising edge, including the first one
  .whenBecomesFalse(() -> closeClaw()); // runs the rest of the rising edges
```

:::

## Combining Buttons

Buttons can be combined and manipulated using four logical operators: AND,
OR, XOR, and NOT.

:::tabs key:code

== Kotlin

```kotlin
val andButton = button1 and button2 // true when both buttons are true
val orButton = button1 or button2 // true when at least one button is true
val xorButton = button1 xor button2 // true when exactly one button is true
val notButton = !button1 // true when button1 is false
```

== Java

```java
Button andButton = button1.and(button2); // true when both buttons are true
Button orButton = button1.or(button2); // true when at least one button is true
Button xorButton = button1.xor(button2); // true when exactly one button is true
Button notButton = button1.not(); // true when button1 is false
```

:::

In the following example, the drone is launched when the right bumper on
either gamepad 1 or gamepad 2 is pressed, but not if both are pressed.

:::tabs key:code

== Kotlin

```kotlin
(button { gamepad1.right_bumper } xor { gamepad2.right_bumper })
  .whenBecomesTrue { launchDrone() }
```

== Java

```java
button(() -> gamepad1.rightBumper).xor(() -> gamepad2.right_bumper)
  .whenBecomesTrue(() -> launchDrone());
```

:::

## Layers

Layers allow you to specify callbacks that are only run at certain times.
All the callbacks we've written so far are run regardless of the layer
because we didn't specify a layer. There is always exactly one active layer,
set in the `BindingManager`. The layer starts as `null`. When the layer is
`null`, only globally defined callbacks (the ones we've created so far) are run.

To set the layer, do the following:

:::tabs key:code

== Kotlin

```kotlin
BindingManager.layer = "endgame"
```

== Java

```java
BindingManager.setLayer("endgame");
```

:::

The layer is automatically set back to `null` at the end of the OpMode, when
`BindingManager.reset()` is called. If for some reason you want to create a
binding only when the active layer is `null` (there is no active layer), you
can do so just as you would with any other layer. However, you should first
consider if there is a better option.

:::tabs key:code

== Kotlin

To create a binding in a layer, create it in an `inLayer` block.

```kotlin
button { someBoolean }
  .whenTrue { runSomething() } // this is run regardless of layer.
  .inLayer("endgame") {
    whenBecomesFalse { runSomethingElse() } // this is run only when the active layer is "endgame".
  }
  .inLayer("teleop") {
    whenTrue { doSomething() }
    whenFalse { doSomethingElse() }
  }
  .whenBecomesTrue { runAnotherThing() } // this is also run regardless of layer.
```

== Java

To create a binding in a layer, call `inLayer` with the layer. Calling
`global` brings you back to the global layer.

```java
button(() -> someBoolean)
  .whenTrue(() -> runSomething()) // this is run regardless of layer.
  .inLayer("endgame")
  .whenBecomesFalse(() -> runSomethingElse()) // this is run only when the active layer is "endgame".
  .inLayer("teleop")
  .whenTrue(() -> doSomething())
  .whenFalse(() -> doSomethingElse())
  .global()
  .whenBecomesTrue(() -> runAnotherThing()) // this is also run regardless of layer.
```

:::