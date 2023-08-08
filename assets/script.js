const menuItemsEl = document.querySelector("#menu-items")
const dateEl = document.querySelector("#date")

const queryUrl = "http://localhost:3001/api/shifts/today/2/"

const fetchMenu = () => {
  fetch(queryUrl).then(res=>res.json())
  .then(data => {
    console.log(data)
    if (data.ShiftItems) {
      dateEl.textContent = `${dayjs(data.date).format("MMMM D, YYYY")}`
      data.ShiftItems.forEach(item => renderItem(item.Item.name))
    } else {
      dateEl.textContent = "Nothing posted for today :("
      
    }
  })
  .catch(err => {
    dateEl.textContent = "Nothing posted for today :("
    console.log(err)
  })
}

const renderItem = (item) => {
  const itemEl = document.createElement("li")
  itemEl.textContent = item.name
  itemEl.setAttribute("class", "text-lg font-gray-800 font-bold")
  menuItemsEl.appendChild(itemEl)
}

fetchMenu()
