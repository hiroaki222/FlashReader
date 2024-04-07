document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({message: "FlashReader"}, function(response) {
      document.getElementById('content').textContent = response.data;
  });

  document.getElementById('skip-previous').addEventListener('click', skip_previous);
  document.getElementById('play-circle').addEventListener('click', play_circle);
  document.getElementById('skip-next').addEventListener('click', skip_next);

  function skip_previous() {
      console.log("skip_previous");
  }
  function play_circle() {
      console.log("play_circle");
  }
  function skip_next() {
      console.log("skip_next");
  }
});
