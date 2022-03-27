const svinosobaki = {
  "planes": 121,
  "helicopters": 127,
  "cannons": 294,
  "grads": 93,
  "drones": 50,
  "ships": 7,
  "ppo": 56,
  "tanks": 582,
  "bmp": 1664,
  "trucks": 1144,
  "tankers": 73,
  "soldiers": 16600
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
