const svinosobaki = {
  "planes": 147,
  "helicopters": 134,
  "cannons": 330,
  "grads": 107,
  "drones": 92,
  "ships": 7,
  "ppo": 54,
  "tanks": 647,
  "bmp": 1844,
  "trucks": 1273,
  "tankers": 76,
  "soldiers": 18300
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
