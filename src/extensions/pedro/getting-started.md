# Getting Started

The first step to using the Pedro extension is to add the Pedro component to 
your OpMode. Add the following code to your existing components.

:::tabs key:code

== Kotlin

```kotlin
addComponents(
    /* existing components */
    PedroComponent(Constants::createFollower)
)
```

== Java

```java
addComponents(
    /* existing components */
    new PedroComponent(Constants::createFollower)
);
```

:::

Adding this does two things:

- Automatically creates the follower on initialization.
- Automatically updates the follower every loop.

## Accessing the Follower

To access the automatically created follower, use `PedroComponent.follower`. 
Alternatively, you can use a static import to access the follower directly:

:::tabs key:code

== Kotlin

```kotlin
// at the top of the file:
import dev.nextftc.extensions.pedro.PedroComponent.follower

// you can then access the follower as follower
// for example:
follower.breakFollowing()
```

== Java

```java
// at the top of the file:
import static dev.nextftc.extensions.pedro.PedroComponent.follower;

// you can then access the follower as follower()
// for example:
follower().breakFollowing();
```

:::