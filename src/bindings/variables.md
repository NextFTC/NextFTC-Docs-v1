# Variables and Ranges

A variable is a container for any value that provides useful operations and
a range is a special type of variable with number-specific utilities. While
variables and ranges can't "do" anything by themselves, they allow you
to create more complicated buttons to bind callbacks to.

## Variables

To create a variable, use the `variable` function, which, like the `button`
function, automatically adds it to the `BindingManager`. To create a range,
use the `range` function.

:::tabs key:code

== Kotlin

```kotlin
val myVariable = variable { "Hello, World" }
val myRange = range { 3.14 }
```

== Java

```java
Variable<String> myVariable = variable(() -> "Hello, World!");
Range myRange = range(() -> 3.14);
```

:::

Variables have several useful operations. Let's first look at `map`. Map
creates a new variable by applying a function to the value of the variable
every loop. While this may sound complicated, I assure you it's not. Let's
look at an example.

:::tabs key:code

== Kotlin

```kotlin
val variable = variable { "World" }
val mappedVariable = variable.map { "Hello, $it" }

println(mappedVariable.get()) // Hello, World
```

== Java

```java
Variable<String> variable = variable(() -> "World");
Variable<String> mappedVariable = variable.map(place -> "Hello, " + place);

System.out.println(mappedVariable.get()); // Hello, World
```

:::

Note that when the value of the initial variable changes, the value of the
mapped variable also changes!

There is also `mapToRange`, which is the same as `map` but produces a
`Range`. You should generally use this when you're mapping to a numeric value.

Now, let's look at `asButton`. This function creates a button from the value
of a variable and a condition, or predicate. For example:

:::tabs key:code

== Kotlin

```kotlin
val leftStickY = variable { gamepad2.left_stick_y }
val button = leftStickY.asButton { it > 0 } // true when left stick y is positive.
```

== Java

```java
Variable<Float> leftStickY = variable(() -> gamepad2.left_stick_y);
Button button = leftStickY.asButton(value -> value > 0); // true when left stick y is positive.
```

:::

## Ranges

Ranges are variables with special functions for numbers. Since ranges are 
variables, all the operations that variables have also work on ranges. In 
addition, there are some more useful number-specific operations.

First of all, there are built-in `asButton` functions so that you don't have 
to do it manually every time. These include:

- `greaterThan`: returns a button that is true when the value is greater 
  than a number.
- `lessThan`: returns a button that is true when the value is less than a 
  number.
- `atLeast`: returns a button that is true when the value is greater than or 
  equal to a number.
- `atMost`: returns a button that is true when the value is less than or 
  equal to a number.
- `inRange`: returns a button that is true when the value is within a 
  certain closed range.

There are also built-in `map` functions:

- `deadZone`: returns a range that is the same as the original range, but is 
  zero when the value is within a certain threshold of zero.
- `invert`: returns a range whose value is one minus the original range
- `negate`: returns a range whose value is the opposite of the original range
- In Kotlin, you can use `-range` as a shorthand for `negate`.