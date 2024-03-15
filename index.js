// declaration de la liste des items
const items = [
  { name: "Item 1", price: 1000, qty: 0, hasHeart: false },
  { name: "Item 2", price: 2000, qty: 0, hasHeart: false },
  { name: "Item 3", price: 3000, qty: 0, hasHeart: false },
];

// Creation des items
const cart = document.getElementById("cart-items");
items.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("cart-item"); //on applique le style de la classe "cart-item" sur la div qu'on vient de creer

  const name = document.createElement("span");
  name.textContent = item.name; //contenu de span
  div.appendChild(name); //pour ajouter un dernier element enfant a la liste

  const price = document.createElement("span");
  price.textContent = `$${item.price}`;
  div.appendChild(price);

  const quantity = document.createElement("input");
  quantity.type = "number";
  quantity.value = item.qty;
  quantity.min = 0;
  div.appendChild(quantity);

  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.addEventListener("click", () => {
    item.qty++;
    quantity.value = item.qty;
    calculateTotal();
  });
  div.appendChild(plus);

  const minus = document.createElement("button");
  minus.textContent = "-";
  minus.addEventListener("click", () => {
    if (item.qty > 0) {
      item.qty--;
      quantity.value = item.qty;
      calculateTotal();
    }
  });
  div.appendChild(minus);

  const heart = document.createElement("button");
  heart.classList.add("heart");
  heart.textContent = "♥";
  heart.addEventListener("click", () => {
    item.hasHeart = !item.hasHeart;
    if (item.hasHeart) {
      //if hasheart is true then we change the color to red else to black
      heart.style.color = "red";
    } else {
      heart.style.color = "black";
    }
  });
  div.appendChild(heart);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.addEventListener("click", () => {
    const index = items.findIndex;
    items.splice(index, 1); // Supprimer l'élément de la liste
    div.remove(); // Supprimer l'élément de l'affichage
    calculateTotal(); // Recalculer le total après la suppression
  });

  div.appendChild(deleteButton);
  cart.appendChild(div); //on rajoute la div qui contient tout les items a "cart-items"
});

// Calculer le total
function calculateTotal() {
  let total = 0;
  items.forEach((item) => {
    total += item.qty * item.price;
  });
  document.getElementById("cart-total").textContent = `Total: $${total}`;
}
calculateTotal();
