const pies = [
  {
    name: "Dutch Apple Pie",
    ingredients: "apples,sugar,butter,nutmeg,dutch people",
    bakeTemp: 5000,
    drinkPairing: "Earl Grey Tea",
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg",
    instructor: "Doc",
    iceCream: "Vanilla"
  },
  {
    name: "Berry Pie",
    ingredients: "berries",
    bakeTemp: 400,
    drinkPairing: "wine",
    imageUrl:
      "https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg",
    instructor: "Doc",
    iceCream: "banana"
  },
  {
    name: "Pumpkin Pie",
    ingredients: "pumpkins, nutmeg, cinnamon, graham crackers, pilgrims",
    bakeTemp: 42,
    drinkPairing: "egg nog",
    imageUrl:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg",
    instructor: "Aja",
    iceCream: "Vanilla"
  },
  {
    name: "Shoo Fly Pie",
    ingredients: "Molasses, nutmeg, cinnamon, butter, graham cracker ",
    bakeTemp: 1234,
    drinkPairing: "Apple Cider",
    imageUrl:
      "https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg",
    instructor: "Aja",
    iceCream: "Coffee"
  },
  {
    name: "Pecan Pie",
    ingredients: "Pecans, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Milk",
    imageUrl:
      "https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg",
    instructor: "Trinity",
    iceCream: "Vanilla"
  },
  {
    name: "Keylime Pie",
    ingredients: "lemons, sugar, butter, flour",
    bakeTemp: 5000,
    drinkPairing: "Water",
    imageUrl:
      "https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg",
    instructor: "Trinity",
    iceCream: "none"
  }
];

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};
// display buttons on the DOM
const buttons = () => {
  const domString = `
  <button type="button" class="btn btn-primary" id="All">All</button>
  <button type="button" class="btn btn-secondary" id="Trinity">Trinity</button>
  <button type="button" class="btn btn-success" id="Aja">Aja</button>
  <button type="button" class="btn btn-danger" id="Doc">Doc</button>
  `;

  renderToDom("#buttonContainer", domString);
};

// display form on the DOM
const pieForm = () => {
  const domString = `
    <form id="pieFormForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input required type="text" class="form-control" id="name">
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients</label>
        <input required type="text" class="form-control" id="ingredients">
      </div>
      <div class="mb-3">
      <label for="bakeTemp" class="form-label">Bake Temp</label>
      <input required type="number" class="form-control" id="bakeTemp">
      </div>
      <div class="mb-3">
        <label for="drinkPairing" class="form-label">Drink Pairing</label>
        <input required type="text" class="form-control" id="drinkPairing">
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image URL</label>
        <input required type="url" class="form-control" id="imageUrl">
      </div>
      <div class="mb-3">
        <label for="instructor" class="form-label">Instructor</label>
        <input required type="text" class="form-control" id="instructor">
      </div>
      <div class="mb-3">
        <label for="iceCream" class="form-label">Ice Cream</label>
        <input required type="text" class="form-control" id="iceCream">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;

  renderToDom("#pieForm", domString);
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  // TODO: Update the Id's in thie object
  const newPie = {
    name: document.querySelector("#name").value,
    ingredients: document.querySelector("#ingredients").value,
    bakeTemp: document.querySelector("#bakeTemp").value,
    drinkPairing: document.querySelector("#drinkPairing").value,
    imageUrl: document.querySelector("#imageUrl").value,
    instructor: document.querySelector("#instructor").value,
    iceCream: document.querySelector("#iceCream").value
  };
  pies.push(newPie);
  pieBuilder(pies);
  // TODO: Add obj in newPie to the pies Array!
  // TODO: Render pies with the new pie to the DOM

  console.log(pies);
};

const deletePie = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;

  if (targetType === "button") {
    pies.splice(targetId, 1);
    pieBuilder(pies);
  }
};

const pieFormEvents = () => {
  const pieFormElement = document.querySelector("#pieFormForm");
  pieFormElement.addEventListener("submit", handleFormSubmit);
};

const filterPies = (array, instructor) => {
  return array.filter((pieObject) => pieObject.instructor === instructor);
};

const handleButtonClick = (event) => {
  if (event.target.id === "All") {
    pieBuilder(pies);
  }
  if (event.target.id === "Trinity") {
    const trinPies = filterPies(pies, event.target.id);
    pieBuilder(trinPies);
  }
  if (event.target.id === "Aja") {
    const ajasPies = filterPies(pies, event.target.id);
    pieBuilder(ajasPies);
  }
  if (event.target.id === "Doc") {
    const docsPies = filterPies(pies, event.target.id);
    pieBuilder(docsPies);
  }
};

const pieBuilder = (piesArray) => {
  let domString = "";
  piesArray.forEach((pie, i) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <img src="${pie.imageUrl}" class="card-img-top" alt="${pie.name}">
      <div class="card-body">
        <h5 class="card-title">${pie.name}</h5>
        <p class="card-text">${pie.ingredients}</p>
        <button type="button" id=${i} class="btn btn-primary">Delete</button>
      </div>
    </div>
    `;
  });

  renderToDom("#piesContainer", domString);
};

// Handles the button events
const buttonEvents = () => {
  document
    .querySelector("#buttonContainer")
    .addEventListener("click", handleButtonClick);

  document.querySelector("#piesContainer").addEventListener("click", deletePie);
};

const init = () => {
  // this starts the app
  buttons(); // PUT DOM ELEMENTS FIRST
  buttonEvents(); // EVENT LISTNERS AFTER
  pieBuilder(pies);
  pieForm();
  pieFormEvents();
};

init();
