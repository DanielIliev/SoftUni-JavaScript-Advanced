window.addEventListener("load", solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const originalPrice = document.getElementById('original-cost');
  const sellingPrice = document.getElementById('selling-price');
  const tbody = document.getElementById('table-body');
  const carsList = document.getElementById('cars-list');
  const profit = document.getElementById('profit');

  document.getElementById('publish').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Dedo');

    if (make.value && model.value && year.value && fuel.value && originalPrice.value && sellingPrice.value) {
      if (Number(sellingPrice.value) >= Number(originalPrice.value)) {
        addCar(e, make.value, model.value, year.value, fuel.value, originalPrice.value, sellingPrice.value);
        clearFields();
      }
    }
  });

  function addCar(e, _make, _model, _year, _fuel, _originalPrice, _sellingPrice) {
    e.preventDefault();
    const tr = createElement('tr');
    createElement('td', `${_make}`, tr);
    createElement('td', `${_model}`, tr);
    createElement('td', `${_year}`, tr);
    createElement('td', `${_fuel}`, tr);
    createElement('td', `${_originalPrice}`, tr);
    createElement('td', `${_sellingPrice}`, tr);

    tbody.appendChild(tr);

    let td = createElement('td', '', tr);
    let editBtn = createElement('button', 'Edit', td);
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');

    let sellBtn = createElement('button', 'Sell', td);
    sellBtn.classList.add('action-btn');
    sellBtn.classList.add('sell');

    editBtn.addEventListener('click', (e) => editCar(e, _make, _model, _year, _fuel, _originalPrice, _sellingPrice));

    sellBtn.addEventListener('click', (e) => sellCar(e, _make, _model, _year, _originalPrice, _sellingPrice));
  }

  function editCar(e, _make, _model, _year, _fuel, _originalPrice, _sellingPrice) {
    e.preventDefault();

    make.value = _make;
    model.value = _model;
    year.value = _year;
    fuel.value = _fuel;
    originalPrice.value = _originalPrice;
    sellingPrice.value = _sellingPrice;

    e.target.parentNode.parentNode.remove();
  }

  function sellCar(e, _make, _model, _year, _originalPrice, _sellingPrice) {
    e.preventDefault();
    e.target.parentNode.parentNode.remove();

    const li = createElement('li', '', carsList);
    li.classList.add('each-list');
    createElement('span', `${_make} ${_model}`, li);
    createElement('span', `${_year}`, li);
    createElement('span', `${Number(_sellingPrice) - Number(_originalPrice)}`, li);

    let sellProfit = Number(_sellingPrice) - Number(_originalPrice);
    const currentProfit = Number(profit.textContent);
    profit.innerHTML = (currentProfit + Number(sellProfit)).toFixed(2);
  }

  function createElement(type, content, parent) {
    const element = document.createElement(type);

    element.textContent = content;

    if (parent) parent.appendChild(element);

    return element;
  }

  function clearFields() {
    make.value = '';
    model.value = '';
    year.value = '';
    originalPrice.value = '';
    sellingPrice.value = '';
  }
}
