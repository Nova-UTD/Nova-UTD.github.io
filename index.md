---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div id="muteYouTubeVideoPlayer"></div>
<script async src="https://www.youtube.com/iframe_api"></script>
<script>
  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
      videoId: 'aLeqj5ZyQQI', // YouTube Video ID
      width: 560, // Player width (in px)
      height: 315, // Player height (in px)
      playerVars: {
        autoplay: 1, // Auto-play the video on load
        controls: 1, // Show pause/play buttons in player
        showinfo: 0, // Hide the video title
        modestbranding: 1, // Hide the Youtube Logo
        loop: 1, // Run the video in a loop
        fs: 1, // Hide the full screen button
        cc_load_policy: 0, // Hide closed captions
        iv_load_policy: 3, // Hide the Video Annotations
        autohide: 0, // Hide video controls when playing
      },
      events: {
        onReady: function (e) {
          e.target.mute();
        },
  onStateChange: function(e) {
        if (e.data === YT.PlayerState.ENDED) {
            player.playVideo(); 
        }
    }
      },
    });
  }

  // Written by @labnol
</script>

## Overview
Our project is currently aiming to make a 2-mile loop of UT Dallas's campus without any human control. Our vehicle will manage traffic patterns on actual roads while yielding to pedestrians and vehicles. Learn more about our goals on our [Demo 2 Overview](./d2-overview) page.

You can read more about Demo 1, our first milestone that we met in June 2021, here: [Getting Things Rolling with Demo 1](./d1-overview).

## Nova's history, past and future
[![Timeline of our project, from 2019 to 2023 and beyond](/assets/res/voltron-timeline.png)](/assets/res/voltron-timeline.png)

## Our Team
*Click on a member to learn more about them!*
<div class="aside">


<div class="flex-row align-items-center">

  <div class="team-member-card">
    <p>
      <img id="modal1" src="/assets/res/headshots/justin_ruths.jpg" alt="Justin Ruths" />
      <br/><br/>
      <strong>Justin Ruths</strong>
      <br/>Professor<br/>
      <em>Team Advisor</em>
      <br/>
      <a href="mailto: jruths@utdallas.edu">jruths@utdallas.edu</a>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal2" src="/assets/res/headshots/will_heitman.jpg" alt="Will Heitman" />
      <br/><br/>
      <strong>Will Heitman</strong>
      <br/>CE Junior<br/>
      <em>Team Lead</em>
      <br/>
      <a href="mailto: will.heitman@utdallas.edu">will.heitman@
      <br/>utdallas.edu</a>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal3" src="/assets/res/headshots/Joshua_Williams.jpg" alt="Joshua Williams"/>
      <br/><br/>
      <strong>Joshua Williams</strong>
      <br/>CS Junior<br/>
      <em>Software Architect</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal4" src="/assets/res/headshots/raghav_pillai.jpg" alt="Raghav Pillai"/>
      <br/><br/>
      <strong>Raghav Pillai</strong>
      <br/>CS Junior<br/>
      <em>Data Visualization & Interface</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal5" src="/assets/res/headshots/Egan_Johnson.jpg" alt="Egan Johnson"/>
      <br/><br/>
      <strong>Egan Johnson</strong>
      <br/>CS Sophomore<br/>
      <em>Behavior Planning & Controls</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal6" src="/assets/res/headshots/jim_moore.jpg" alt="Jim Moore"/>
      <br/><br/>
      <strong>Jim Moore</strong>
      <br/>CS Junior<br/>
      <em>Behavior Planning & Controls</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal7" src="/assets/res/headshots/cristian_cruz.jpg" alt="Cristian Cruz"/>
      <br/><br/>
      <strong>Cristian Cruz</strong>
      <br/>CE Sophomore<br/>
      <em>Behavior Planning & Controls</em>
    </p>
  </div>
  
  <div class="team-member-card">
    <p>
      <img id="modal8" src="/assets/res/headshots/kyle_zeng.jpg" alt="Kyle Zeng"/>
      <br/><br/>
      <strong>Kyle Zeng</strong>
      <br/>CS Sophomore<br/>
      <em>Perception & Machine Vision</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal9" src="/assets/res/headshots/ragib_arnab.jpg" alt="Ragib Arnab"/>
      <br/><br/>
      <strong>Ragib Arnab</strong>
      <br/>CS Sophomore<br/>
      <em>Perception & Machine Vision</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal11" src="/assets/res/headshots/avery_bainbridge.jpg" alt="Avery Bainbridge"/>
      <br/><br/>
      <strong>Avery Bainbridge</strong>
      <br/>CS Sophomore<br/>
      <em>Firmware</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal12" src="/assets/res/headshots/dylan_hiu.jpg" alt="Dylan Hiu"/>
      <br/><br/>
      <strong>Dylan Hiu</strong>
      <br/>EE Junior<br/>
      <em>Public Relations</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal13" src="/assets/res/headshots/phu_le.jpg" alt="Phu Le"/>
      <br/><br/>
      <strong>Phu Le</strong>
      <br/>CS Sophomore<br/>
      <em>Technical Artist</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal14" src="/assets/res/headshots/connor_scally.jpg" alt="Connor Scally"/>
      <br/><br/>
      <strong>Connor Scally</strong>
      <br/>CS Sophomore<br/>
      <em>Virtualization</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal15" src="/assets/res/headshots/nikhil_narvekar.jpg" alt="Nikhil Narvekar"/>
      <br/><br/>
      <strong>Nikhil Narvekar</strong>
      <br/>CS Sophomore<br/>
      <em>Behavior Planning & Controls</em>
    </p>
  </div>
  
</div>

<!-- Modal Holder -->
<div id="modalHolder" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script src="/assets/js/app.js"></script>
</div>
 
 ## Demo 1, our first drive
<iframe width="500" height="315" src="https://www.youtube.com/embed/Ry3275KyM2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
> *This video explains our hardware stack and software architecture. It also also includes a video demonstration at 4:39*. 
