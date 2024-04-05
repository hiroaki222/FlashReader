document.addEventListener('DOMContentLoaded', function() {
  chrome.runtime.sendMessage({message: "FlashReader"}, function(response) {
    document.getElementById('content').textContent = response.data;
  });
});