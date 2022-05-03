const svinosobaki = {
  "planes": 194,
  "helicopters": 155,
  "cannons": 475,
  "grads": 162,
  "drones": 291,
  "ships": 10,
  "ppo": 80,
  "tanks": 1062,
  "bmp": 2567,
  "trucks": 1843,
  "tankers": 76,
  "soldiers": 24200
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
