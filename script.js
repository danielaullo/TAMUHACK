// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
    // Function to handle ZIP code submission
    /*function submitZip() {
      const zipInput = document.getElementById('zipInput').value;
  
      if (/^\d{5}$/.test(zipInput)) {
        alert(`ZIP code ${zipInput} submitted!`);
        document.getElementById('zipPopup').classList.add('hidden');
      } else {
        alert('Please enter a valid 5-digit ZIP code.');
      }
    }
  
      // Automatically show the pop-up when the page loads
      window.onload = function() {
      document.getElementById('zipPopup').classList.remove('hidden');
    };*/
  
    function submitState() {
      const stateInput = document.getElementById('zipInput').value;
  
      const validStates = [
          'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 
          'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
      ];
  
      if (validStates.includes(stateInput)){
          alert(`State ${stateInput} submitted!`);
          document.getElementById('zipPopup').classList.add('hidden');
      } else {
          alert('Please enter a valid state.');
      }
    }

    const data = [
        { State: "Alabama", "AC Repair": 427.19, "Battery Replacement": 143.19, "Oil Change": 43.19, "Tire Rotation": 23.19, "Catalytic Converter Replacement": 943.19 },
        { State: "Alaska", "AC Repair": 583.41, "Battery Replacement": 193.41, "Oil Change": 63.41, "Tire Rotation": 33.41, "Catalytic Converter Replacement": 1243.41 },
        { State: "Arizona", "AC Repair": 503.29, "Battery Replacement": 163.29, "Oil Change": 53.29, "Tire Rotation": 28.29, "Catalytic Converter Replacement": 1043.29 },
        { State: "Arkansas", "AC Repair": 383.25, "Battery Replacement": 123.25, "Oil Change": 38.25, "Tire Rotation": 20.25, "Catalytic Converter Replacement": 843.25 },
        { State: "California", "AC Repair": 654.39, "Battery Replacement": 173.39, "Oil Change": 58.39, "Tire Rotation": 30.39, "Catalytic Converter Replacement": 1143.39 },
        { State: "Colorado", "AC Repair": 629.49, "Battery Replacement": 153.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "Connecticut", "AC Repair": 703.51, "Battery Replacement": 183.51, "Oil Change": 63.51, "Tire Rotation": 33.51, "Catalytic Converter Replacement": 1243.51 },
        { State: "Delaware", "AC Repair": 463.31, "Battery Replacement": 143.31, "Oil Change": 48.31, "Tire Rotation": 25.31, "Catalytic Converter Replacement": 963.31 },
        { State: "Florida", "AC Repair": 573.39, "Battery Replacement": 133.39, "Oil Change": 43.39, "Tire Rotation": 23.39, "Catalytic Converter Replacement": 973.39 },
        { State: "Georgia", "AC Repair": 559.29, "Battery Replacement": 133.29, "Oil Change": 43.29, "Tire Rotation": 23.29, "Catalytic Converter Replacement": 953.29 },
        { State: "Hawaii", "AC Repair": 813.59, "Battery Replacement": 223.59, "Oil Change": 73.59, "Tire Rotation": 40.59, "Catalytic Converter Replacement": 1443.59 },
        { State: "Idaho", "AC Repair": 565.41, "Battery Replacement": 143.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 973.41 },
        { State: "Illinois", "AC Repair": 623.49, "Battery Replacement": 163.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "Indiana", "AC Repair": 529.25, "Battery Replacement": 123.25, "Oil Change": 38.25, "Tire Rotation": 20.25, "Catalytic Converter Replacement": 863.25 },
        { State: "Iowa", "AC Repair": 515.29, "Battery Replacement": 113.29, "Oil Change": 38.29, "Tire Rotation": 20.29, "Catalytic Converter Replacement": 843.29 },
        { State: "Kansas", "AC Repair": 549.31, "Battery Replacement": 133.31, "Oil Change": 43.31, "Tire Rotation": 23.31, "Catalytic Converter Replacement": 893.31 },
        { State: "Kentucky", "AC Repair": 533.25, "Battery Replacement": 123.25, "Oil Change": 38.25, "Tire Rotation": 20.25, "Catalytic Converter Replacement": 873.25 },
        { State: "Louisiana", "AC Repair": 583.39, "Battery Replacement": 153.39, "Oil Change": 48.39, "Tire Rotation": 25.39, "Catalytic Converter Replacement": 983.39 },
        { State: "Maine", "AC Repair": 659.51, "Battery Replacement": 173.51, "Oil Change": 58.51, "Tire Rotation": 30.51, "Catalytic Converter Replacement": 1093.51 },
        { State: "Maryland", "AC Repair": 639.49, "Battery Replacement": 163.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "Massachusetts", "AC Repair": 729.59, "Battery Replacement": 193.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1243.59 },
        { State: "Michigan", "AC Repair": 609.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 993.41 },
        { State: "Minnesota", "AC Repair": 649.51, "Battery Replacement": 163.51, "Oil Change": 53.51, "Tire Rotation": 28.51, "Catalytic Converter Replacement": 1043.51 },
        { State: "Mississippi", "AC Repair": 569.31, "Battery Replacement": 133.31, "Oil Change": 43.31, "Tire Rotation": 23.31, "Catalytic Converter Replacement": 913.31 },
        { State: "Missouri", "AC Repair": 559.29, "Battery Replacement": 133.29, "Oil Change": 43.29, "Tire Rotation": 23.29, "Catalytic Converter Replacement": 903.29 },
        { State: "Montana", "AC Repair": 599.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 1023.41 },
        { State: "Nebraska", "AC Repair": 575.39, "Battery Replacement": 143.39, "Oil Change": 43.39, "Tire Rotation": 23.39, "Catalytic Converter Replacement": 953.39 },
        { State: "Nevada", "AC Repair": 633.49, "Battery Replacement": 163.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "New Hampshire", "AC Repair": 693.59, "Battery Replacement": 183.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1143.59 },
        { State: "New Jersey", "AC Repair": 743.61, "Battery Replacement": 203.61, "Oil Change": 73.61, "Tire Rotation": 40.61, "Catalytic Converter Replacement": 1243.61 },
        { State: "New Mexico", "AC Repair": 603.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 1023.41 },
        { State: "New York", "AC Repair": 719.59, "Battery Replacement": 193.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1193.59 },
        { State: "North Carolina", "AC Repair": 573.39, "Battery Replacement": 133.39, "Oil Change": 43.39, "Tire Rotation": 23.39, "Catalytic Converter Replacement": 973.39 },
        { State: "North Dakota", "AC Repair": 623.49, "Battery Replacement": 163.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "Ohio", "AC Repair": 609.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 993.41 },
        { State: "Oklahoma", "AC Repair": 559.29, "Battery Replacement": 133.29, "Oil Change": 43.29, "Tire Rotation": 23.29, "Catalytic Converter Replacement": 903.29 },
        { State: "Oregon", "AC Repair": 665.51, "Battery Replacement": 173.51, "Oil Change": 58.51, "Tire Rotation": 30.51, "Catalytic Converter Replacement": 1093.51 },
        { State: "Pennsylvania", "AC Repair": 649.51, "Battery Replacement": 163.51, "Oil Change": 53.51, "Tire Rotation": 28.51, "Catalytic Converter Replacement": 1043.51 },
        { State: "Rhode Island", "AC Repair": 709.59, "Battery Replacement": 183.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1143.59 },
        { State: "South Carolina", "AC Repair": 583.39, "Battery Replacement": 143.39, "Oil Change": 43.39, "Tire Rotation": 23.39, "Catalytic Converter Replacement": 973.39 },
        { State: "South Dakota", "AC Repair": 599.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 1023.41 },
        { State: "Tennessee", "AC Repair": 559.29, "Battery Replacement": 133.29, "Oil Change": 43.29, "Tire Rotation": 23.29, "Catalytic Converter Replacement": 903.29 },
        { State: "Texas", "AC Repair": 609.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 993.41 },
        { State: "Utah", "AC Repair": 629.49, "Battery Replacement": 163.49, "Oil Change": 53.49, "Tire Rotation": 28.49, "Catalytic Converter Replacement": 1043.49 },
        { State: "Vermont", "AC Repair": 719.59, "Battery Replacement": 193.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1193.59 },
        { State: "Virginia", "AC Repair": 665.51, "Battery Replacement": 173.51, "Oil Change": 58.51, "Tire Rotation": 30.51, "Catalytic Converter Replacement": 1093.51 },
        { State: "Washington", "AC Repair": 709.59, "Battery Replacement": 183.59, "Oil Change": 63.59, "Tire Rotation": 33.59, "Catalytic Converter Replacement": 1143.59 },
        { State: "West Virginia", "AC Repair": 559.29, "Battery Replacement": 133.29, "Oil Change": 43.29, "Tire Rotation": 23.29, "Catalytic Converter Replacement": 903.29 },
        { State: "Wisconsin", "AC Repair": 649.51, "Battery Replacement": 163.51, "Oil Change": 53.51, "Tire Rotation": 28.51, "Catalytic Converter Replacement": 1043.51 },
        { State: "Wyoming", "AC Repair": 599.41, "Battery Replacement": 153.41, "Oil Change": 48.41, "Tire Rotation": 25.41, "Catalytic Converter Replacement": 1023.41 }
      ];

      const stateSelect = document.getElementById("stateInput").value;
      const serviceSelect = document.getElementById("serviceInput").value;
      const priceDisplay = document.getElementById("price-display");
      
      // Populate state dropdown
      data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.State;
        option.textContent = item.State;
        stateSelect.appendChild(option);
      });
      
      // Populate service dropdown
      const services = Object.keys(data[0]).filter(key => key !== "State");
      services.forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        serviceSelect.appendChild(option);
      });
      
      // Display price based on selection
      function displayPrice() {
        const selectedState = stateSelect.value;
        const selectedService = serviceSelect.value;
      
        if (selectedState && selectedService) {
          const stateData = data.find(item => item.State === selectedState);
          const price = stateData[selectedService];
      
          if (price) {
            priceDisplay.textContent = `The price for ${selectedService} in ${selectedState} is $${price.toFixed(2)}`;
          } else {
            priceDisplay.textContent = "Price not available.";
          }
        }
      }
      
      // Add event listeners to dropdowns
      stateSelect.addEventListener("change", displayPrice);
      serviceSelect.addEventListener("change", displayPrice);