"use strict";

let clickHereText = document.getElementById('click-here');
clickHereText.style.cursor = 'pointer';

clickHereText.addEventListener('click', function () {
  clickHereText.innerHTML = 'you can now move with nature';
});

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let playersToCreate = [];

// Create a new YouTube player
function createPlayer(playerId, elementId, videoId) {
  playersToCreate.push(() => {
    let player = new YT.Player(playerId, {
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        'onReady': function(event) {
          let element = document.getElementById(elementId);

          // Bind the hover event to the element
          element.addEventListener('mouseover', function() {
            player.playVideo();
            document.getElementById(playerId).style.display = 'block'; // Show the player
          });

          element.addEventListener('mouseout', function() {
            player.pauseVideo();
            document.getElementById(playerId).style.display = 'none'; // Hide the player
          });

          // Bind the touchstart event to the element
          element.addEventListener('touchstart', function() {
            player.playVideo();
            document.getElementById(playerId).style.display = 'block'; // Show the player
          });

          // Bind the touchend event to the element
          element.addEventListener('touchend', function() {
            player.pauseVideo();
            document.getElementById(playerId).style.display = 'none'; // Hide the player
          });
        }
      }
    });
  });
}

// Call createPlayer for each video
createPlayer('eagle-player', 'eagles', 'ZFuWYnuu9I8');
createPlayer('jellyfish-player', 'jellyfish', '1rvCfsW_qTA');
createPlayer('manatee-player', 'manatee', 'yPSYdCWRWFA');
createPlayer('kittens-player', 'kittens', '-m_nQT62B4Y');
createPlayer('desert-player', 'desert', 'ydYDqZQpim8');
createPlayer('kalahari-player', 'kalahari', 'fPd7Ys7FC0I');
createPlayer('kenya-player', 'kenya', '39uYW98qOV0');
createPlayer('bay-player', 'bay', 'R34ot1LETK0');
createPlayer('panda-player', 'panda', '3szkFHfr6sA');
// Add more calls to createPlayer as needed

window.onYouTubeIframeAPIReady = function() {
  for (let i = 0; i < playersToCreate.length; i++) {
    playersToCreate[i]();
  }
}