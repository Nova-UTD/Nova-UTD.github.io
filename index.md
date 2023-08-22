---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---


## Overview
Nova is UT Dallas’s premier autonomous driving group, run by undergrads as part of the Applied Systems Lab.

We're developing an open-source autonomous driving stack for researchers, and we aim to provide autonomous driving services to UTD in the long term.

![Our team at the UTD Homecoming Parade, February 2022](/assets/res/22-10-23-Group_photo_2022.jpg)
<small>Above: Our team at our annual Welcome Week event.</small>

## Our Team
*Click on a member to learn more about them!*
<div class="aside">


<div class="flex-row align-items-center">

  <div class="team-member-card">
    <p>
      <img id="modal1" src="/assets/res/headshots/Justin_Ruths_fall2022.jpg" alt="Justin Ruths" />
      <br/><br/>
      <strong>Justin Ruths</strong>
      <br/>Professor<br/>
      <em>Team Advisor</em>
      <br/>
      <a href="mailto: jruths@utdallas.edu">jruths@utdallas.edu</a>
    </p>
  </div>

  <!-- <div class="team-member-card">
    <p>
      <img id="modal2" src="/assets/res/headshots/Will_Heitman_fall2022.jpg" alt="Will Heitman" />
      <br/><br/>
      <strong>Will Heitman</strong>
      <br/>CE Senior<br/>
      <em>Team Lead</em>
      <br/>
      <a href="mailto: will.heitman@utdallas.edu">will.heitman@
      <br/>utdallas.edu</a>
    </p>
  </div> -->

  <div class="team-member-card">
    <p>
      <img id="modal2" src="/assets/res/headshots/Daniel_Vayman.jpg" alt="Daniel Vayman"/>
      <br/><br/>
      <strong>Daniel Vayman</strong>
      <br/>CS Sophomore<br/>
      <em>Team Lead</em>
      <br/>
      <a href="mailto: daniel.vayman@utdallas.edu">daniel.vayman@
      <br/>utdallas.edu</a>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal3" src="/assets/res/headshots/Jai_Peris.jpg" alt="Jai Peris"/>
      <br/><br/>
      <strong>Jai Peris</strong>
      <br/>Electrical Engineering Sophomore<br/>
      <em>Hardware, Firmware, and Electrical</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal4" src="/assets/res/headshots/Chitsein_Htun.jpg" alt="Chitsein Htun"/>
      <br/><br/>
      <strong>Chitsein Htun</strong>
      <br/>CS Sophomore<br/>
      <em>Behavior Planning & Controls</em>
    </p>
  </div>

  <div class="team-member-card">
    <p>
      <img id="modal5" src="/assets/res/headshots/Stepan_Antonyuk.jpg" alt="Stepan Antonyuk"/>
      <br/><br/>
      <strong>Stepan Antonyuk</strong>
      <br/>CS Sophomore<br/>
      <em>Perception & Machine Vision</em>
    </p>
  </div>
  
  <div class="team-member-card">
      <p>
        <img id="modal6" src="/assets/res/headshots/harsha_kota.jpg " alt="Harsha Kota"/>
        <br/><br/>
        <strong>Harsha Kota</strong>
        <br/>CS Sophomore<br/>
        <em>Behavior Planning & Controls</em>
      </p>
  </div>

  <div class="team-member-card">
      <p>
        <img id="modal7" src="/assets/res/headshots/Sasha_Luich.jpg " alt="Sasha Luich"/>
        <br/><br/>
        <strong>Sasha Luich</strong>
        <br/>ME Junior<br/>
        <em>Hardware, Firmware, and Electrical</em>
      </p>
  </div>

  <div class="team-member-card">
      <p>
        <img id="modal8" src="/assets/res/headshots/Meyli_Colmenero.jpg " alt="Meyli Colmenero"/>
        <br/><br/>
        <strong>Meyli Colmenero</strong>
        <br/>CE Junior<br/>
        <em>Hardware, Firmware, and Electrical</em>
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

## Demo 2, we did it! (Proof of concept)
<div id="muteYouTubeVideoPlayer"></div>
<script async src="https://www.youtube.com/iframe_api"></script>
<script>
  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
      videoId: 'uHjxz3qC8Q8', // YouTube Video ID
      width: document.getElementById("muteYouTubeVideoPlayer").clientWidth, // Player width (in px)
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
  
<br>

## Demo 1, our first drive
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ry3275KyM2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
> *This video explains our hardware stack and software architecture. It also also includes a video demonstration at 4:39*.
