function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textAreaValue = document.querySelector('#inputs > textarea').value;
      const outputRestaurant = document.querySelector('#outputs > #bestRestaurant > p');
      const outputWorkers = document.querySelector('#outputs > #workers > p');
      let data = JSON.parse(textAreaValue);
      let restaurants = [];
      let sortedWorkers;

      for (let el of data) {
         let [restaurantName, workers] = el.split(' - ');
         let restaurantWorkers =  workers.split(', ');
         let averageSalary = Math.round(averageRestaurantSalary(restaurantWorkers) * 100) / 100;
         let bestSalary = fetchBestSalary(restaurantWorkers);
         sortedWorkers = generateWorkersObject(restaurantWorkers);

         restaurants.push(generateRestaurantStatsObject(restaurantName, sortedWorkers, averageSalary, bestSalary));
      }

      restaurants.sort((a, b) => {
         return b.averageSalary - a.averageSalary;
      });

      let bestRestaurant = `Name: ${restaurants[0].name} Average Salary: ${restaurants[0].averageSalary.toFixed(2)} Best Salary: ${restaurants[0].bestSalary.toFixed(2)}`;

      outputRestaurant.innerHTML = bestRestaurant;

      let workersString = '';

      for (const worker of sortedWorkers) {
         workersString += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      outputWorkers.innerHTML = workersString.trim();
      
   }

   function averageRestaurantSalary(workersArray) {
      let total = 0;
      let workersCount = workersArray.length;

      for (const worker of workersArray) {
         let [name, salary] = worker.split(' ');
         total += Number(salary);
      }

      return total / workersCount;
   }

   function fetchBestSalary(workersArray) {
      let bestSalary = [];

      for (const worker of workersArray) {
         bestSalary.push(Number(worker.split(' ')[1]));
      }

      return Math.max(...bestSalary);
   }

   function generateWorkersObject(workersArray) {
      let workers = [];

      for (const worker of workersArray) {
         let [name, salary] = worker.split(' ');

         workers.push({ 'name': name, 'salary': Number(salary)});
      }

      workers.sort((a, b) => {
         return b.salary - a.salary;
      });

      return workers;
   }

   function generateRestaurantStatsObject(name, workers, averageSalary, bestSalary) {
      return {
         name,
         workers,
         bestSalary,
         averageSalary
      }
   }
}

// Dummy data
// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
// 
// ["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]