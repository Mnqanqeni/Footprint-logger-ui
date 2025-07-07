let activities = JSON.parse(localStorage.getItem("activities")) || [];

function addActivity() {
  const category = document.getElementById("category").value;
  const name = document.getElementById("activity").value.toLowerCase();
  const value = activityData[category][name] || 1; // default if not found

  const entry = { name, category, value };
  activities.push(entry);
  localStorage.setItem("activities", JSON.stringify(activities));
  updateUI();
}

function updateUI(filter = 'all') {
  const log = document.getElementById("activity-log");
  const total = document.getElementById("total");
  log.innerHTML = "";

  let sum = 0;
  const filtered = filter === 'all' ? activities : activities.filter(a => a.category === filter);
  
  filtered.forEach((a) => {
    const div = document.createElement("div");
    div.className = "activity-entry";
    div.textContent = `${a.name} (${a.category}): ${a.value} kg`;
    log.appendChild(div);
    sum += a.value;
  });

  total.textContent = sum.toFixed(2);
  updateChart(filtered);
}

function filterActivities(category) {
  updateUI(category);
}

window.onload = () => updateUI();
