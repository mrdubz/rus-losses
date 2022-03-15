const svinosobaki = {
  "planes": 81,
  "helicopters": 95,
  "cannons": 150,
  "grads": 68,
  "drones": 9,
  "ships": 3,
  "ppo": 37,
  "tanks": 404,
  "bmp": 1279,
  "trucks": 640,
  "tankers": 60,
  "soldiers": 13500
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
