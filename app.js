const svinosobaki = {
  "planes": 48,
  "helicopters": 80,
  "cannons": 120,
  "grads": 56,
  "drones": 7,
  "ships": 3,
  "ppo": 27,
  "tanks": 303,
  "bmp": 1036,
  "trucks": 474,
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
