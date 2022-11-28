fetch('../data/data.json')
.then((res) => {
  return res.json()
})
.then((data) => {
  let laptops = data.laptops
  console.table(laptops)
})