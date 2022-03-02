const svinosobaki = {
  "planes": 30,
  "helicopters": 31,
  "cannons": 85,
  "grads": 40,
  "drones": 3,
  "ships": 2,
  "ppo": 9,
  "tanks": 211,
  "bmp": 862,
  "trucks": 355,
  "tankers": 60,
  "soldiers": 5840
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
