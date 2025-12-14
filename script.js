document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgAudio");
  const overlay = document.getElementById("clickOverlay");

  const start = async () => {
    overlay.classList.add("hidden");
    setTimeout(() => overlay.remove(), 600);

    try{
      audio.volume = 0.7;
      audio.muted = false;
      await audio.play();
    }catch(e){}
  };

  overlay.addEventListener("pointerdown", start, { once:true, capture:true });
  overlay.addEventListener("click", start, { once:true, capture:true });
});
