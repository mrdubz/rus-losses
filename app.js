const svinosobaki = {
  "planes": 29,
  "helicopters": 29,
  "cannons": 77,
  "grads": 24,
  "drones": 3,
  "ships": 2,
  "ppo": 7,
  "tanks": 198,
  "bmp": 846,
  "trucks": 305,
  "tankers": 60,
  "soldiers": 5900
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
