# Drivetrain Commands

> [!NOTE]
> Some of the content on the following pages was taken with permission from the [FTCLib Drivebases page](https://docs.ftclib.org/ftclib/features/drivebases).

> [!IMPORTANT]
> Currently, NextFTC only has support for mecanum, x-drive, and differential (tank) drivetrains. If you write a command for another, please share it with us!

NextFTC has commands to control different types of drivetrains. This page goes through the different options for controlling your drivetrain in TeleOp.

## Holonomic Drivetrains

A holonomic drive is one that can move in omnidirectional space, which is why it is often called an omnidirectional drive. There are different sub-types of holonomic drivetrains. Currently NextFTC only has support for mecanum drives and x-drives.

An X-drive is a holonomic base that has four omniwheels positioned into an "X" shape.

:::details X-Drive

<figure>
  <img src="/images/x-drive.avif" alt="An X-Drive concept from VEX">
  <figcaption style="text-align:center;font-style:italic">An X-Drive concept from VEX
</figcaption>
</figure>
:::

A mecanum drivetrain is a type of holonomic drive that utilizes [mecanum wheels](https://en.wikipedia.org/wiki/Mecanum_wheel) for movement.

:::details Mecanum Drive

<figure>
  <img src="/images/mecanum-drive.png" alt="A custom parallel plate mecanum drivetrain">
  <figcaption style="text-align:center;font-style:italic">A custom parallel plate mecanum drivetrain</figcaption>
</figure>
:::

With a holonomic drivetrain, you can control it either with or without PedroPathing. Using PedroPathing has built-in centripetal force correction, and is a matter of personal preference whether or not to use.

To control a holonomic drivetrain in TeleOp, see one of the following pages:

-   [PedroPathing Drivetrain](/builtin-commands/drivetrain-commands/pedropathing)
-   [Holonomic Drivetrain](/builtin-commands/drivetrain-commands/holonomic)

## Differential (Tank) Drivetrains

A differential drivetrain is one that has two motors or motor groups on either side of the robot. Each side acts as a connected set or motor group.

:::details Differential Drive

<figure>
  <img src="/images/differential-drive.jpg" alt="CAD by Hrithik and Sanjay from FTC Team 16439">
  <figcaption style="text-align:center;font-style:italic">CAD by Hrithik and Sanjay from FTC Team 16439</figcaption>
</figure>
:::

To control a differential drivetrain in TeleOp, see the following page:

-   [Differential Drivetrain](/builtin-commands/drivetrain-commands/differential)
