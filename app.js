const svinosobaki = {
  "planes": 46,
  "helicopters": 68,
  "cannons": 117,
  "grads": 50,
  "drones": 7,
  "ships": 3,
  "ppo": 23,
  "tanks": 290,
  "bmp": 999,
  "trucks": 454,
  "tankers": 60,
  "soldiers": 11000
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
