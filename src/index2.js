import QrCodeWithLogo from "qrcode-with-logos";
let qrcode = new QrCodeWithLogo({
  canvas: document.getElementById("canvas"),
  content: "https://madchill.github.io/",
  width: 380,
  //   download: true,
  image: document.getElementById("image"),
  logo: {
    // src: "https://madchill.github.io/star.svg"
    src: "../dist/assets/hexagon-svgrepo-com.svg"
  }
});

// document.getElementById("").onclick = function(){
  
// };
qrcode.toCanvas().then(() => {
  qrcode.toImage().then(() => {
    // qrcode.downloadImage("hello world");
  });
});

