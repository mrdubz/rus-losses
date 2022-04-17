const svinosobaki = {
  "planes": 165,
  "helicopters": 146,
  "cannons": 376,
  "grads": 127,
  "drones": 148,
  "ships": 8,
  "ppo": 66,
  "tanks": 773,
  "bmp": 2002,
  "trucks": 1471,
  "tankers": 76,
  "soldiers": 20300
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
