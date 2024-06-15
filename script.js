const data = [
    {
      "title": "Work",
      "class": "img",
      "timeframes": {
        "daily": { "current": 5, "previous": 7 },
        "weekly": { "current": 32, "previous": 36 },
        "monthly": { "current": 103, "previous": 128 }
      }
    },
    {
      "title": "Play",
      "class": "img2",
      "timeframes": {
        "daily": { "current": 1, "previous": 2 },
        "weekly": { "current": 10, "previous": 8 },
        "monthly": { "current": 23, "previous": 29 }
      }
    },
    {
      "title": "Study",
      "class": "img3",
      "timeframes": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 4, "previous": 7 },
        "monthly": { "current": 13, "previous": 19 }
      }
    },
    {
      "title": "Exercise",
      "class": "img4",
      "timeframes": {
        "daily": { "current": 1, "previous": 1 },
        "weekly": { "current": 4, "previous": 5 },
        "monthly": { "current": 11, "previous": 18 }
      }
    },
    {
      "title": "Social",
      "class": "img5",
      "timeframes": {
        "daily": { "current": 1, "previous": 3 },
        "weekly": { "current": 5, "previous": 10 },
        "monthly": { "current": 21, "previous": 23 }
      }
    },
    {
      "title": "Self Care",
      "class": "img6",
      "timeframes": {
        "daily": { "current": 0, "previous": 1 },
        "weekly": { "current": 2, "previous": 2 },
        "monthly": { "current": 7, "previous": 11 }
      }
    }
  ];
  
  function updateTimeframe(timeframe) {
    const container = document.getElementById('time-container');
    container.innerHTML = ''; // Clear existing content
  
    data.forEach(item => {
      const timeBox = document.createElement('div');
      timeBox.className = 'time-box';
  
      timeBox.innerHTML = `
        <div class="${item.class}"></div>
        <div class="time-box-text">
          <div class="title">
            <h4>${item.title}</h4>
            <img src="images/icon-ellipsis.svg" alt="ellipsis">
          </div>
          <div class="time-box-content">
            <h2>${item.timeframes[timeframe].current}hrs</h2>
            <p>Last Week - ${item.timeframes[timeframe].previous}hrs</p>
          </div>
        </div>
      `;
  
      container.appendChild(timeBox);
    });

    document.getElementById('daily').style.color = timeframe === 'daily' ? 'white' : '';
    document.getElementById('weekly').style.color = timeframe === 'weekly' ? 'white' : '';
    document.getElementById('monthly').style.color = timeframe === 'monthly' ? 'white' : '';

  }
  

  document.getElementById('daily').addEventListener('click', () => updateTimeframe('daily'));
  document.getElementById('weekly').addEventListener('click', () => updateTimeframe('weekly'));
  document.getElementById('monthly').addEventListener('click', () => updateTimeframe('monthly'));
  
  updateTimeframe('weekly');
  
  


