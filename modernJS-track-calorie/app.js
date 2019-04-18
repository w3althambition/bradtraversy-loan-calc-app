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
    items: [{ id: 0, name: 'Steak Dinner', calories: 1200 }, { id: 1, name: 'Cookie', calories: 400 }, { id: 2, name: 'Eggs', calories: 300 }],
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData() {
      return data;
    },
  };
}());

// UI Controller
const UICtrl = (function () {
  // Public methods
  return {};
}());

// App Controller
const App = (function (_ItemCtrl, _UICtrl) {
  // Public methods
  return {
    init() {
      console.log('Initializing app..');
    },
  };
}(ItemCtrl, UICtrl));

// Initialize app
App.init();
