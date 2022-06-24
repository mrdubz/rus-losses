const svinosobaki = {
  "planes": 216,
  "helicopters": 183,
  "cannons": 759,
  "grads": 241,
  "drones": 622,
  "ships": 14,
  "ppo": 99,
  "tanks": 1507,
  "bmp": 3637,
  "trucks": 2553,
  "tankers": 76,
  "soldiers": 34530
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
