const svinosobaki = {
  "planes": 217,
  "helicopters": 187,
  "cannons": 828,
  "grads": 247,
  "drones": 669,
  "ships": 15,
  "ppo": 107,
  "tanks": 1637,
  "bmp": 3811,
  "trucks": 2685,
  "tankers": 66,
  "soldiers": 36900
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
