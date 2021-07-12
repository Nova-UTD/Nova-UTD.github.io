---
layout: post
date:   2021-07-08 19:00:18 -0500
categories: overview
author: "Will"
permalink: "/d1-overview"
---

Getting started with autonomous cars can be scary. How do you start? We started in January with a simple goal: Travel from Point A to Point B. Every other factor would be simplified as much as possible. This led us to the following assumptions:
- Driving will occur in daytime, in good weather.
- A human will be behind the wheel at all times, ready to take over.
- This person will control the throttle and brake.
- The computer can only move the steering wheel.
- The computer will have access to processed, pre-recorded map data.
- The computer will be given its initial location and its goal location before it starts the trip.

We also defined a clear success condition, where all of the following are met:
- The car should travel from Point A to Point B.
- Only the computer should apply any control whatsoever to the steering wheel for the duration of the trip.
- The car should remain in the appropriate lane.

Finally, to meet the above criteria, we outlined five questions that demanded our attention:
1. What does the map look like?
2. Where am I on the map?
3. Where is my destination on the map?
4. What is the best path from my location to my destination?
5. How can I translate this path into steering angles?

Breaking our goal down into these five questions made things more clear and approachable.

## Tools we used
### Software
We're lucky that a number of autonomous car "platforms" are publicly available for for researchers to use. These platforms offer implementations of popular algorithms for tasks like mapping and control. Platforms include [openpilot](https://github.com/commaai/openpilot), [apollo](https://www.apollo.auto), and a few others. But don't be fooled like I was-- using this software isn't as easy as downloading a file and running it. Integration is an arduous process, no matter what platform you choose.

We ultimately decided to use [Autoware.Auto](https://www.autoware.auto). Autoware is a really transparant and easily extensible platform to adopt. It runs off a popular framework called the Robot Operating System, or ROS. Adding features on top of Autoware is as simple as writing our own ROS "node".

### Electronic Steering and CAN
To steer the vehicle programatically, we used an <abbr title="electronic power-assisted steering">EPAS</abbr> system provided by [DCE Motorsport](https://www.dcemotorsport.com/Home/EPAS). The system includes a powerful motor that fits around the car's steering column. It also includes a simple computer called an "ECU" that controls the motor.

To send our commands from our onboard computer to the EPAS ECU, we used a [CANable Pro](https://canable.io/). All modern cars use <abbr title="Controller Area Networks">CAN</abbr> to send data to and from components-- signals to turn on the blinkers, honk the horn, and so on. The CANable allows us to connect to our car's CAN network and send steering commands over it, which the EPAS then receives.

### On-board computing
We used an [NVIDIA Jetson AGX Xavier](https://developer.nvidia.com/embedded/jetson-agx-xavier-developer-kit) to run our entire stack. We didn't optimize our code to run efficiently on the Xavier's GPU, but we still achieved decent performance.

The Xavier is power efficient, which is an important consideration since our vehicle's batteries aren't limitless. Strapping a big GPU workstation to the roof would not have worked.

### Simulation
We tested our code in a simulator before testing on the car. We used the [SVL Simulator](https://www.svlsimulator.com/), which can generate highly realistic environments. We ran all of this on a local server.

A nice thing about our code is that it doesn't care whether it's run in the simulator or on the real car. Our software's only real-time inputs are the Lidar streams, which are provided by the simulator in the same way that they are by the car.

## 1. What does the map look like?
