# Following Paths

To follow a path, use the `FollowPath` command. You use this instead of
`follower.followPath`, which you would use if you were not using NextFTC.
The `FollowPath` command waits for the path to finish before continuing,
which means that it will work as expected in sequential groups.

:::tabs key:code

== Kotlin

```kotlin
FollowPath(path)
FollowPath(pathChain)
```

== Java

```java
new FollowPath(path);
new FollowPath(pathChain);
```

:::

## `holdEnd` and `maxPower`

The `FollowPath` command accepts two additional optional parameters: `holdEnd`
and `maxPower`. The `holdEnd` parameter defaults to `automaticHoldEnd` in
`FollowerConstants`, which itself defaults to `true`. The `maxPower` parameter
defaults to `maxPower` in `FollowerConstants`, which defaults to `1.0`.

:::tabs key:code

== Kotlin

```kotlin
FollowPath(path, holdEnd = true)
FollowPath(path, holdEnd = true, maxPower = 0.5)
```

== Java

```java
new FollowPath(path, true);
new FollowPath(path, true, 0.5);
```

:::

::: danger IMPORTANT

You **may not** pass `maxPower` without also passing `holdEnd`. This is 
because `follower.followPath`, which `FollowPath` uses internally, does not 
accept `maxPower` without `holdEnd`.

:::