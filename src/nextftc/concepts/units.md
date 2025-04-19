# Units

NextFTC has an immutable, type-safe units system that allows you to pass quantities in any unit. It also prevents you from mixing up units accidentally. NextFTC has three types of units: `Distance`, `Angle`, and `TimeSpan`. All units extend the `Quantity` abstract class.

## `Distance`

The first unit we'll look at is `Distance`. There are six units `Distance` accepts: millimeters, centimeters, meters, inches, feet, and yards. Internally it is stored in millimeters.

Creating a `Distance` is simple:

:::tabs key:code
== Kotlin

```kotlin
val millimeters: Distance = 1000.mm
val centimeters: Distance = 100.cm
val meters: Distance = 1.m

val inches: Distance = 36.inches
val feet: Distance = 3.ft
val yards: Distance = 1.yd
```

== Java

```java
Distance millimeters = Distance.fromMm(1000);
Distance centimeters = Distance.fromCm(100);
Distance meters = Distance.fromMeters(1);

Distance inches = Distance.fromIn(36);
Distance feet = Distance.fromFt(3);
Distance yards = Distance.fromYd(1);
```

:::

You can convert a distance back to a double in any unit:

:::tabs key:code
== Kotlin

```kotlin
val inch: Distance = 1.inch

val millimeters: Double = inch.inMm // 25.4
val centimeters: Double = inch.inCm // 2.54
val meters: Double = inch.inMeters // 0.0254

val meter: Distance = 1.m

val inches: Double = meter.inIn // 39.37
val feet: Double = meter.inFt // 3.2808
val yards: Double = meter.inYd // 1.0936
```

== Java

```java
Distance inch = Distance.fromIn(1);

double millimeters = inch.inMm; // 25.4
double centimeters = inch.inCm; // 2.54
double meters = inch.inMeters // 0.0254

Distance meter = Distance.fromMeters(1);

double inches = meter.inIn; // 39.37
double feet = meter.inFt; // 3.2808
double yards = meter.inYd; // 1.0936
```

:::

All operations are easy to use:

:::tabs key:code
== Kotlin

```kotlin
val foot = 1.ft
val inch = 1.inch

val sum = foot + inch // 13 in
val difference = foot - inch // 11 in
val product = foot * inch // 12 in (should be in^2 but NextFTC isn't THAT complicated)
val quotient = foot / inch // 12

val bigger = foot * 2 // 24 in
val smaller = foot / 2 // 6 in

val positive = +foot // 12 in
val negative = -foot // -12 in
val abs = foot.abs // 12 in
val otherAbs = abs(foot) // also 12 in!
val sign = foot.sign // 1 (1 for positive numbers, 0 for zero, -1 for negative numbers)

val remainder = foot % 5.in // 2 in
val pureRemainder = foot % 5 // also 2 in

foot > inches // true
foot >= inches // true
foot < inches // false
foot <= inches // false
foot == inches // false

val isNaN = foot.isNaN() // false
```

== Java

```java
Distance foot = Distance.fromFt(1);
Distance inch = Distance.fromIn(1);

Distance sum = foot.plus(inch); // 13 in
Distance difference = foot.minus(inch); // 11 in
Distance product = foot.times(inch); // 12 in (should be in^2 but NextFTC isn't THAT complicated)
double quotient = foot.div(inch); // 12

Distance bigger = foot.times(2); // 24 in
Distance smaller = foot.div(2); // 6 in

Distance positive = foot.unaryPlus(); // 12 in
Distance negative = foot.unaryMinus(); // -12 in
Distance abs = foot.abs(); // 12 in
int sign = foot.getSign(); // 1 (1 for positive numbers, 0 for zero, -1 for negative numbers)

Distance remainder = foot.rem(Distance.fromIn(5)); // 2 in
Distance pureRemainder = foot.rem(5); // also 2 in

foot.greaterThan(inches); // true
foot.greaterThanOrEqualTo(inches); // true
foot.lessThan(inches); // false
foot.lessThanOrEqualTo(inches); // false
foot.equals(inches); // false

boolean isNaN = foot.isNaN(); // false
```

:::

## `TimeSpan`

`TimeSpan` is very similar to `Distance`, only with different units. Supported units are microseconds, milliseconds, and seconds. Internally it is stored in microseconds.

Using `TimeSpans` is simple:

:::tabs key:code
== Kotlin

```kotlin
val seconds  = 1.sec
val milliseconds = 5.ms
val microseconds = 70000000.us

val secondsInMilliseconds = seconds.inMs // 1,000
val millisecondsInMicroseconds = milliseconds.inUs // 5,000
val microsecondsInSeconds = microseconds.inSec // 70
```

== Java

```java
TimeSpan seconds = TimeSpan.fromSec(1);
TimeSpan milliseconds = TimeSpan.fromMs(5);
TimeSpan microseconds = TimeSpan.fromUs(70000000);

double secondsInMilliseconds = seconds.inMs; // 1,000
double millisecondsInMicroseconds = milliseconds.inUs; // 5,000
double microsecondsInSeconds = microseconds.inSec; // 70
```

:::

## `Angle`

An `Angle` is very similar to `Distance` and `TimeSpan`, but it also has functionality for wrapping and normalizing. Angles can be in radians, degrees, or full revolutions, and are stored internally as radians.

:::tabs key:code
== Kotlin

```kotlin
val fullCircle = 1.rev
val halfCircle = Math.PI.rad
val quarterCircle = 90.deg

val fullDegrees = fullCircle.inDeg // 360
val halfRevolution = halfCircle.inRev // 0.5
val quarterRadians = quarterCircle.inRad // pi/2
```

== Java

```java
Angle fullCircle = Angle.fromRev(1);
Angle halfCircle = Angle.fromRad(Math.PI);
Angle quarterCircle = Angle.fromDeg(90);

Double fullDegrees = fullCircle.inDeg; // 360
Double halfRevolution = halfCircle.inRev; // 0.5
Double quarterRadians = quarterCircle.inRad; // pi/2
```

:::

You can also wrap and normalize angles. Below is a table of what wrapping and normalizing does for angles in different units.

| Unit        | Wrapping | Normalizing |
|-------------|----------|-------------|
| Revolutions | 0 to 1   | -0.5 to 0.5 |
| Radians     | 0 to 2pi | -pi to pi   |
| Degrees     | 0 to 360 | -180 to 180 |

Here's an example:

:::tabs key:code
== Kotlin

```kotlin
val bigAngle = 550.deg;
val wrapped = bigAngle.wrapped.inDeg; // 190
val normalized = bigAngle.normalized.inDeg; // -170
```

== Java

```java
Angle bigAngle = Angle.fromDeg(550);
double wrapped = bigAngle.wrapped().inDeg; // 190
double normalized = bigAngle.normalized().inDeg; // -170
```

:::

> [!NOTE]
> See the [units reference](https://nextftc.dev/reference/core/com.rowanmcalpin.nextftc.core.units/index.html) for more information.