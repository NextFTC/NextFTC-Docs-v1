# Control

NextControl is our robust control library that uses the "Four Elements"
of control systems to model actuated systems.

Some examples are featured in the [examples folder](/control/examples], 
and all components have thorough javadoc/kdoc documentation.

## The Four Elements
These four elements make up a Control System. Not all are required, of course.
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
  setpoint changes. 
  For example, a trapezoidal motion profile or a moving-average setpoint filter.


The control system calculation process involves:
1. Filtering sensor measurements
2. Obtaining the current reference from the interpolator
3. Calculating feedback component based on error
4. Calculating feedforward component based on reference
5. Returning the sum of feedback and feedforward

