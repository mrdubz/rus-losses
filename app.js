const svinosobaki = {
  "planes": 207,
  "helicopters": 174,
  "cannons": 631,
  "grads": 203,
  "drones": 504,
  "ships": 13,
  "ppo": 93,
  "tanks": 1338,
  "bmp": 3270,
  "trucks": 2240,
  "tankers": 76,
  "soldiers": 30150
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
