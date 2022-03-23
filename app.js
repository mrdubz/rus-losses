const svinosobaki = {
  "planes": 101,
  "helicopters": 124,
  "cannons": 267,
  "grads": 80,
  "drones": 42,
  "ships": 4,
  "ppo": 47,
  "tanks": 517,
  "bmp": 1578,
  "trucks": 1008,
  "tankers": 70,
  "soldiers": 15600
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
