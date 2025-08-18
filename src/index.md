---
layout: home

hero:
  name: "Welcome"
  text: "to NextFTC"
  tagline: Simple but powerful libraries for FTC
  image:
    dark: /images/NextFTC-Banner-Dark-Transparent-FullColor.png
    light: /images/NextFTC-Banner-Light-Transparent-FullColor.png
    alt: NextFTC Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/about
    - theme: alt
      text: NextFTC
      link: /nextftc
    - theme: alt
      text: NextControl
      link: /control
    - theme: alt
      text: NextBindings
      link: /bindings
    - theme: alt
      text: Extensions
      link: /extensions
features:
  - title: Easy to use
    details: >
      NextFTC offers numerous built-in features so you don't need to write
      everything yourself. When you write code with NextFTC, we want it to feel
      magical, and like everything "just works."
  - title: Gamepad Integration
    details: >
      NextBindings, our bindings library, has complex gamepad integration, 
      including binding callbacks to buttons, rising and falling edge 
      detection, automatic gamepad polling, and even joystick curving!
  - title: Control
    details: >
      NextControl, our solution to control in FTC, makes complex control easy.
      With features such as PID control, feedforward, motion profiling, and
      even Kalman filters, you can control your robot exactly how you want to,
      with seamless integration with the rest of NextFTC.
  - title: Commands
    details: >
      Commands are units of code that can be executed. They consist 
      of several steps and can be grouped into command groups, allowing them 
      to run sequentially or simultaneously, allowing you to create complex
      routines.
  - title: Extensions
    details: >
      NextFTC has extensions to work with Pedro Pathing,
      <a style="text-decoration:underline;color:var(--vp-c-brand-1)" 
      target="_blank" href="https://pedropathing.com">PedroPathing</a>,
      an autonomous pathing library. We are also currently working on built-in
      integration with
      <a style="text-decoration:underline;color:var(--vp-c-brand-1)"
      target="_blank" href="https://rr.brott.dev.com">RoadRunner</a>
      and <a style="text-decoration:underline;color:var(--vp-c-brand-1)"
      target="_blank" href="https://hermes.zharel.gay/">Hermes</a>,
      two other pathing libraries.
  - title: Welcoming Community
    details: >
      NextFTC has a welcoming support Discord server where you can ask 
      questions or chat with the community. <br> Join the 
      <a style='text-decoration:underline;color:var(--vp-c-brand-1)'
      target='_blank' href='https://discord.gg/PjP9Ze6fkX'>NextFTC Discord</a>!
---

## Docs overview

These docs have two main parts: the guide and a section for each library.

The [guide](/guide/about) is designed to teach you the basics of NextFTC using a
few of our most popular libraries.

Each NextFTC library also has a section on these docs specific to that library:

- [NextFTC](/nextftc)
- [NextControl](/control)
- [NextBindings](/bindings)
- [Extensions](/extensions)

## A note on these docs

NextFTC was written in Kotlin, a JVM programming language. You can use either
Kotlin or Java, but there are small
advantages to using Kotlin. Each section with code examples will offer both
Kotlin and Java tabs. It's recommended to
choose one language for your project to avoid compatibility issues.

To use Kotlin, configure it in your project. I recommend the Kotlin Gradle
Plugin version `2.0.0`. (Kotlin is
pre-installed in the Quickstart template.)

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://github.com/rowan-mcalpin.png',
    name: 'Rowan McAlpin',
    title: 'Lead Dev | NextFTC | NextControl | Extensions (PedroPathing)',
    links: [
      { icon: 'github', link: 'https://github.com/rowan-mcalpin' },
      { 
        icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>'}, 
        link: 'mailto:rowan@nextftc.dev',
        ariaLabel: 'email' 
      },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/rowan-mcalpin/'},
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>'},
        link: 'https://rowanmcalpin.com',
        ariaLabel: 'website'
      }
    ]
  },
  {
    avatar: 'https://github.com/beepbot99.png',
    name: 'Davis Luxenberg',
    title: 'NextFTC | NextControl | Extensions (PedroPathing) | NextBindings',
    links: [
      {
        icon: "github",
        link: "https://github.com/beepbot99"
      }
    ]
  },
  {
    avatar: 'https://github.com/zachwaffle4.png',
    name: 'Zach Harel',
    title: 'NextFTC | NextControl | Extensions (RoadRunner, Hermes)',
    links: [
      {
        icon: "github",
        link: "https://github.com/zachwaffle4"
      },
      { 
        icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>'}, 
        link: 'mailto:ftc@zharel.me',
        ariaLabel: 'email' 
      }
    ]
  }
]
</script>

## Our Team

<VPTeamMembers size="small" :members="members" />
