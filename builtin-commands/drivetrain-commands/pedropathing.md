# PedroPathing Drivetrain

> [!IMPORTANT]
> This page outlines how to use the PedroPathing drivetrain command to control your robot in TeleOp using PedroPathing's centripetal force correction.

> [!TIP] INFO
> Any holonomic drive can be controlled in one of two ways: **robot centric** or **field centric**.
>
> Robot-centric assumes that each push of the joystick is in relation to the local position of the robot—this means that whenever the user pushes the drive stick forward, the robot will drive in the direction of its front-facing side.
>
> Field-centric assumes that each push of the joystick is in relation to the global position of the robot—this means that whenever the user pushes the drive stick forward, the robot will move away from the driver no matter its orientation. This is done by rotating the direction of the joystick clockwise by an angle measurement equivalent to the global heading of the robot.

## Usage

Running the PedroPathing drivetrain command is quite simple. All you have to do is put the following code in the `onStartButtonPressed()` function.

You can run it robot centric:

:::tabs key:code
== Kotlin

```kotlin
CommandManager.addCommand(DriverControlled(gamepadManager.gamepad1, true))
```

== Java

```java
CommandManager.INSTANCE.addCommand(new DriverControlled(gamepadManager.gamepad1, true));
```

:::

Or field centric:

:::tabs key:code
== Kotlin

```kotlin
CommandManager.addCommand(DriverControlled(gamepadManager.gamepad1, false))
```

== Java

```java
CommandManager.INSTANCE.addCommand(new DriverControlled(gamepadManager.gamepad1, false));
```

:::

> [!NOTE]
> See the [`DriverControlled` reference](https://docs.rowanmcalpin.com/reference/pedro/com.rowanmcalpin.nextftc.pedro/-driver-controlled/) for constructor overloads and more.
