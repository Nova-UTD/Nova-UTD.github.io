---
layout: default
date:   2021-09-2
categories: recruitment
author: "Will Heitman"
---
# Pointcloud downsampler
[<- Back to openings page](/join)

> Note on submissions: We'll ask for your code sample in an email when we reach out about interviews. You should receive this email within 48 hours of your form submission. You're welcome to work on it whenever, though!

## Overview
In the course of our research, we frequently encounter unfiltered pointclouds-- that is, 3D scans from our car's sensors that have not been processed. These unfiltered pointclouds contain usually contain many more points than we need.

We use a process called "downsampling" to remove unnecessary points. By downsampling, the complexity of our 3D data is reduced, which makes our algorithms faster down the road.

## Program requirements
We'd like you to write a program that reads a pointcloud from a labelled CSV file, downsamples this pointcloud, then writes the result to a second CSV file.

- **Input:** input.csv (<a href="/fall-recruiting/input.csv" download>Download here</a>)
- **Output:** output.csv (with the same general format as the input CSV)
- **Submission:** A single `.cpp` file with a main function. The file can be formatted in any way you choose.
- Downsampling can be done by any method, from removing points at random to distributing points along a voxel grid, anything works.
   - Probably the coolest implementation would involve distributing points using an [octree](https://en.wikipedia.org/wiki/Octree)-- that's code  we would actually use on the car!
- We'd greatly prefer your program to be written in C++ (this is the language we use in the lab).

## Target qualities
We're looking for efficient, cleanly written downsamplers that fulfill the requirements above. Everything else is up to you, including:
- How many points to remove (this depends on your implementation, but it doesn't really matter to us),
- How to select which points to remove (see requirement above),

and so on. If it sounds crazy, **keep it simple**!

## Notes and tips
- You should be able to accomplish this with standard C++ libraries, but Boost is also perfectly welcome.
- The input positions are in meters.
- You're welcome to accept additional parameters from the user or from a config file, but you can stick to hardcoded values as well.
- The input pointcloud is a scan of an apartment from [this dataset](https://projects.asl.ethz.ch/datasets/doku.php?id=laserregistration:apartment:home).
- If you'd like to visualize your input and output pointclouds, [Paraview](https://www.paraview.org/) is a popular data visualiztion program that can do just that (and it handles CSV files easily). Not required, but could help.

We just want to see your approach to algorithm problems. Of course you can be as creative or ambitious as you like, but at the end of the day, we just need a downsampler. You should be able to knock this out in **about 1 hour** (though you can take as long as you need). We're looking forward to seeing your code!

*Direct questions to Will at will.heitman@utdallas.edu (he doesn't bite).*

[<- Back to openings page](/join)
