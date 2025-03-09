# TeleOp

Creating a TeleOp in NextFTC is just as easy as autonomous! This page will walk you through creating a TeleOp. This page assumes you have already read the [Autonomous](./autonomous.md) guide.

This TeleOp program will teach you how to bind commands to gamepad buttons and control your drivetrain using NextFTC.

## Step 1: Create your class

Just like for autonomous, your OpMode will extend either `NextFTCOpMode` or `PedroOpMode`. However unlike autonomous, this page will cover both.

> [!NOTE]
> The main thing PedroPathing is used for in TeleOp is centripetal force correction while driving, which prevents your robot from "bulging" out while turning.
> **It is completely a matter of preference whether or not to use it.**
> If you are not using PedroPathing in your TeleOp, you do not need to extend `PedroOpMode`, even if you have PedroPathing in your project.

With that in mind, here is the basic structure for a TeleOp:

::: tabs key:code

== Kotlin

```kotlin [TeleOpProgram.kt]
@TeleOp(name = "NextFTC TeleOp Program Kotlin")
class TeleOpProgram: NextFTCOpMode() {

}
```

== Java

```java [TeleOpProgram.java]
@TeleOp(name = "NextFTC TeleOp Program Java")
class TeleOpProgram extends NextFTCOpMode {

}
```

:::

Don't forget to replace `NextFTCOpMode` with `PedroOpMode` if you want to use PedroPathing.

Just like for autonomous, we need to add the required subsystems into the constructor of our OpMode:

:::tabs key:code

== Kotlin

```kotlin
class TeleOpProgram: NextFTCOpMode(Claw, Lift) {
```

== Java

```java
public TeleOpProgram() {
    super(Claw.INSTANCE, Lift.INSTANCE);
}
```

:::

That's all! Now we will allow the joysticks to control our robot's driving.

## Step 2: Create your drive command

NextFTC has built in commands for common drivetrains.

> [!IMPORTANT]
> Currently, NextFTC only has support for mecanum, x-drive, and differential (tank) drivetrains. If you write a command for another, please share it with us!

Go to the [drivetrain commands](/builtin-commands/drivetrain-commands) page to get the code for your drivetrain. In this guide I will be using the `MecanumDriverControlled` command. If you are using a different drivetrain command, follow the instructions there to get it set up and then come back to this guide.

After adding the `MecanumDriverControlled` command, here is our code:

:::tabs key:code
== Kotlin

```kotlin
@TeleOp(name = "NextFTC TeleOp Program Kotlin")
class TeleOpProgram: NextFTCOpMode(Claw, Lift) {

    // Change the motor names to suit your robot.
    val frontLeftName = "front_left"
    val frontRightName = "front_right"
    val backLeftName = "back_left"
    val backRightName = "back_right"

    lateinit var frontLeftMotor: MotorEx
    lateinit var frontRightMotor: MotorEx
    lateinit var backLeftMotor: MotorEx
    lateinit var backRightMotor: MotorEx

    lateinit var motors: Array<MotorEx>

    lateinit var driverControlled: Command

    override fun onInit() {
        frontLeftMotor = MotorEx(frontLeftName)
        backLeftMotor = MotorEx(backLeftName)
        backRightMotor = MotorEx(backRightName)
        frontRightMotor = MotorEx(frontRightName)

        // Change the motor directions to suit your robot.
        frontLeftMotor.direction = DcMotorSimple.Direction.REVERSE
        backLeftMotor.direction = DcMotorSimple.Direction.REVERSE
        frontRightMotor.direction = DcMotorSimple.Direction.FORWARD
        backRightMotor.direction = DcMotorSimple.Direction.FORWARD

        motors = arrayOf(frontLeftMotor, frontRightMotor, backLeftMotor, backRightMotor)
    }

    override fun onStartButtonPressed() {
        driverControlled = MecanumDriverControlled(motors, gamepadManager.gamepad1)
        driverControlled()
    }
}
```

== Java

```java
@TeleOp(name = "NextFTC TeleOp Program Java")
class TeleOpProgram extends NextFTCOpMode {

    public TeleOpProgram() {
        super(Claw.INSTANCE, Lift.INSTANCE);
    }

    // Change the motor names to suit your robot.
    public String frontLeftName = "front_left";
    public String frontRightName = "front_right";
    public String backLeftName = "back_left";
    public String backRightName = "back_right";

    public MotorEx frontLeftMotor;
    public MotorEx frontRightMotor;
    public MotorEx backLeftMotor;
    public MotorEx backRightMotor;

    public MotorEx[] motors;

    public Command driverControlled;

    @Override
    public void onInit() {
        frontLeftMotor = new MotorEx(frontLeftName);
        backLeftMotor = new MotorEx(backLeftName);
        backRightMotor = new MotorEx(backRightName);
        frontRightMotor = new MotorEx(frontRightName);

        // Change the motor directions to suit your robot.
        frontLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        backLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        frontRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);
        backRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);

        motors = new MotorEx[] {frontLeftMotor, frontRightMotor, backLeftMotor, backRightMotor};
    }

    @Override
    public void onStartButtonPressed() {
        driverControlled = new MecanumDriverControlled(motors, gamepadManager.getGamepad1());
        driverControlled.invoke();
    }
}
```

