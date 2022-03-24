const svinosobaki = {
  "planes": 108,
  "helicopters": 124,
  "cannons": 280,
  "grads": 82,
  "drones": 50,
  "ships": 5,
  "ppo": 47,
  "tanks": 530,
  "bmp": 1597,
  "trucks": 1033,
  "tankers": 72,
  "soldiers": 15800
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
