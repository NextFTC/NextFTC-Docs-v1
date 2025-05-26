# Holonomic Drivetrain

> [!IMPORTANT]
> This page outlines how to use the mecanum drivetrain command to control your robot in TeleOp. Even though it has mecanum in the name, it works for x-drives as well.

> [!TIP] INFO
> Any holonomic drive can be controlled in one of two ways: **robot centric** or **field centric**.
>
> Robot-centric assumes that each push of the joystick is in relation to the local position of the robot—this means that whenever the user pushes the drive stick forward, the robot will drive in the direction of its front-facing side.
>
> Field-centric assumes that each push of the joystick is in relation to the global position of the robot—this means that whenever the user pushes the drive stick forward, the robot will move away from the driver no matter its orientation. This is done by rotating the direction of the joystick clockwise by an angle measurement equivalent to the global heading of the robot.

## Usage

First, you need to create your motors. Let's create variables for their names:
:::tabs key:code
== Kotlin

```kotlin
val frontLeftName = "front_left"
val frontRightName = "front_right"
val backLeftName = "back_left"
val backRightName = "back_right"
```

== Java

```java
public String frontLeftName = "front_left";
public String frontRightName = "front_right";
public String backLeftName = "back_left";
public String backRightName = "back_right";
```

:::

Next, we'll create variables for the motors and an array of the motors:
:::tabs key:code
== Kotlin

```kotlin
lateinit var frontLeftMotor: MotorEx
lateinit var frontRightMotor: MotorEx
lateinit var backLeftMotor: MotorEx
lateinit var backRightMotor: MotorEx

lateinit var motors: Array<MotorEx>
```

== Java

```java
public MotorEx frontLeftMotor;
public MotorEx frontRightMotor;
public MotorEx backLeftMotor;
public MotorEx backRightMotor;

public MotorEx[] motors;
```

:::

Then, we'll create a variable for the imu. **Only do this if you are using field centric driving.**

:::tabs key:code
== Kotlin

```kotlin
lateinit var imu: IMU
```

== Java

```java
public IMU imu;
```

:::

Lastly, we'll create a variable for the command:

:::tabs key:code
== Kotlin

```kotlin
lateinit var driverControlled: Command
```

== Java

```java
public Command driverControlled;
```

:::

Now, in the `onInit()` function, we will initialize all our variables:

:::tabs key:code
== Kotlin

```kotlin
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

// Only include this if you are using field centric. If using, change your control hub orientation to suit your robot.
imu = hardwareMap.get(IMU::class.java, "imu")
imu.initialize(IMU.Parameters(RevHubOrientationOnRobot(
    RevHubOrientationOnRobot.LogoFacingDirection.UP,
    RevHubOrientationOnRobot.UsbFacingDirection.FORWARD)))
imu.resetYaw()
```

== Java

```java
frontLeftMotor = new MotorEx(frontLeftName);
backLeftMotor = new MotorEx(backLeftName);
backRightMotor = new MotorEx(backRightName);
frontRightMotor = new MotorEx(frontRightName);

// Change your motor directions to suit your robot.
frontLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
backLeftMotor.setDirection(DcMotorSimple.Direction.REVERSE);
frontRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);
backRightMotor.setDirection(DcMotorSimple.Direction.FORWARD);

motors = new MotorEx[] { frontLeftMotor, frontRightMotor, backLeftMotor, backRightMotor };

// Only include this if you are using field centric. If using, change your control hub orientation to suit your robot.
imu = hardwareMap.get(IMU::class, "imu");
imu.initialize(new IMU.Parameters(new RevHubOrientationOnRobot(
    RevHubOrientationOnRobot.LogoFacingDirection.UP,
    RevHubOrientationOnRobot.UsbFacingDirection.FORWARD)));
imu.resetYaw();
```

:::

Lastly, in `onStartButtonPressed()`, we will create and schedule our command.

You can run it robot centric:

:::tabs key:code
== Kotlin

```kotlin
driverControlled = MecanumDriverControlled(motors, gamepadManager.gamepad1)
driverControlled()
```

== Java

```java
driverControlled = new MecanumDriverControlled(motors, gamepadManager.getGamepad1());
driverControlled.invoke();
```

:::

Or field centric:

:::tabs key:code
== Kotlin

```kotlin
driverControlled = MecanumDriverControlled(motors, gamepadManager.gamepad1, false, imu)
driverControlled()
```

== Java

```java
driverControlled = new MecanumDriverControlled(motors, gamepadManager.getGamepad1(), false, imu);
driverControlled.invoke();
```

:::

That's it! Now you are able to control your holonomic drivetrain using a gamepad.