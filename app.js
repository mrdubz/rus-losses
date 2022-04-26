const svinosobaki = {
  "planes": 184,
  "helicopters": 154,
  "cannons": 411,
  "grads": 149,
  "drones": 205,
  "ships": 8,
  "ppo": 69,
  "tanks": 918,
  "bmp": 2308,
  "trucks": 1643,
  "tankers": 76,
  "soldiers": 22100
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
