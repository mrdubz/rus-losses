const svinosobaki = {
  "planes": 150,
  "helicopters": 135,
  "cannons": 332,
  "grads": 107,
  "drones": 96,
  "ships": 7,
  "ppo": 55,
  "tanks": 684,
  "bmp": 1861,
  "trucks": 1324,
  "tankers": 76,
  "soldiers": 18600
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
