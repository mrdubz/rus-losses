const svinosobaki = {
  "planes": 77,
  "helicopters": 90,
  "cannons": 150,
  "grads": 68,
  "drones": 8,
  "ships": 3,
  "ppo": 37,
  "tanks": 389,
  "bmp": 1249,
  "trucks": 617,
  "tankers": 60,
  "soldiers": 12000
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
