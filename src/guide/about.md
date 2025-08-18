# What is NextFTC?

NextFTC is two things:

- A collection of libraries designed to make programming for FTC easier
- Our flagship command-based library under the same name

This guide uses a few of our libraries to aid you in writing an FTC codebase.
The library-specific documentation for
each of our libraries is also on this site.

> [!TIP]
> To get the most out of this guide, try copying over the code yourself
> instead of copying and pasting.

## Libraries

[**NextFTC is our command-based framework.**](/nextftc)

- **Commands** are units of code that can be executed. They consist of several
  steps and can be grouped into command
  groups, allowing them to run sequentially or in parallel.
- **Subsystems** help you organize your code and prevent conflicts by ensuring
  that no two commands using the same
  subsystem run simultaneously.
- **Hardware** is our optional module that provides built-in, ready-to-use
  hardware commands for almost all of your
  hardware needs. It supports:
    - Motors
    - Servos
    - Continuous-Rotation Servos
    - Servos with feedback (like Axons)
    - So much more!

[**NextControl is our robust control library.**](/control)

- **Control systems** are the basis of NextControl. They consist of four "
  elements": feedback, feedforward, filter,
  and interpolator.
- **Feedback elements** provide feedback (closed-loop) control for your system.
  For example, PID Control, SquID
  Control, and
  Bang-Bang Control.
- **Feedforward elements** provide feedforward (open-loop) control. NextControl
  has three feedforward controllers:
  basic, elevator, and arm.
- **Filter elements** filter your sensor measurements to remove noise. Examples
  are low-pass filters and Kalman filters.
- **Interpolator elements** interpolate the setpoint in order to smooth out
  setpoint changes. For example, a
  trapezoidal motion profile or a moving-average setpoint filter.

[**NextBindings is our gamepad binding library.**](/bindings)

- **Buttons and Ranges** are the two building blocks of NextBindings.
- **Buttons** can be bound to in a multitude of ways, including rising and
  falling edges, toggles, and state changes.
- **Ranges** represent a numeric variable and can be used to create buttons on
  certain events, for example when it
  is greater than a certain number. Ranges can also be mapped.

[**Extensions: PedroPathing is our integration with PedroPathing**](/extensions/pedro)

- [**PedroPathing**](https://pedropathing.com) is an advanced reactive vector
  follower for FTC.
- **Follow paths** and `PathChains` with the `FollowPath` command.
- **Turn your robot** with the `Turn` and `TurnTo` commands.
- **Position-based timing** with `ProximityDelay` and `DisplacementDelay`.