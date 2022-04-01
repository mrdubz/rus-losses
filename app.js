const svinosobaki = {
  "planes": 143,
  "helicopters": 131,
  "cannons": 316,
  "grads": 96,
  "drones": 85,
  "ships": 7,
  "ppo": 54,
  "tanks": 625,
  "bmp": 1751,
  "trucks": 1220,
  "tankers": 76,
  "soldiers": 17700
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
