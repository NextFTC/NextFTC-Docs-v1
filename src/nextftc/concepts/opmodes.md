# OpModes

OpModes in NextFTC extend the `NextFTCOpMode` base class, which is a subtype 
of `opmode`. `nextftcopmodes` have five functions, similar to `opmode's`.

| `OpMode` function | `NextFTCOpMode` function |
|-------------------|--------------------------|
| `init`            | `onInit`                 |
| `init_loop`       | `onWaitForStart`         |
| `start`           | `onStartButtonPressed`   |
| `loop`            | `onUpdate`               |
| `stop`            | `onStop`                 |

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