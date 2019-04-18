/* eslint-disable  func-names */

// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure
  const data = {
    items: [
      /* { id: 0, name: 'Steak Dinner', calories: 1200 },
      { id: 1, name: 'Cookie', calories: 400 },
      { id: 2, name: 'Eggs', calories: 300 } */
    ],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    getItems() {
      return data.items;
    },
    addItem(name, calories) {
      let ID;
      // Create new item ID (auto increment)
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // convert the calories to string to number.
      const calorieInt = parseInt(calories, 10);
      // Create a new item using our details.
      const newItem = new Item(ID, name, calorieInt);
      // Add new item to the items array.
      data.items.push(newItem);
      // return new item for further use.
      return newItem;
    },
    logData() {
      return data;
    },
  };
}());

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemCaloriesInput: '#item-calories',
    itemNameInput: '#item-name',
    itemList: '#item-list',
    addBtn: '.add-btn',
  };

  // Public methods
  return {
    populateItemList(items) {
      let html = '';
      // Loop over each item.
      items.forEach((item) => {
        // Add each item to the html placeholder.
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });
      // Inject placeholder list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem(item) {
      // Show the list.
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add it's class
      li.className = 'collection-item';
      // Add the id.
      li.id = `item-${item.id}`;
      // Add the html.
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // Inject the item into the dom.
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    clearInputFields() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    getSelectors() {
      return UISelectors;
    },
  };
}());

// App Controller
const App = (function (_ItemCtrl, _UICtrl) {
  // Add Item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = _UICtrl.getItemInput();
    // Check the name and calorie input.
    if (input.name !== '' && input.calories !== '') {
      // reference add item
      const newItem = _ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list.
      _UICtrl.addListItem(newItem);
      // Clear the input fields.
      _UICtrl.clearInputFields();
    }
    e.preventDefault();
  };

  // Load initial event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = _UICtrl.getSelectors();
    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  };

  // Public methods
  return {
    init() {
      // Fetch items from data structure.
      const items = ItemCtrl.getItems();
      // Check if there are any items
      if (items.length === 0) {
        // IF 0, hide the list.
        _UICtrl.hideList();
      } else {
        // Populate list with the items.
        _UICtrl.populateItemList(items);
      }
      // Load event listeners.
      loadEventListeners();
    },
  };
}(ItemCtrl, UICtrl));

// Initialize app
App.init();
