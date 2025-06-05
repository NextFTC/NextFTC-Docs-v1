# OpModes

OpModes in NextFTC extend the `NextFTCOpMode` base class, which is a subtype 
of `OpMode`. `NextFTCOpModes` have five functions, similar to `OpMode`'s 
five functions.

| `OpMode` function | `NextFTCOpMode` function | Called                                                                      |
|-------------------|--------------------------|-----------------------------------------------------------------------------|
| `init`            | `onInit`                 | Once, when the init button is pressed                                       |
| `init_loop`       | `onWaitForStart`         | Every loop between initialization and when the start/stop button is pressed |
| `start`           | `onStartButtonPressed`   | Once, when the start button is pressed                                      |
| `loop`            | `onUpdate`               | Every loop, between start and when the stop button is pressed               |
| `stop`            | `onStop`                 | Once, when the stop button is pressed                                       |

Additionally, OpModes can have [components](/nextftc/concepts/components) 
that are registered with the `addComponents` function.

An empty OpMode is as follows.

:::tabs key:code

== Kotlin

```kotlin
class MyOpMode : NextFTCOpMode() {
    init {
        addComponents(/* vararg components */)
    }
    
    override fun onInit() { }
    override fun onWaitForStart() { }
    override fun onStartButtonPressed() { }
    override fun onUpdate() { }
    override fun onStop() { }
}
```

== Java

```java
public class MyOpMode extends NextFTCOpMode {
    {
        addComponents(/* vararg components */);
    }
    
    @Override public void onInit() { }
    @Override public void onWaitForStart() { }
    @Override public void onStartButtonPressed() { }
    @Override public void onUpdate() { }
    @Override public void onStop() { }
}
```

:::