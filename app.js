const svinosobaki = {
  "planes": 93,
  "helicopters": 112,
  "cannons": 205,
  "grads": 72,
  "drones": 11,
  "ships": 3,
  "ppo": 43,
  "tanks": 450,
  "bmp": 1448,
  "trucks": 879,
  "tankers": 60,
  "soldiers": 14200
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
