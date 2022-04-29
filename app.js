const svinosobaki = {
  "planes": 189,
  "helicopters": 155,
  "cannons": 435,
  "grads": 151,
  "drones": 229,
  "ships": 8,
  "ppo": 73,
  "tanks": 986,
  "bmp": 2418,
  "trucks": 1695,
  "tankers": 76,
  "soldiers": 23000
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
