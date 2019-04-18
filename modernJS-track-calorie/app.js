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
    getItemByID(id) {
      let found = null;
      // Loop through the items.
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem(item) {
      const newItem = item;
      data.currentItem = newItem;
    },
    getCurrentItem() {
      return data.currentItem;
    },
    getTotalCalories() {
      let total = 0;
      // Loop through all items
      data.items.forEach((item) => {
        total += item.calories;
      });
      // Set total calories data
      data.totalCalories = total;
      // Return total
      return data.totalCalories;
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
    totalCalories: '.total-calories',
    itemNameInput: '#item-name',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
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
    addItemToFrom() {
      const { name, calories } = ItemCtrl.getCurrentItem();
      document.querySelector(UISelectors.itemNameInput).value = name;
      document.querySelector(UISelectors.itemCaloriesInput).value = calories;
      UICtrl.showEditState();
    },
    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories(totalCaloriesNum) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCaloriesNum;
    },
    clearInitialState() {
      UICtrl.clearInputFields();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
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
      // Get total calories
      const totalCalories = _ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      _UICtrl.showTotalCalories(totalCalories);
      // Clear the input fields.
      _UICtrl.clearInputFields();
    }
    e.preventDefault();
  };

  // Update item submit.
  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    if (e.target.classList.contains('edit-item')) {
      // Get list item ID
      const listItem = e.target.parentNode.parentNode.id;
      // Break into an array and get the number as int.
      const ItemID = parseInt(listItem.split('-')[1], 10);
      // Get item
      const itemToEdit = _ItemCtrl.getItemByID(ItemID);
      // Set current item
      _ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to form
      _UICtrl.addItemToFrom();
    }
  };

  // Load initial event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = _UICtrl.getSelectors();
    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);
  };

  // Public methods
  return {
    init() {
      // Clear initial state - hide buttons.
      _UICtrl.clearInitialState();
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
      // Get total calories
      const totalCalories = _ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      _UICtrl.showTotalCalories(totalCalories);
      // Load event listeners.
      loadEventListeners();
    },
  };
}(ItemCtrl, UICtrl));

// Initialize app
App.init();
