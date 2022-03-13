const svinosobaki = {
  "planes": 74,
  "helicopters": 86,
  "cannons": 140,
  "grads": 62,
  "drones": 7,
  "ships": 3,
  "ppo": 37,
  "tanks": 374,
  "bmp": 1226,
  "trucks": 600,
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
