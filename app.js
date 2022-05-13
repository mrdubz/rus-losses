const svinosobaki = {
  "planes": 200,
  "helicopters": 162,
  "cannons": 542,
  "grads": 193,
  "drones": 405,
  "ships": 13,
  "ppo": 88,
  "tanks": 1205,
  "bmp": 2900,
  "trucks": 2042,
  "tankers": 76,
  "soldiers": 26900
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
