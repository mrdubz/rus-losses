const svinosobaki = {
  "planes": 199,
  "helicopters": 160,
  "cannons": 528,
  "grads": 185,
  "drones": 390,
  "ships": 12,
  "ppo": 87,
  "tanks": 1187,
  "bmp": 2856,
  "trucks": 1997,
  "tankers": 76,
  "soldiers": 26350
}

for (const key in svinosobaki) {
  const element = document.getElementById(key);
  element.innerHTML = svinosobaki[key]
  for (let i= 0; i <= svinosobaki[key] - 1; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    document.getElementById(`${key}_list`).appendChild(div)
  }
}
