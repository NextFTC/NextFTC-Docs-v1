# Getting Started

The core part of NextBindings is the `BindingManager`. It is responsible for
creating, storing, updating, and deleting all buttons, variables, and ranges.
Additionally, it is responsible for managing the layer (more on that on the
next page).

The three "building blocks" of NextBindings are buttons,
variables, and ranges. A button represents anything that is always either
true or false. Examples include but are not limited to a gamepad button, a
limit switch, and even something abstract like whether the robot is moving.

Buttons can have callbacks bound on certain events, such as rising and
falling edges. These callbacks are run when the button is updated, usually
through the `BindingManager`.

Variables represent anything that can vary (hence the name). Variables can
be mapped to other variables and converted to buttons based on certain
conditions. A range is a special type of variable specifically for a number.
Ranges add functionality to variables such as thresholds and negating.

To get started, add the following to your OpMode:

:::tabs key:code

== Kotlin

```kotlin
// in loop(), or in NextFTC, onUpdate():
BindingManager.update()

// in stop(), or in NextFTC, onStop();
BindingManager.reset()
```

== Java

```java
// in loop(), or in NextFTC, onUpdate():
BindingManager.update();

// in stop(), or in NextFTC, onStop():
BindingManager.reset();
```

:::

Calling `update` updates all variables (including ranges) and buttons, in 
that order. The reason that variables are updated before buttons is so that 
buttons that depend on variables can receive the latest value of the 
variable, instead of the value from the previous loop.

Calling `reset` does three things:

- Removes all variables
- Removes all buttons
- Sets the current layer to `null`