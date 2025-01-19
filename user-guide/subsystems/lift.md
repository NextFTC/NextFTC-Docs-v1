# Lift Subsystem

A subsystem that is found on almost all FTC robots in most seasons is a linear slide, also known as a lift. Here, you will learn how to program your own lift Subsystem.

## Step 1: Create your class

The first step to creating your Subsystem is setting up the structure for it. There should only be one instance of each subsystem class. To do this, we will make our subsystem a singleton class. Here is the most basic structure that can be copy+pasted to create all of your subsystems.

:::tabs key:codes

== Kotlin

Creating our subsystem as an `object` makes it a singleton:

```kotlin
object MySubsystem: Subsystem() {

}
```

== Java
In Java, there are a couple lines of boilerplate you will need to add to the top of every subsystem class you create to make it a singleton:

```java
public class MySubsystem extends Subsystem {
    // BOILERPLATE
    public static final MySubsystem INSTANCE = new MySubsystem();
    private MySubsystem() { }

    // USER CODE HERE
}
```

:::

In this case, let's call our subsystem `Lift`.

## Step 2: Create your motor

Next, we need to set up a motor to power our lift. This is easy to do using the [`MotorEx` class](/components/motorex). Let's start by creating a variable to store our motor. It should be of type `MotorEx`.

:::tabs key:code

== Kotlin
We're using `lateinit var` here because we can't initialize our motor until the OpMode has been initialized, since the hardware map isn't created until an OpMode has been initialized.

```kotlin
lateinit var motor: MotorEx
```

== Java
Note that we aren't setting the value immediately; this is because we don't have access to the hardware map until an OpMode is initialized.

```java
public MotorEx motor;
```

:::

We also need a `Controller`, since we want to move our motor. Let's use a PID controller. I recommend using a P value of 0.005 to start, and leaving I and D at zero. You should come back and tune it later, though.

:::tabs key:code
== Kotlin

```kotlin
val controller = PIDController(PIDCoefficients(0.005, 0.0, 0.0))
```

== Java

```java
public PIDController controller = new PIDController(new PIDCoefficients(0.005, 0.0, 0.0));
```

:::

Next, we need a name. This is the name specified in the hardwareMap, so that NextFTC can find the motor. I called mine `lift_motor`, so that's the name I'm using. Use whatever name you've set in your configuration:

:::tabs key:code
== Kotlin

```kotlin
val name = "lift_motor"
```

== Java

```java
public String name = "lift_motor";
```

:::

Finally, the last step to setting up a motor is instantiating the motor in the `initialize()` function. Let's do that now:

:::tabs key:code
== Kotlin

```kotlin
override fun initialize() {
    motor = MotorEx(name)
}
```

== Java

```java
@Override
public void initialize() {
    motor = new MotorEx(name);
}
```

:::

That's all you need to do to create a motor in NextFTC! To recap:

-   Every motor needs to be stored in a variable
-   Every motor needs a `Controller`
-   Every motor needs a name
-   Every motor must be instantiated in the `initialize()` function.

We're not quite done, though. We still need to create our first commands!

## Step 3: Create commands

The last step when you create a Subsystem is to create the commands you'll be using. This process varies with each subsystem. Here, I'll walk you through creating three commands that each move the lift to a different height: `toLow`, `toMiddle`, and `toHigh`.

> [!TIP]
> It's recommended to create a variable to store each encoder position. However, that takes up more space, so I won't be doing that here.

To control our motor, we will be using the `RunToPosition` command.

Let's create our first `RunToPosition` command.

:::tabs key:code
== Kotlin

There are a few different ways to implement commands, but the cleanest and recommended way is using getter methods. We will create properties (of type `Command`) and return instances of classes whenever we reference those properties:

```kotlin
val toLow: Command
        get() = RunToPosition(motor, // MOTOR TO MOVE
            0.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this) // IMPLEMENTED SUBSYSTEM
```

== Java

In Java, the best way to create commands is by making methods that return instances of command classes:

```java
public Command toLow() {
    return new RunToPosition(motor, // MOTOR TO MOVE
            0.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this); // IMPLEMENTED SUBSYSTEM
}
```

:::

Note the last parameter: `subsystem`. This is what tells NextFTC which commands should be allowed to run at the same time. If it weren't set, `toLow` would be able to run at the same time as other commands that use the `Lift` subsystem -- so there would be multiple things fighting to set the motor's power. Generally, you just need to pass `this` as the subsystem -- there are exceptions with more complicated custom commands.

Pretty easy, right? Let's duplicate it and update our variable name and target position to create our other two commands:

:::tabs key:code
== Kotlin

```kotlin
val toMiddle: Command
        get() = RunToPosition(motor, // MOTOR TO MOVE
            500.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this) // IMPLEMENTED SUBSYSTEM

val toHigh: Command
    get() = RunToPosition(motor, // MOTOR TO MOVE
        1200.0, // TARGET POSITION, IN TICKS
        controller, // CONTROLLER TO IMPLEMENT
        this) // IMPLEMENTED SUBSYSTEM
```

== Java

```java
public Command toMiddle() {
    return new RunToPosition(motor, // MOTOR TO MOVE
            500.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this); // IMPLEMENTED SUBSYSTEM
}

public Command toHigh() {
    return new RunToPosition(motor, // MOTOR TO MOVE
            1200.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this); // IMPLEMENTED SUBSYSTEM
}
```

:::

## Final result

That's it! You've created your first Subsystem! Here is the final result:

:::tabs key:code
== Kotlin

```kotlin
object Lift: Subsystem() {
    lateinit var motor: MotorEx

    val controller = PIDController(PIDCoefficients(0.005, 0.0, 0.0))

    val name = "lift_motor"

    val toLow: Command
        get() = RunToPosition(motor, // MOTOR TO MOVE
            0.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this) // IMPLEMENTED SUBSYSTEM

    val toMiddle: Command
        get() = RunToPosition(motor, // MOTOR TO MOVE
            500.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this) // IMPLEMENTED SUBSYSTEM

    val toHigh: Command
        get() = RunToPosition(motor, // MOTOR TO MOVE
            1200.0, // TARGET POSITION, IN TICKS
            controller, // CONTROLLER TO IMPLEMENT
            this) // IMPLEMENTED SUBSYSTEM

    override fun initialize() {
        motor = MotorEx(name)
    }
}
```

== Java

```java
public class Lift extends Subsystem {
    // BOILERPLATE
    public static final Lift INSTANCE = new Lift();
    private Lift() { }

    // USER CODE
    public MotorEx motor;

    public PIDController controller = new PIDController(new PIDCoefficients(0.005, 0.0, 0.0));

    public String name = "lift_motor";

    public Command toLow() {
        return new RunToPosition(motor, // MOTOR TO MOVE
                0.0, // TARGET POSITION, IN TICKS
                controller, // CONTROLLER TO IMPLEMENT
                this); // IMPLEMENTED SUBSYSTEM
    }

    public Command toMiddle() {
        return new RunToPosition(motor, // MOTOR TO MOVE
                500.0, // TARGET POSITION, IN TICKS
                controller, // CONTROLLER TO IMPLEMENT
                this); // IMPLEMENTED SUBSYSTEM
    }

    public Command toHigh() {
        return new RunToPosition(motor, // MOTOR TO MOVE
                1200.0, // TARGET POSITION, IN TICKS
                controller, // CONTROLLER TO IMPLEMENT
                this); // IMPLEMENTED SUBSYSTEM
    }

    @Override
    public void initialize() {
        motor = new MotorEx(name);
    }
}
```

:::
