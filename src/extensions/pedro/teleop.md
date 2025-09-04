# TeleOp Driving

> [!IMPORTANT]
> This page outlines how to use the Pedro drivetrain command to control your
> robot in TeleOp. It uses Pedro's built-in TeleOp driving feature to
> control a holonomic drivetrain with centripetal force correction.

> [!TIP] INFO
> Any holonomic drive can be controlled in one of two ways: robot centric or
> field centric.
>
> Robot-centric assumes that each push of the joystick is in relation to the
> local position of the robot—this means that whenever the user pushes the drive
> stick forward, the robot will drive in the direction of its front-facing side.
>
> Field-centric assumes that each push of the joystick is in relation to the
> global position of the robot—this means that whenever the user pushes the
> drive stick forward, the robot will move away from the driver no matter its
> orientation. This is done by rotating the direction of the joystick clockwise by
> an angle measurement equivalent to the global heading of the robot.

## Usage

Using `PedroDriverControlled` is as simple as:

:::tabs key:code

== Kotlin

```kotlin
val driverControlled = PedroDriverControlled(
    Gamepads.gamepad1.leftStickY,
    Gamepads.gamepad1.leftStickX,
    Gamepads.gamepad1.rightStickX
)
driverControlled()
```

== Java

```java
DriverControlledCommand driverControlled = new PedroDriverControlled(
    Gamepads.gamepad1().leftStickY(),
    Gamepads.gamepad1().leftStickX(),
    Gamepads.gamepad1().rightStickX()
);
driverControlled.schedule();
```

:::

You can also run it field-centric by passing `false` for the optional `robotCentric`
parameter:

:::tabs key:code

== Kotlin

```kotlin
val driverControlled = PedroDriverControlled(
    Gamepads.gamepad1.leftStickY,
    Gamepads.gamepad1.leftStickX,
    Gamepads.gamepad1.rightStickX,
    false
)
driverControlled()
```

== Java

```java
DriverControlledCommand driverControlled = new PedroDriverControlled(
    Gamepads.gamepad1().leftStickY(),
    Gamepads.gamepad1().leftStickX(),
    Gamepads.gamepad1().rightStickX(),
    false
);
driverControlled.schedule();
```

:::