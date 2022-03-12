const svinosobaki = {
  "planes": 58,
  "helicopters": 83,
  "cannons": 135,
  "grads": 62,
  "drones": 7,
  "ships": 3,
  "ppo": 33,
  "tanks": 362,
  "bmp": 1205,
  "trucks": 558,
  "tankers": 60,
  "soldiers": 12000
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
