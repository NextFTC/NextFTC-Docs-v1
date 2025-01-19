# Claw Subsystem

Another common subsystem in FTC is a claw. Generally, a claw is powered by one servo, generally with an `open` and a `closed` position.

This guide assumes you have already read the [Lift Subsystem](/user-guide/subsystems/lift) guide. Let's get started!

## Step 1: Create your class

Just like with the Lift Subsystem, we need to start by creating our class.

:::tabs key:code
== Kotlin

```kotlin
object Claw: Subsystem() {

}
```

== Java

Remember the boilerplate!

```java
public class Claw extends Subsystem {
    // BOILERPLATE
    public static final Claw INSTANCE = new Claw();
    private Claw() { }

    // USER CODE

}
```

:::

## Step 2: Create your servo

Now, since we're using a servo, instead of a motor, let's create a servo variable. Currently, there is no wrapper class for Servos, so you will be using the Qualcomm servo class.

:::tabs key:code
== Kotlin
Just like our motor variable from the lift subystem, it needs to be a `lateinit` variable:

```kotlin
lateinit var servo: Servo
```

== Java
Just like our motor variable from the lift subystem, we can't initialize it right away:

```java
public Servo servo;
```

:::

Just like our motors, we also need a name for our servo. This is the name specified in the `hardwareMap`. I called mine `claw_servo`:

:::tabs key:code
== Kotlin

```kotlin
val name = "claw_servo"
```

== Java

```java
public String name = "claw_servo";
```

:::

Finally, we need to initialize our servo in the `initialize()` function. Because there is no wrapper class, you will need to access the `hardwareMap` yourself. NextFTC will automatically set the `hardwareMap` in each of your OpModes (as long as you extend `NextFTCOpMode` or `PedroOpMode`).

:::tabs key:code
== Kotlin

The easiest way to access the `hardwareMap` is by using `OpModeData.hardwareMap`:

```kotlin
override fun initialize() {
    servo = OpModeData.hardwareMap.get(Servo::class.java, name)
}
```

== Java
The easiest way to access the `hardwareMap` is by using `OpModeData.INSTANCE.getHardwareMap()`:

```java
@Override
public void initialize() {
    servo = OpModeData.INSTANCE.getHardwareMap().get(Servo.class, name);
}
```

:::

To recap how you create servo-based Subsystems in NextFTC:

-   Create a variable to store your Servo instance
-   Create a variable to store the name
-   In `initialize()`, get the Servo instance from the hardwareMap using your name variable.

## Step 3: Create commands

Programming servo commands is very easy in NextFTC.

> [!TIP]
> It's recommended to create a variable to store each servo position. However, that takes up more space, so I won't be doing that here.

For servos, the command you will be using is `ServoToPosition`. You will pass your servo, a target position, and your subsystem (just like the lift).

:::tabs key:code
== Kotlin

Just like your lift, you will be creating properties that return instances of Commands:

```kotlin
val open: Command
    get() = ServoToPosition(servo, // SERVO TO MOVE
        0.1, // POSITION TO MOVE TO
        this)  // IMPLEMENTED SUBSYSTEM
```

== Java
Just like your lift, you will be creating methods that return instance of commands:

```java
public Command open() {
    return new ServoToPosition(servo, // SERVO TO MOVE
            0.9, // POSITION TO MOVE TO
            this); // IMPLEMENTED SUBSYSTEM
}
```

:::

Nice! Let's do the same with the `close` command:

:::tabs key:code
== Kotlin

```kotlin
val close: Command
    get() = ServoToPosition(servo, // SERVO TO MOVE
        0.2, // POSITION TO MOVE TO
        this) // IMPLEMENTED SUBSYSTEM
```

== Java

```java
public Command close() {
    return new ServoToPosition(servo, // SERVO TO MOVE
            0.2, // POSITION TO MOVE TO
            this); // IMPLEMENTED SUBSYSTEM
}
```

:::

## Final result

You've successfully created your claw subsystem! Here's the final result:

:::tabs key:code
== Kotlin

```kotlin
object Claw: Subsystem() {
    lateinit var servo: Servo

    val name = "claw_servo"

    val open: Command
        get() = ServoToPosition(servo, // SERVO TO MOVE
            0.9, // POSITION TO MOVE TO
            this)  // IMPLEMENTED SUBSYSTEM

    val close: Command
        get() = ServoToPosition(servo, // SERVO TO MOVE
            0.2, // POSITION TO MOVE TO
            this) // IMPLEMENTED SUBSYSTEM

    override fun initialize() {
        servo = OpModeData.hardwareMap.get(Servo::class.java, name)
    }
}
```

== Java

```java
public class Claw extends Subsystem {
    // BOILERPLATE
    public static final Claw INSTANCE = new Claw();
    private Claw() { }

    // USER CODE
    public Servo servo;

    public String name = "claw_servo";

    public Command open() {
        return new ServoToPosition(servo, // SERVO TO MOVE
                0.9, // POSITION TO MOVE TO
                this); // IMPLEMENTED SUBSYSTEM
    }

    public Command close() {
        return new ServoToPosition(servo, // SERVO TO MOVE
                0.2, // POSITION TO MOVE TO
                this); // IMPLEMENTED SUBSYSTEM
    }

    @Override
    public void initialize() {
        servo = OpModeData.INSTANCE.getHardwareMap().get(Servo.class, name);
    }
}
```

:::
