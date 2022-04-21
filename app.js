const svinosobaki = {
  "planes": 172,
  "helicopters": 151,
  "cannons": 393,
  "grads": 136,
  "drones": 166,
  "ships": 8,
  "ppo": 67,
  "tanks": 829,
  "bmp": 2118,
  "trucks": 1508,
  "tankers": 76,
  "soldiers": 21000
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
