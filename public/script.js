const btn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(image.src);

    const blob = await response.blob();

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `generated-image-${Date.now()}.png`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Download failed:", err);
  }
});


btn.addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;

  const status = document.getElementById("status");

  const image = document.getElementById("resultImage");

  status.innerText = "Generating image...";

  try {
    const response = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await response.json();

    // image.src = data.image;
    if (data.image) {
      image.src = data.image;
    } else if (data.b64) {
      image.src = `data:image/png;base64,${data.b64}`;
    } else {
      console.error("No image returned", data);
    }
    downloadBtn.style.display = "inline-block";

    status.innerText = "Done";
  } catch (err) {
    status.innerText = "Generation failed";
  }
});
