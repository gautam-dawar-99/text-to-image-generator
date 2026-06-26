const btn = document.getElementById("generateBtn");
const image = document.getElementById("resultImage");
const downloadBtn = document.getElementById("downloadBtn");
const status = document.getElementById("status");
const loader = document.getElementById("loader");
const placeholder = document.getElementById("imagePlaceholder");

let currentImageSrc = "";

// Generate Image
btn.addEventListener("click", async () => {

    const prompt = document.getElementById("prompt").value.trim();

    if (!prompt) {
        status.innerText = "⚠️ Please enter an image prompt.";
        return;
    }

    // UI Reset
    btn.disabled = true;
    btn.innerText = "Generating...";

    status.innerText = "🎨 Generating your masterpiece...";

    loader.style.display = "block";
    placeholder.style.display = "none";
    image.style.display = "none";
    downloadBtn.style.display = "none";

    try {

        const response = await fetch("/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        loader.style.display = "none";

        if (!data.success) {
            throw new Error(data.error || "Generation failed.");
        }

        if (data.image) {
            currentImageSrc = data.image;
            image.src = data.image;
        }
        else if (data.b64) {
            currentImageSrc = `data:image/png;base64,${data.b64}`;
            image.src = currentImageSrc;
        }
        else {
            throw new Error("No image returned from server.");
        }

        image.style.display = "block";
        downloadBtn.style.display = "inline-block";

        status.innerText = "✅ Image generated successfully!";

    }
    catch (err) {

        console.error(err);

        loader.style.display = "none";
        placeholder.style.display = "block";

        status.innerText = "❌ " + err.message;
    }
    finally {

        btn.disabled = false;
        btn.innerText = "✨ Generate Image";
    }

});

// Download Image
downloadBtn.addEventListener("click", async () => {

    if (!currentImageSrc) {
        alert("Generate an image first.");
        return;
    }

    try {

        // Base64 Image
        if (currentImageSrc.startsWith("data:image")) {

            const link = document.createElement("a");

            link.href = currentImageSrc;
            link.download = `generated-image-${Date.now()}.png`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return;
        }

        // URL Image
        const response = await fetch(currentImageSrc);

        const blob = await response.blob();

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = `generated-image-${Date.now()}.png`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    }
    catch (err) {

        console.error("Download failed:", err);
        alert("Unable to download the image.");
    }

});