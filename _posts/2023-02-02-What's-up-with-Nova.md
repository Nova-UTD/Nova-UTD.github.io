---
layout: post
title: What's up with Nova?
date: 2023-02-02
author: "Will Heitman, team lead"
---

Hello world! What are we working on?

First, we're going to deploy our constantly-improving software, Navigator, into a realistic simulator called CARLA, as part of a global competition. Second, we're going to load Navigator onto our actual vehicle, and we'll drive around campus-- and perhaps into the world beyond.

## Our tasks

We have three big ones.

**Task A:** Get our software working as well as it can in the simulator. This means that we can pick any point on a (city-sized) map, fill the map with a bunch of bad drivers and distracted pedestrians, and watch as our software drives to the goal without a hitch. Fingers crossed.

**Task B:** Prepare our trusty car, Hail-Bopp, with a powerful onboard computer upgrade, remounted sensors, and (maybe) a fancy RTK GNSS, a kind of GPS with enough accuracy to pin down a postage stamp. Success here will mean driving more than a mile around UTD campus without touching the wheel or pedals. We'll get a human to drive with an Xbox controller.

**Task C:** Combine the earlier tasks so that Hail-Bopp becomes a real robotaxi.



## Our timeline

**Tasks A** and **B** are due on February 15, just in time for us to present our work at the UTD Homecoming Parade.

**Task C** is due on April 28 (<span id="demo-countdown"></span> days as you read this).

Is this crazy? Yes! But my teammates are smart and dedicated, and so we will apply ourselves to get this done.

![Octovis mapping](/assets/res/22-02-02-octovis-mapping.gif)

<small>Real-time voxel mapping with octrees (2x speedup)</small>

## Our obstacles

There are plenty, but I'll focus on three.

First, state estimation, which is all the calculations that we perform to localize the robot on the map. State estimation has been a persistent thorn in Hail-Bopp's tire since Nova was founded three years ago. We've tried about a dozen algorithms, from the state of the art to the admittedly dubious, and all have failed in one way or another. We've recently settled on a method that we believe will work: Monte Carlo localization, which can incorporate a variety of inputs and constraints while maintaining a clear probabilistic model.

![Dead reckoning](/assets/res/22-02-02-dead-reckoning.gif)

<small>Dead reckoning within our particle filter, using wheel encoders and an IMU. 2x speedup.</small>

Second, path planning. Both in simulation and in the real world, we're asking our car to drive through some maddening scenarios: Distracted pedestrians on their phones, buses, amateur skateboarders, dogs, and lots of cars with those "Please be patient, student driver" stickers on the back. Oh boy. And so, several times every second, the path planner needs to weave us through all of this madness without making a single mistake.

![Jai, Meyli, and Connor](/assets/res/22-02-02-Jai-Meyli-Connor.jpg)

<small>Jai, Connor, and Meyli work on wiring</small>

Third, our firmware and hardware tools need to be flawless. We're fortunate to have great vehicle technicians, but even they have their work cut out for them. Loose wires, miscalibrated sensors, dead batteries, and mysterious firmware bugs all present major hazards as we move from the simulator to real-world deployments.

There are many other challenges, too: Tuning our ML-based motion prediction model, optimizing our ginormous trip routing algorithm, and adding safety checks all come to mind. Nova is not for the faint of heart. But we've been through challenges before, and this is no different.

![Our real-time occupancy grid](/assets/res/22-02-02-SOG.gif)

<small>Our real-time occupancy grid in action</small>

## Our goal

If we all commit ourselves to it, which we will, then tasks A, B, and C will lead us to a fully autonomous, open-source, undergrad-built system in less than three months. We will present our work on Demo Day, which is on Friday, April 28 (<span id="demo-countdown2"></span> days!).

More details will follow as we approach that date. In the meantime, I hope to see you at the homecoming parade. Wish us luck.

<script>
var deadline = new Date("April 28, 2023").getTime();

var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));

document.getElementById("demo-countdown").innerHTML = days;

document.getElementById("demo-countdown2").innerHTML = days;
</script>