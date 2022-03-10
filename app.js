const svinosobaki = {
  "planes": 49,
  "helicopters": 81,
  "cannons": 123,
  "grads": 56,
  "drones": 7,
  "ships": 3,
  "ppo": 29,
  "tanks": 335,
  "bmp": 1105,
  "trucks": 526,
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
