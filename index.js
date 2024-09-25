// Placeholder for future JavaScript functionality
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0"; // Close sidebar
    } else {
        sidebar.style.width = "250px"; // Open sidebar
    }
}

function loadPage(page) {
    let content = document.getElementById("main-content");

    // Check which page is clicked and load corresponding content
    if (page === "page1") {
        content.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KOI PLUS</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="main-content">
    <div class="app-bar">
      <span class="menu-icon" onclick="toggleSidebar()">&#9776;</span>
        <div class="weather-logo">
            <img src="https://img.icons8.com/ios-filled/50/000000/partly-cloudy-day--v1.png" alt="Weather Icon">
        </div>
        <div class="app-title">
            <strong>WaterQuality Dashboard</strong>
        </div>
    </div>
      <div class="sidebar" id="sidebar">
        <a href="#" class="close-btn" onclick="toggleSidebar()">&times;</a>
        <div class="sidebar-content">
          <a href="#" onclick="loadPage('page1')"><i class="fas fa-home"></i>Dashboard</a>
          <a href="#" onclick="loadPage('page2')"><i class="fas fa-cloud-sun"></i> Internet</a>
          <a href="#" onclick="loadPage('page3')"><i class="fas fa-cog"></i> Database</a>
          <a href="#" onclick="loadPage('page4')"><i class="fas fa-info-circle"></i> Quit</a>
        </div>
    </div>
    <!-- Cards Section -->
    <div class="cards-container3">
      <div class="card3">
          <div class="card-content3">
            <span class="data-number3" id="date">01 Jan 2024</span><span class="data-number3" id="time">12:00:00</span>
          </div>
      </div>
    </div>
    <div class="cards-container">
    <div class="card">
        <div class="card-content">
            <span class="data-number">83<span class="unit">NTU</span></span>
            <img src="/Property/Turbidity.png" class="icon" alt="Turbidity Icon">
            <p class="text">Turbidity</p>
        </div>
    </div>

    <div class="card">
        <div class="card-content">
            <span class="data-number">76<span class="unit">Mg/L</span></span>
            <img src="/Property/Oxygen.png" class="icon" alt="Humidity Icon">
            <p class="text2">Dissolved Oxygen</p>
        </div>
    </div>
    </div>

    <div class="cards-container2">
      <div class="card2">
          <div class="card-content2">
              <span class="data-number2">12<span class="unit2">Volt</span></span>
              <img src="/Property/Pump.png" class="icon2" alt="Thermometer Icon">
              <p class="text">Vout Pump</p>
          </div>
      </div>
  
      <div class="card2">
          <div class="card-content2">
              <span class="data-number2">20<span class="unit2">L/m</span></span>
              <img src="/Property/Water.png" class="icon2" alt="Humidity Icon">
              <p class="text2">Water Flow</p>
          </div>
      </div>
      </div>
    <script src="index.js"></script>
    <script src="script.js"></script>
  </div>
</body>
</html>
        `;
    } else if (page === "page2") {
        content.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>KOI PLUS</title>
            <link rel="stylesheet" href="index.css">
        </head>
            <div id="main-content">
                <div class="app-bar">
                    <span class="menu-icon" onclick="toggleSidebar()">&#9776;</span>
                    <div class="weather-logo">
                    <img src="https://img.icons8.com/ios-filled/50/000000/partly-cloudy-day--v1.png" alt="Weather Icon">
                </div>
                <div class="app-title">
                    <strong>Internet</strong>
                </div>
            </div>
            </div>
            <div class="sidebar" id="sidebar">
                    <a href="#" class="close-btn" onclick="toggleSidebar()">&times;</a>
                <div class="sidebar-content">
                    <a href="#" onclick="loadPage('page1')"><i class="fas fa-home"></i>Dashboard</a>
                    <a href="#" onclick="loadPage('page2')"><i class="fas fa-cloud-sun"></i> Internet</a>
                    <a href="#" onclick="loadPage('page3')"><i class="fas fa-cog"></i> Database</a>
                    <a href="#" onclick="loadPage('page4')"><i class="fas fa-info-circle"></i> Quit</a>
                </div>
            </div>
            <!-- Cards Section -->
            <div class="cards-container3">
                <div class="card3">
                    <div class="card-content3">
                        <span class="data-number3" id="date">01 Jan 2024</span><span class="data-number3" id="time">12:00:00</span>
                    </div>
                </div>
            </div>
        `;
    } else if (page === "page3") {
        content.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>KOI PLUS</title>
            <link rel="stylesheet" href="index.css">
        </head>
            <div id="main-content">
                <div class="app-bar">
                    <span class="menu-icon" onclick="toggleSidebar()">&#9776;</span>
                    <div class="weather-logo">
                    <img src="https://img.icons8.com/ios-filled/50/000000/partly-cloudy-day--v1.png" alt="Weather Icon">
                </div>
                <div class="app-title">
                    <strong>Database</strong>
                </div>
            </div>
            </div>
            <div class="sidebar" id="sidebar">
                    <a href="#" class="close-btn" onclick="toggleSidebar()">&times;</a>
                <div class="sidebar-content">
                    <a href="#" onclick="loadPage('page1')"><i class="fas fa-home"></i>Dashboard</a>
                    <a href="#" onclick="loadPage('page2')"><i class="fas fa-cloud-sun"></i> Internet</a>
                    <a href="#" onclick="loadPage('page3')"><i class="fas fa-cog"></i> Database</a>
                    <a href="#" onclick="loadPage('page4')"><i class="fas fa-info-circle"></i> Quit</a>
                </div>
            </div>
            <!-- Cards Section -->
            <div class="cards-container3">
                <div class="card3">
                    <div class="card-content3">
                        <span class="data-number3" id="date">01 Jan 2024</span><span class="data-number3" id="time">12:00:00</span>
                    </div>
                </div>
            </div>
        `;
    } else if (page === "page4") {
        window.close();
    }
}

// Function to update time and date
function updateTimeAndDate() {
    const now = new Date();
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Format date
    const day = String(now.getDate()).padStart(2, '0');
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    const dateString = `${day} ${month} ${year}`;
    
    // Update the DOM
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Update the clock every second
setInterval(updateTimeAndDate, 1000);

// Call the function once when the page loads
updateTimeAndDate();
