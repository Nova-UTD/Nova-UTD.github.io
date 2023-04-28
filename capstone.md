---
layout: default
author: "Will Heitman"
---
### Sounds
#### Cruising: Wind chimes
<audio
    controls
    src="/static/capstone/chimes.wav">
        <a href="/static/capstone/chimes.wav">
            Download audio
        </a>
</audio>

#### Waiting: Synth pulse
<audio
    controls
    src="/static/capstone/waiting_loop.wav">
        <a href="/static/capstone/waiting_loop.wav">
            Download audio
        </a>
</audio>

#### Continuing from stop: Arpeggio
<audio
    controls
    src="/static/capstone/waiting_done.wav">
        <a href="/static/capstone/waiting_done.wav">
            Download audio
        </a>
</audio>


### Motivation

Humans were not meant to drive cars. We're bad at it. There were 1.36 million vehicle crash deaths in 2016 according to Waymo, resulting in an annual cost of $836 billion due to loss of life and injury [[link](https://waymo.com/safety/)]. In many scenarios, self-driving cars are already safer drivers than humans-- they don't get angry, distracted, or tired, and their computers are powerful enough to predict dangerous situations before humans can.

However, self-driving cars lack external user interaction (EUX) features by default. They cannot make eye contact with pedestrians, wave on other cars at intersections, or raise their fingers to acknowledge other road users. This gap needs to be addressed, as nearly all pedestrians use eye contact to safely cross streets [[link](https://www.sciencedirect.com/science/article/pii/S0001457517300805?via%3Dihub)].

UT Dallas's experimental autonomous vehicle (AV), nicknamed Hail-Bopp, can leverage EUX tools to more effectively and safely communicate with other road users. **By combining its super-human driving with intuitive audiovisual "gestures," our group can develop an automated driver safer than any person.**

### Prior work

Practically every self-driving company has their own philosophy toward EUX. In 2018, Uber patented an approach that would have lit up their vehicles like Times Square [[link](https://www.theverge.com/2018/3/16/17129210/uber-self-driving-car-patent-talk-pedestrians)], with screens and flashing lights on the door, bumpers, and even side mirrors. Zoox's custom vehicle incorporates a modest light bar in the rear window, while Waymo's vehicles forgo EUX entirely, relying instead on the motion of the car itself [[link](https://mashable.com/article/auotnomous-vehicles-talking-to-pedestrians)]. The most promising approach comes from Ford, which tested patterns on a single forward-facing light bar. The company hopes to make their patterns an industry standard [[link](https://media.ford.com/content/fordmedia/feu/en/news/2017/09/13/ford-virginia-tech-autonomous-vehicle-human-testing.html)].

### Objectives

- Minimize power consumption and computational overhead
- Clearly communicate the software's intention
- Make signals noticeable but not glaring

### Survey results

##### Do you feel *comforted* at a crosswalk?

|                 | Yes  | No opinion | No   |
| --------------- | ---- | ---------- | ---- |
| Flashing amber  | 12   | 2          | 26   |
| Nothing         | 22   | 5          | 13   |
| Flashing green  | 29   | 3          | 8    |
| Flashing indigo | 30   | 3          | 7    |
| Pulsing green   | 33   | 3          | 4    |
| Pulsing indigo  | 35   | 3          | 2    |

##### Do you feel *confident* at a crosswalk?

|                 | Yes  | No opinion | No   |
| --------------- | ---- | ---------- | ---- |
| Flashing amber  | 5    | 4          | 31   |
| Nothing         | 6    | 12         | 22   |
| Flashing indigo | 9    | 3          | 28   |
| Flashing green  | 12   | 5          | 23   |
| Pulsing green   | 17   | 4          | 19   |
| Pulsing indigo  | 23   | 5          | 12   |

### System overview

Our EUI system has four behavior states:

| State                   | LED Strips                            | Matrices                            | Speakers             |
| ----------------------- | ------------------------------------- | ----------------------------------- | -------------------- |
| Cruising                | Entire strip slowly pulsing in indigo | Pulsing "Experimental Self-Driving" | Wind chimes           |
| Stopped at signal       | Indigo pulsing to edges               | "Waiting"                           | Soft synth pulse     |
| Stopped for pedestrians | Green pulsing to edges                | "Go ahead"                          | Soft synth pulse     |
| Continuing from stop    | Brief amber pulse                     | "I'm going"                         | Upward harp arpeggio |

### About Nova

Nova is UT Dallas's applied autonomous driving group, run by undergrads as part of the Applied Systems Lab under Dr. Justin Ruths. We develop our own software and hardware. At the moment, we can drive autonomously on select roads on campus and the surrounding neighborhood. Learn more at [nova-utd.github.io](https://nova-utd.github.io).