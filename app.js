const svinosobaki = {
  "planes": 199,
  "helicopters": 158,
  "cannons": 513,
  "grads": 185,
  "drones": 377,
  "ships": 12,
  "ppo": 87,
  "tanks": 1145,
  "bmp": 2764,
  "trucks": 1970,
  "tankers": 76,
  "soldiers": 25650
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
