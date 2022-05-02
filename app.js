const svinosobaki = {
  "planes": 192,
  "helicopters": 155,
  "cannons": 459,
  "grads": 152,
  "drones": 271,
  "ships": 8,
  "ppo": 80,
  "tanks": 1048,
  "bmp": 2519,
  "trucks": 1824,
  "tankers": 76,
  "soldiers": 23800
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
