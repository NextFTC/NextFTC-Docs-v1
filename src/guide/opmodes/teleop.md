# TeleOp

Creating a TeleOp in NextFTC is just as easy as autonomous! This page will walk you through creating a TeleOp. This page
assumes you have already read the [Autonomous](autonomous.md) guide.

This TeleOp program will teach you how to bind commands to gamepad buttons and control your drivetrain using NextFTC.

## Step 1: Create your OpMode

Just like for autonomous, your OpMode will extend either `NextFTCOpMode`.
With that in mind, here is the basic structure for a TeleOp:

::: tabs key:code

== Kotlin

```kotlin [TeleOpProgram.kt]
@TeleOp(name = "NextFTC TeleOp Program Kotlin")
class TeleOpProgram : NextFTCOpMode() {

}
```

== Java

```java [TeleOpProgram.java]
@TeleOp(name = "NextFTC TeleOp Program Java")
public class TeleOpProgram extends NextFTCOpMode {

}
```

:::

Just like for autonomous, we need to add the required subsystems as a `SubsystemComponent`. We will also add a
`BulkReadComponent`. Additionally, we will add a `BindingsComponent`, which allows us to use gamepads
from [NextBindings](/bindings).

:::tabs key:code

== Kotlin

```kotlin
class TeleOpProgram : NextFTCOpMode() {
    init {
        addComponents(
            SubsystemComponent(Lift, Claw),
            BulkReadComponent(),
            BindingsComponent()
        )
    }
}
```

== Java

```java
public class TeleOpProgram extends NextFTCOpMode {
    {
        addComponents(
            new SubsystemComponent(Lift.INSTANCE, Claw.INSTANCE),
            new BulkReadComponent(),
            new BindingsComponent()
        );
    }
}
```

:::

That's all! Now we will allow the joysticks to control our robot's driving.

## Step 2: Create your drive command

NextFTC has built in commands for common drivetrains.

> [!IMPORTANT]
> Currently, NextFTC only has support for mecanum, x-drive, and differential (tank) drivetrains. If you write a command
> for another, please share it with us!

Go to the [drivetrain commands](/nextftc/hardware/drivetrain-commands) page to get the code for your
drivetrain. In this guide we will be using the `MecanumDriverControlled` command. If you are using a different
drivetrain
command, follow the instructions there to get it set up and then come back to this guide.

After adding the `MecanumDriverControlled` command, here is our code:

:::tabs key:code
== Kotlin

```kotlin
// change the names and directions to suit your robot
private val frontLeftMotor = MotorEx("front_left").reversed()
private val frontRightMotor = MotorEx("front_right")
private val backLeftMotor = MotorEx("back_left").reversed()
private val backRightMotor = MotorEx("back_right")

override fun onStartButtonPressed() {
    val driverControlled = MecanumDriverControlled(
        frontLeftMotor,
        frontRightMotor,
        backLeftMotor,
        backRightMotor,
        { gamepad1.left_stick_y },
        { gamepad1.left_stick_x },
        { gamepad1.right_stick_x }  
    )
    driverControlled()
}
```

== Java

```java
// change the names and directions to suit your robot
private final MotorEx frontLeftMotor = new MotorEx("front_left").reversed();
private final MotorEx frontRightMotor = new MotorEx("front_right");
private final MotorEx backLeftMotor = new MotorEx("back_left").reversed();
private final MotorEx backRightMotor = new MotorEx("back_right");

@Override
public void onStartButtonPressed() {
    Command driverControlled = new MecanumDriverControlled(
        frontLeftMotor,
        frontRightMotor,
        backLeftMotor,
        backRightMotor,
        () -> gamepad1.left_stick_y,
        () -> gamepad1.left_stick_x,
        () -> gamepad1.right_stick_x
    );
    driverControlled.schedule();
}
```

:::

## Step 3: Create your gamepad bindings

In the last guide you learned how to schedule a command when the OpMode starts. Now you will learn how to schedule a
command whenever the driver presses a button. We will use [NextBindings](/bindings) to accomplish this.

In this guide, we will have the following buttons, all on gamepad 2:

- Pressing d-pad up moves the lift up.
- Releasing d-pad up opens the claw.
- Pressing the right trigger closes the claw _and then_ moves the lift up.
- Pressing the left bumper opens the claw _and at the same time_ moves the lift down.

> [!NOTE]
> It is unlikely that these commands will be useful for any real robot, but it will give you an idea of how you can
> achieve practically any gamepad bindings possible with NextBindings.

> [!TIP]
> It is best to have the most commonly used functions activated by bumpers and triggers. This is because to press any
> other button, your thumb must move, while no finger has to move to press the bumpers and triggers.

We will bind our commands in `onStartButtonPressed()`. If we wanted them accessible in init, we would do it in
`onInit()`.

> [!CAUTION]
> Although it is possible to bind the commands in init, keep in mind that your robot is not allowed to move during the
> transition from autonomous to TeleOp. There is almost never a time you would want to use the gamepads during init
> in TeleOp.

First, we will make d-pad up move the lift up when pressed:

:::tabs key:code
== Kotlin

```kotlin
whenButton { gamepad2.dpad_up } isPressed Lift.toHigh
```

