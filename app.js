const svinosobaki = {
  "planes": 29,
  "helicopters": 29,
  "cannons": 74,
  "grads": 21,
  "drones": 3,
  "ships": 2,
  "ppo": 5,
  "tanks": 191,
  "bmp": 816,
  "trucks": 291,
  "tankers": 60,
  "soldiers": 5300
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
