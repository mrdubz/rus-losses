const svinosobaki = {
  "planes": 200,
  "helicopters": 164,
  "cannons": 555,
  "grads": 195,
  "drones": 416,
  "ships": 13,
  "ppo": 89,
  "tanks": 1220,
  "bmp": 2958,
  "trucks": 2087,
  "tankers": 76,
  "soldiers": 27400
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
