const svinosobaki = {
  "planes": 31,
  "helicopters": 31,
  "cannons": 90,
  "grads": 42,
  "drones": 3,
  "ships": 2,
  "ppo": 11,
  "tanks": 217,
  "bmp": 900,
  "trucks": 374,
  "tankers": 60,
  "soldiers": 9000
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
