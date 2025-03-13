// Set a random background color and a corresponding foreground color.
const changeColor = () => {
  const saturation = 40
  const hue = Math.floor(Math.random() * 360)
  const lightness = Math.floor(Math.random() * 100)
  const bgColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
  const fgColor = `hsl(${hue}, ${saturation}%, ${lightness > 50 ? lightness - 50 : lightness + 50}%)`
  document.body.style.setProperty("--fg-color", fgColor)
  document.body.style.setProperty("--bg-color", bgColor)
}

// Change the color when the page is loaded and when the button is clicked.
document.addEventListener("DOMContentLoaded", () => {
  const colorSwitch = document.getElementById("colorswitch")
  colorSwitch.addEventListener("click", changeColor)
})