== Java

```java
whenButton(() -> gamepad2.dpad_up).isPressed(Lift.INSTANCE.toHigh);
```

:::

Next, we will make it so releasing d-pad up opens the claw:

:::tabs key:code
== Kotlin

```kotlin
whenButton { gamepad2.dpad_up } isPressed Lift.toHigh isReleased Claw.open
```

== Java

```java
whenButton(() -> gamepad2.dpad_up)
    .isPressed(Lift.INSTANCE.toHigh)
    .isReleased(Claw.INSTANCE.open);
```

:::

> [!NOTE]
> If d-pad up is released before the lift has fully finished moving up, then the claw will open while the lift is moving
> up.

Now, we must make the right trigger close the claw _and then_ move the lift up. To do this, we can use a
`SequentialGroup`! We would like to schedule the command when the right trigger is greater than 0.2.

:::tabs key:code
== Kotlin

```kotlin
range { gamepad2.right_trigger } whenGreaterThan 0.2 isPressed SequentialGroup(
    Claw.INSTANCE.close,
    Lift.INSTANCE.toHigh
)

```

== Java

```java
range(() -> gamepad2.right_trigger).whenGreaterThan(0.2).isPressed(
    new SequentialGroup(
        Claw.INSTANCE.close,
        Lift.INSTANCE.toHigh
    )
);
```

:::

> [!NOTE]
> Notice that we're calling `isPressed`. Calling `whenGreaterThan` on a range converts it to a button!

Lastly, we must make the left bumper open the claw _and at the same time_ move the lift down. We can use a
`ParallelGroup` for this!

:::tabs key:code
== Kotlin

```kotlin
whenButton { gamepad2.left_bumper} isPressed ParallelGroup(
    Claw.open,
    Lift.toLow
)

```

== Java

```java
whenButton(() -> gamepad2.left_bumper).isPressed(
    new ParallelGroup(
        Claw.INSTANCE.open,
        Lift.INSTANCE.toLow
    )
);
```

:::

## Final Result

That's all! You now have created a TeleOp program with driving and operating the lift and claw. You also now know how to
create any TeleOp you wish, even if it has complicated sequences.

For reference, here is the final result:

:::tabs key:code
== Kotlin

```kotlin
@TeleOp(name = "NextFTC TeleOp Program Kotlin")
class TeleOpProgram : NextFTCOpMode() {
    init {
        addComponents(
            SubsystemComponent(Lift, Claw),
            BulkReadComponent(),
            BindingsComponent()
        )
    }

    // change the names and directions to suit your robot
    private val frontLeftMotor = MotorEx("front_left").reversed()
    private val frontRightMotor = MotorEx("front_right")
    private val backLeftMotor = MotorEx("back_left").reversed()
    private val backRightMotor = MotorEx("back_right")

    override fun onStartButtonPressed() {
        val driverControlled = MecanumDriverControlled(
            frontLeftMotor,
            frontRightMotor,
            backLeftMotor,
            backRightMotor,
            { gamepad1.left_stick_y },
            { gamepad1.left_stick_x },
            { gamepad1.right_stick_x }
        )
        driverControlled()

        whenButton { gamepad2.dpad_up } isPressed Lift.toHigh isReleased Claw.open
        range { gamepad2.right_trigger } whenGreaterThan 0.2 isPressed SequentialGroup(
            Claw.close,
            Lift.toHigh
        )
        whenButton { gamepad2.left_bumper } isPressed ParallelGroup(
            Claw.open,
            Lift.toLow
        )
    }
}
```

== Java

```java
@TeleOp(name = "NextFTC TeleOp Program Java")
public class TeleOpProgram extends NextFTCOpMode {
    {
        addComponents(
                new SubsystemComponent(Lift.INSTANCE, Claw.INSTANCE),
                new BulkReadComponent(),
                new BindingsComponent()
        );
    }

    // change the names and directions to suit your robot
    private final MotorEx frontLeftMotor = new MotorEx("front_left").reversed();
    private final MotorEx frontRightMotor = new MotorEx("front_right");
    private final MotorEx backLeftMotor = new MotorEx("back_left").reversed();
    private final MotorEx backRightMotor = new MotorEx("back_right");

    @Override
    public void onStartButtonPressed() {
        Command driverControlled = new MecanumDriverControlled(
                frontLeftMotor,
                frontRightMotor,
                backLeftMotor,
                backRightMotor,
                () -> gamepad1.left_stick_y,
                () -> gamepad1.left_stick_x,
                () -> gamepad1.right_stick_x
        );
        driverControlled.schedule();

        whenButton(() -> gamepad2.dpad_up)
                .isPressed(Lift.INSTANCE.toHigh)
                .isReleased(Claw.INSTANCE.open);
        range(() -> gamepad2.right_trigger).whenGreaterThan(0.2).isPressed(
                new SequentialGroup(
                        Claw.INSTANCE.close,
                        Lift.INSTANCE.toHigh
                )
        );
        whenButton(() -> gamepad2.left_bumper).isPressed(
                new ParallelGroup(
                        Claw.INSTANCE.open,
                        Lift.INSTANCE.toLow
                )
        );
    }
}
```

:::
