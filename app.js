const svinosobaki = {
  "planes": 39,
  "helicopters": 40,
  "cannons": 105,
  "grads": 50,
  "drones": 3,
  "ships": 2,
  "ppo": 19,
  "tanks": 269,
  "bmp": 945,
  "trucks": 409,
  "tankers": 60,
  "soldiers": 10000
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
