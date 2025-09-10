# Lift Subsystem

A subsystem that is found on almost all FTC robots in most seasons is a lift, a
type of linear slide. Here, you
will learn how to program your own lift subsystem.

> [!TIP]
> This subsystem can be generalized to any subsystem with a motor.

## Step 1: Create your subsystem

The first step to creating your subsystem is setting up the structure for it.
There should only be one instance of each
subsystem. To do this, we will make our subsystem
a [singleton](https://www.geeksforgeeks.org/singleton-design-pattern/).

:::tabs key:codes

== Kotlin

Creating our subsystem with the `object` keyword makes it a singleton:

```kotlin
object Lift : Subsystem {

}
```

== Java
In Java, there are a couple lines of boilerplate you will need to add to the top
of every subsystem you create to
make it a singleton:

```java
public class Lift implements Subsystem {
    public static final Lift INSTANCE = new Lift();
    private Lift() { }
    
}
```

:::

## Step 2: Create your motor

Next, we need to set up a motor to power our lift. Let's start by creating a
variable to store our motor. It should be
of type `MotorEx`.

:::tabs key:code

== Kotlin

```kotlin
private val motor = MotorEx("lift_motor")
```

== Java

```java
private MotorEx motor = new MotorEx("lift_motor");
```

:::

We also need a `ControlSystem`, since we want to move our motor. We'll be
using [NextControl](/control), NextFTC's
solution to control in FTC. NextControl makes it very easy to create more
complex controllers if you ever need them.
Let's use a PID controller with a gravity-compensating feedforward.

:::tabs key:code
== Kotlin

```kotlin
private val controller = controlSystem {
    posPid(0.005, 0.0, 0.0)
    elevatorFF(0.0)
}
```

== Java

```java
private ControlSystem controlSystem = ControlSystem.builder()
    .posPid(0.005, 0, 0)
    .elevatorFF(0)
    .build();
```

:::

> [!IMPORTANT]
> Don't forget to tune your controller!

Now, we must set our motor power to the `ControlSystem`'s output every loop. We
can run code every loop by overriding the `periodic()` function.

The reason we set the motor power in `periodic()` instead of in our commands is
that the `ControlSystem` needs to be updated every loop to work properly. If we
only set the motor power in our commands, the motor power would only be updated
when a command is running, meaning once a command finishes, the motor power
would stop being updated and thus remain at whatever it was last set to,
pushing it past its target position. Putting it in `periodic()` also ensures that the
feedforward is always being applied, which is important to counteract gravity.

:::tabs key:code

== Kotlin

```kotlin
override fun periodic() {
    motor.power = controlSystem.calculate(motor.state)
}
```

== Java

```java
@Override
public void periodic() {
    motor.setPower(controlSystem.calculate(motor.getState()));
}
```

:::

That's all you need to do to create a motor in NextFTC.

We're not quite done, though. We still need to create our commands!

## Step 3: Create commands

The last step when you create a Subsystem is to create the commands you'll be
using. This process varies with each
subsystem. Here, we'll create three commands that each move
the lift to a different height: `toLow`,
`toMiddle`, and `toHigh`.

To control our motor's position, we will be using the `RunToPosition` command.

Let's create our first `RunToPosition` command.

:::tabs key:code
== Kotlin

```kotlin
val toLow = RunToPosition(controlSystem, 0.0).requires(this)
```

== Java

```java
public Command toLow = new RunToPosition(controlSystem, 0).requires(this);
```

:::

Note the `requires(this)`. This is what tells NextFTC which commands should
be allowed to run at the same time. If it weren't set, `toLow` would be able to
run at the same time as other commands that use the `Lift` subsystem - so there
would be multiple things fighting to set the motor's power. Generally, you need
to pass `this` as the subsystem, although there are exceptions with more
complicated custom commands.

Pretty easy, right? Let's duplicate it and update our variable name and target
position to create our other two commands:

:::tabs key:code
== Kotlin

```kotlin
val toMiddle = RunToPosition(controlSystem, 500.0).requires(this)

val toHigh = RunToPosition(controlSystem, 1200.0).requires(this)
```

== Java

```java
public Command toMiddle = new RunToPosition(controlSystem, 500).requires(this);

public Command toHigh = new RunToPosition(controlSystem, 1200).requires(this);
```

:::

## Final result

That's it! You've created your first subsystem! Here is the final result:

:::tabs key:code
== Kotlin

```kotlin
object Lift : Subsystem {
    private val motor = MotorEx("lift_motor")

    private val controlSystem = controlSystem {
        posPid(0.005, 0.0, 0.0)
        elevatorFF(0.0)
    }

    val toLow = RunToPosition(controlSystem, 0.0).requires(this)
    val toMiddle = RunToPosition(controlSystem, 500.0).requires(this)
    val toHigh = RunToPosition(controlSystem, 1200.0).requires(this)

    override fun periodic() {
        motor.power = controlSystem.calculate(motor.state)
    }
}
```

== Java

```java
public class Lift implements Subsystem {
    public static final Lift INSTANCE = new Lift();
    private Lift() { }

    private MotorEx motor = new MotorEx("lift_motor");

    private ControlSystem controlSystem = ControlSystem.builder()
        .posPid(0.005, 0, 0)
        .elevatorFF(0)
        .build();

    public Command toLow = new RunToPosition(controlSystem, 0).requires(this);
    public Command toMiddle = new RunToPosition(controlSystem, 500).requires(this);
    public Command toHigh = new RunToPosition(controlSystem, 1200).requires(this);

    @Override
    public void periodic() {
        motor.setPower(controlSystem.calculate(motor.getState()));
    }
}
```

:::
