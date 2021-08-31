---
layout: post
date:   2021-08-31
categories: overview
author: "Will"
title: "Demo 2 Overview: Voltron's Grand Tour"
permalink: "/d2-overview"
---
Demo 2 is Voltron's Grand Tour. 

This overview is split into our **success conditions**, **tasks**, **timeline** and **checkpoints**:
- **Success conditions** outline exactly what Voltron needs to do to finish the Grand Tour.
- **Tasks** are the challenges we need to complete in order to succeed.
- The **timeline** shows which tasks rely on the completion of other tasks.
- **Checkpoints** are clear milestones along our journey.

# Success conditions
- [ ] The trip should be conducted on a light roadway, not within a parking lot or closed course.
- [ ] The car should remain within its lane throughout the trip.
- [ ] The car should maintain a reasonable speed and acceleration throughout the trip.
- [ ] The car should make a complete stop at stop signs, then continue after accounting for other vehicles/pedestrians at the intersection.
  - Note: The location of stop signs, along with yield signs, crosswalks, and other static elements, can be provided ahead of time as map annotations. Voltron does not need to detect signage in real time, but it does need to detect and track moving obstacles.
- [ ] The car should yield appropriately when entering a roundabout (the roundabout near JSOM and the Visitor Center).
- [ ] The car should stop or adjust speed for obstacles in front of it.
- [ ] The car should reduce speed when a pedestrian is significantly near, even if not in front.
- [ ] Speed, steering, and other key data should be displayed to the human driver throughout the trip.

# Tasks
The Grand Tour's tasks have four main components: A new behavior planner, safety improvements, a bigger map, and a new visualization tool.
- Revise or rewrite behavior (path) planner
    - Should produce appropriate speeds along the path
    - Should stop at stop signs, navigate simple intersections
    - Stop or slow down for nearby obstacles
        - Will require an object detector/classifier for pedestrians and vehicles, likely camera and ML-based
    - Likely draw from a Moving Object Tracker to predict future location of obstacles
    - Output commands through the steering controller to the Linear Actuators
- Improve platform safety
    - Create "heartbeat" signals for all nodes, including for E-stop
    - Write Health Monitor to manage and act on heartbeats
    - Raise flags on specific errors, like a loss in localization confidence or high CPU usage
- Extend operating area
    - Create a map of campus, with PCD split into chunks as needed
    - Map should include locations of stop signs, yield signs, and crosswalks (high-traffic pedestrian areas)
    - Write a tool to stitch together our PCD maps into a single clean file
- Visualize key observations and decisions
    - Target and current speed/acceleration
    - Target and current steering angle/effort
    - Position of car, signs, and dynamic obstacles on Lanelet map
    - Localization result confidence

We should focus only on the above goals. Everything else is beyond the scope of Demo 2.

![Grand Tour map](/assets/res/d2-overview_map.png)

*Possible layout of Demo 2 map area ("Grand Tour"), with loop split into eight colored sections. Car will move clockwise along the red route.*

# Timeline
![Timeline](/assets/res/d2-overview_timeline.png)

# Checkpoints
These are major steps along our path to the completion of Demo 2. Checkpoints are *not necessarily ordered*, so any checkpoint can be completed before another one. The checkpoints are:

**A:** Voltron can localize itself along the entire course

**B:** Voltron can generate a correct, sensible path along the entire course (accoutning for position, not speed, so only steering is accounted for)

**C:** Voltron can steer itself along the entire course (essentially Demo 1 on a new course)

**D:**  Voltron can generate sensible throttle and brake commands, which are then followed by a human driver

**E:** Throttle and brake linear actuators can receive manual commands, so that the peddles can be teleoperated via a keyboard

**F:** Voltron can control the throttle and brake autonomously, though not correctly

**G:** Voltron can control the throttle and brake along the entire course