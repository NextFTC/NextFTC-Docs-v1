# Motors

NextFTC has wrappers for your motors that add several useful features, such as power caching and encoder offsets. All motors implement the `Controllable` interface.

## `MotorEx`

`MotorEx` is NextFTC's wrapper over a `DcMotorEx`. To create one, you can do one of the following:

:::tabs key:code
== Kotlin

```kotlin
val myMotorEx = MotorEx("motor_name")
val myMotorEx2 = MotorEx(myDcMotorEx) // where myDcMotorEx is a DcMotorEx
```

== Java

```java
MotorEx myMotorEx = new MotorEx("motor_name");
MotorEx myMotorEx2 = new MotorEx(myDxMotorEx); // where myDcMotorEx is a DcMotorEx
```

:::

## `MotorGroup`
`MotorGroup` is a container for multiple `MotorEx` that are mechanically linked. The first motor passed to it is the "leader" and the rest are "followers." The leader is the one whose encoder will be read.

As `MotorGroup` implements `Controllable`, it can be passed anywhere you would normally pass a `MotorEx`. Creating a `MotorGroup` is easy:

:::tabs key:code
== Kotlin

```kotlin
val myMotorEx = MotorEx("motor1")
val myMotorEx2 = MotorEx("motor2")
val myMotorGroup = MotorGroup(myMotorEx, myMotorEx2)
```

== Java

```java
MotorEx myMotorEx = new MotorEx("motor1");
MotorEx myMotorEx2 = new MotorEx("motor2");
MotorGroup myMotorGroup = new MotorGroup(myMotorEx, myMotorEx2);
```

:::

> [!NOTE]
> See the [controllables reference](https://nextftc.dev/reference/ftc/com.rowanmcalpin.nextftc.ftc.hardware.controllables/) for more information.