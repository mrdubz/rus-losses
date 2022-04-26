const svinosobaki = {
  "planes": 181,
  "helicopters": 154,
  "cannons": 411,
  "grads": 149,
  "drones": 201,
  "ships": 8,
  "ppo": 69,
  "tanks": 884,
  "bmp": 2258,
  "trucks": 1566,
  "tankers": 76,
  "soldiers": 21900
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
