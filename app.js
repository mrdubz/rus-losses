const svinosobaki = {
  "planes": 157,
  "helicopters": 140,
  "cannons": 349,
  "grads": 111,
  "drones": 124,
  "ships": 7,
  "ppo": 63,
  "tanks": 732,
  "bmp": 1946,
  "trucks": 1406,
  "tankers": 76,
  "soldiers": 19600
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