:::

## Step 3: Create your gamepad bindings

In the last guide you learned how to schedule a command when the OpMode starts. Now you will learn how to schedule a command whenever the driver presses a button.

In this guide, we will have the following buttons, all on gamepad 2:

-   Pressing d-pad up moves the lift up.
-   Releasing d-pad up opens the claw.
-   Pressing the right trigger closes the claw _and then_ moves the lift up.
-   Pressing the left bumper opens the claw _and at the same time_ moves the lift down.

> [!NOTE]
> It is unlikely that these commands will be useful for any real robot, but it will give you an idea of how you can achieve practically any gamepad bindings possible with NextFTC.

> [!TIP]
> It is best to have the most commonly used functions activated by bumpers and triggers. This is because to press any other button, your thumb must move, while no finger has to move to press the bumpers and triggers.

To bind commands to buttons, we will use `gamepadManager`. You can access `gamepadManager` in any `NextFTCOpMode` or `PedroOpMode`. Instead of using the Qualcomm gamepads, you interact with an instance of `GamepadEx`, which is a wrapper over gamepads.

:::tabs key:code
== Kotlin

You can access the gamepads with `gamepadManager.gamepad1` and `gamepadManager.gamepad2`.

Accessing buttons is simple; for example, `gamepadManager.gamepad1.x` or `gamepadManager.gamepad2.dpadUp`.

There are four types of bindings you can give a button:

-   `pressedCommand` is called on the rising edge. That is, the first loop when the button is pressed.
-   `heldCommand` is called every loop where the button is pressed.
-   `releasedCommand` is called on the falling edge. That is, the first loop when the button is not pressed.
-   `stateChangedCommand` is called on both the rising edge and the falling edge.

To set a command, you set one of those four bindings to a lambda that returns the command. For example:

```kotlin
gamepadManager.gamepad1.x.pressedCommand = { Claw.open }
```

== Java

You can access the gamepads with `gamepadManager.getGamepad1()` and `gamepadManager.getGamepad2()`.

Accessing buttons is simple; for example, `gamepadManager.getGamepad1().getX()` or `gamepadManager.getGamepad2().getDpadUp()`.

-   `pressedCommand` is called on the rising edge. That is, the first loop when the button is pressed.
-   `heldCommand` is called every loop where the button is pressed.
-   `releasedCommand` is called on the falling edge. That is, the first loop when the button is not pressed.
-   `stateChangedCommand` is called on both the rising edge and the falling edge.

To set a command, you set one of those four bindings to the method that returns the command. For example:

```java
gamepadManager.getGamepad1().x().setPressedCommand(Claw.INSTANCE::open);
```

:::

We will bind our commands in `onStartButtonPressed()`. If we wanted them accessible in init, we would do it in `onInit()`.

> [!CAUTION]
> Although it is possible to bind the commands in init, keep in mind that your robot is not allowed to move during the transition from autonomous to TeleOp. There is almost never a time you would want to use the gamepads during init.

First, we will make d-pad up move the lift up when pressed:

:::tabs key:code
== Kotlin

```kotlin
gamepadManager.gamepad2.dpadUp.pressedCommand = { Lift.toHigh }
```

== Java

```java
gamepadManager.getGamepad2().getDpadUp().setPressedCommand(Lift.INSTANCE::toHigh);
```

:::

Next, we will make it so releasing d-pad up opens the claw:

:::tabs key:code
== Kotlin

```kotlin
gamepadManager.gamepad2.dpadUp.releasedCommand = { Claw.open }
```

== Java

```java
gamepadManager.getGamepad2().getDpadUp().setReleasedCommand(Claw.INSTANCE::open);
```

:::

> [!NOTE]
> If d-pad up is released before the lift has fully finished moving up, then the claw will open while the lift is moving up.

Now, we must make the right trigger close the claw _and then_ move the lift up. To do this, we can use a `SequentialGroup`!

:::tabs key:code
== Kotlin

```kotlin
gamepadManager.gamepad2.rightTrigger.pressedCommand = {
    SequentialGroup(
        Claw.close,
        Lift.toHigh
    )
 }
```

== Java

```java
gamepadManager.getGamepad2().getRightTrigger().setPressedCommand(
    value -> new SequentialGroup(
        Claw.INSTANCE.close(),
        Lift.INSTANCE.toHigh()
    )
);
```

