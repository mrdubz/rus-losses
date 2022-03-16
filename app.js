const svinosobaki = {
  "planes": 84,
  "helicopters": 108,
  "cannons": 190,
  "grads": 70,
  "drones": 11,
  "ships": 3,
  "ppo": 43,
  "tanks": 430,
  "bmp": 1375,
  "trucks": 819,
  "tankers": 60,
  "soldiers": 13800
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
