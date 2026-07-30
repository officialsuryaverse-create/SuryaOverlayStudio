function generateOverlay() {

    let heading = document.getElementById("heading").value;
    let ticker = document.getElementById("ticker").value;
    let logo = document.getElementById("logo").value;
    let speed = document.getElementById("speed").value;
    let size = document.getElementById("fontsize").value;
    let height = document.getElementById("height").value;
    let color = document.getElementById("color").value;
    let live = document.getElementById("live").checked;

    let url =
    "overlay.html?heading=" + encodeURIComponent(heading) +
    "&ticker=" + encodeURIComponent(ticker) +
    "&logo=" + encodeURIComponent(logo) +
    "&speed=" + speed +
    "&size=" + size +
    "&height=" + height +
    "&color=" + encodeURIComponent(color) +
    "&live=" + live;

    document.getElementById("result").innerHTML =
    "<b>Overlay Link:</b><br>" + url;

}