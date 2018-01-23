const sharp = require("sharp");

const run = async () => {
  // Fetch image
  const res = await fetch('https://picsum.photos/200');
  // Get buffer from response
  const sourceBuffer = new Buffer(new Uint8Array(await res.arrayBuffer()));
  // Resize image using sharp
  const resizedBuffer = await sharp(sourceBuffer).resize(100).toBuffer();
  // Convert buffer to blob
  const blob = new Blob([resizedBuffer], { type: "image/jpeg" });
  // Create object url from blob
  const url = window.URL.createObjectURL(blob);
};

run();
