const svinosobaki = {
  "planes": 154,
  "helicopters": 137,
  "cannons": 347,
  "grads": 111,
  "drones": 119,
  "ships": 7,
  "ppo": 55,
  "tanks": 725,
  "bmp": 1923,
  "trucks": 1387,
  "tankers": 76,
  "soldiers": 19500
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