> [!NOTE]
> When binding commands to triggers, we get a `value` parameter that tells us the value of the trigger. In this case, we aren't using it.

:::

Lastly, we must make the left bumper open the claw _and at the same time_ move the lift down. We can use a `ParallelGroup` for this!

:::tabs key:code
== Kotlin

```kotlin
gamepadManager.gamepad2.leftBumper.pressedCommand = {
    ParallelGroup(
        Claw.open,
        Lift.toLow
    )
}
```

== Java

```java
gamepadManager.getGamepad2().getLeftBumper().setPressedCommand(
    () -> new ParallelGroup(
        Claw.INSTANCE.open(),
        Lift.INSTANCE.toLow()
    )
);
```

:::

## Final Result

That's all! You now have created a TeleOp program with driving and operating the lift and claw. You also now know how to create any TeleOp you wish, even if it has complicated sequences.

For reference, here is the final result:

:::tabs key:code
== Kotlin

```kotlin
@TeleOp(name = "NextFTC TeleOp Program Kotlin")
class TeleOpProgram: NextFTCOpMode(Claw, Lift) {

    val frontLeftName = "front_left"
    val frontRightName = "front_right"
    val backLeftName = "back_left"
    val backRightName = "back_right"

    lateinit var frontLeftMotor: MotorEx
    lateinit var frontRightMotor: MotorEx
    lateinit var backLeftMotor: MotorEx
    lateinit var backRightMotor: MotorEx

    lateinit var motors: Array<MotorEx>

    lateinit var driverControlled: Command

    override fun onInit() {
        frontLeftMotor = MotorEx(frontLeftName)
        backLeftMotor = MotorEx(backLeftName)
        backRightMotor = MotorEx(backRightName)
        frontRightMotor = MotorEx(frontRightName)

        // Change your motor directions to suit your robot.
        frontLeftMotor.direction = DcMotorSimple.Direction.REVERSE
        backLeftMotor.direction = DcMotorSimple.Direction.REVERSE
        frontRightMotor.direction = DcMotorSimple.Direction.FORWARD
        backRightMotor.direction = DcMotorSimple.Direction.FORWARD

        motors = arrayOf(frontLeftMotor, frontRightMotor, backLeftMotor, backRightMotor)
    }

    override fun onStartButtonPressed() {
        driverControlled = MecanumDriverControlled(motors, gamepadManager.gamepad1)
        driverControlled()

        gamepadManager.gamepad2.dpadUp.pressedCommand = { Lift.toHigh }

        gamepadManager.gamepad2.dpadUp.releasedCommand = { Claw.open }

        gamepadManager.gamepad2.rightTrigger.pressedCommand = {
            SequentialGroup(
                Claw.close,
                Lift.toHigh
            )
        }

        gamepadManager.gamepad2.leftBumper.pressedCommand = {
            ParallelGroup(
                Claw.open,
                Lift.toLow
            )
        }
    }
}
```

== Java

```java
@TeleOp(name = "NextFTC TeleOp Program Java")
class TeleOpProgram extends NextFTCOpMode {

    public TeleOpProgram() {
        super(Claw.INSTANCE, Lift.INSTANCE);
    }

    public String frontLeftName = "front_left";
    public String frontRightName = "front_right";
    public String backLeftName = "back_left";
    public String backRightName = "back_right";

    public MotorEx frontLeftMotor;
    public MotorEx frontRightMotor;
    public MotorEx backLeftMotor;
    public MotorEx backRightMotor;

    public MotorEx[] motors;

    public Command driverControlled;

    @Override
    public void onInit() {
        frontLeftMotor = new MotorEx(frontLeftName);
        backLeftMotor = new MotorEx(backLeftName);
        backRightMotor = new MotorEx(backRightName);
        frontRightMotor = new MotorEx(frontRightName);

        // Change your motor directions to suit your robot.
        frontLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        backLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
        frontRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);
        backRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);

        motors = new MotorEx[] {frontLeftMotor, frontRightMotor, backLeftMotor, backRightMotor};
    }
    @Override
    public void onStartButtonPressed() {
        driverControlled = new MecanumDriverControlled(motors, gamepadManager.getGamepad1());
        driverControlled.invoke();

        gamepadManager.getGamepad2().getDpadUp().setPressedCommand(Lift.INSTANCE::toHigh);

        gamepadManager.getGamepad2().getDpadUp().setReleasedCommand(Claw.INSTANCE::open);

        gamepadManager.getGamepad2().getRightTrigger().setPressedCommand(
            value -> new SequentialGroup(
                Claw.INSTANCE.close(),
                Lift.INSTANCE.toHigh()
            )
        );

        gamepadManager.getGamepad2().getLeftBumper().setPressedCommand(
                () -> new ParallelGroup(
                        Claw.INSTANCE.open(),
                        Lift.INSTANCE.toLow()
                )
        );
    }
}
```

:::
