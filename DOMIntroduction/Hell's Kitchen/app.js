// 72/100 
function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textarea = document.querySelector('#inputs > textarea');
      const userInput = JSON.parse(textarea.value);
      let restaurants = {};

      // Generate the restaurants object with their workers and their salaries
      for (const entry of userInput) {
         let [restaurantName, workersData] = entry.split(' - ');

         restaurants[restaurantName] = {};
         restaurants[restaurantName].name = restaurantName;
         restaurants[restaurantName].workers = generateSortedWorkersObjects(workersData);
         restaurants[restaurantName].averageSalary = calculateAverageSalary(restaurants[restaurantName].workers);
         restaurants[restaurantName].bestSalary = restaurants[restaurantName].workers[0].salary;
      }

      // Convert the restaurants object into an array and sort members by average salary
      let restaurantsArray = Object.values(restaurants);

      restaurantsArray.sort((a, b) => {
         return b.averageSalary - a.averageSalary;
      });

      // Inject the data into the DOM
      generateDOMElements(restaurantsArray[0]);
   }

   function generateDOMElements(restaurantInformation) {
      const bestRestaurantArea = document.querySelector('#outputs > #bestRestaurant > p');
      const workersArea = document.querySelector('#outputs > #workers > p');
      let bestRestaurantString = `Name: ${restaurantInformation.name} Average Salary: ${restaurantInformation.averageSalary.toFixed(2)} Best Salary: ${restaurantInformation.bestSalary.toFixed(2)}`;
      let workersString = '';

      bestRestaurantArea.textContent = bestRestaurantString;

      for (const worker of restaurantInformation.workers) {
         workersString += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      workersArea.textContent = workersString.trim();

   }

   function generateSortedWorkersObjects(workersString) {
      let workersArray = [];

      for (const worker of workersString.split(', ')) {
         let [name, salary] = worker.split(' ');

         workersArray.push({'name': name, 'salary': Number(salary)});
      }

      workersArray.sort((a, b) => {
         return b.salary - a.salary;
      });

      return workersArray;
   }

   function calculateAverageSalary(workersArray) {
      let workersCount = workersArray.length;
      let total = 0;

      for (const worker of workersArray) {
         total += worker.salary;
      }

      return total / workersCount;
   }
}

// Dummy data
// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
// 
// ["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]