const figmaLogo = document.getElementById("figma")!.innerHTML

document.getElementById("figma")!.onclick = (e) => {
  const target = e.target as HTMLElement;
 if (target.classList.contains("logoSection")) {
  target.innerHTML = figmaLogo;
 }
}