function processImage() {
  var fileInput = document.getElementById('fileInput');
  var resultDiv = document.getElementById('result');
  var orderOutput = document.getElementById('order');
  
  var tongTotal = document.getElementById('tong');
  var tongCount = 0;
  var spoonTotal = document.getElementById('spoon');
  var spoonCount = 0;
  var utensilContainer = document.getElementById('utensilContainer');

  var loadingBar = document.getElementById('loadingBar');
  var loadingBarContainer = document.getElementById('loadingBarContainer');

  resultDiv.innerHTML = '';
  orderOutput.innerHTML = '';

  // Get the selected file
  var file = fileInput.files[0];

  if (file) {
      loadingBar.style.width = '0%';
      loadingBarContainer.style.display = 'block';
      // Perform OCR using Tesseract.js
      Tesseract.recognize(
          file,
          'eng', // Language code (you can change it based on your language)
          { logger: ({ status, progress }) => {
            // Update the loading bar based on OCR progress
            if (status === 'recognizing text') {
              loadingBar.style.width = Math.floor(progress * 100) + '%';
            }
          },
        }
      ).then(({ data: { text } }) => {
          //Extract text between two keywords
            var startKeyword = "Guest:";
            var endKeyword = "Sub.";
            var startIndex = text.indexOf(startKeyword);
            var endIndex = text.indexOf(endKeyword);
            var extractedText = text.substring(startIndex + startKeyword.length, endIndex).trim();
          // Replace newlines with HTML line break tags
          var formattedExtractedText = extractedText.replace(/\n/g, '<br>');
          // Display the formatted OCR result
          orderOutput.innerHTML = formattedExtractedText;
          var regex = /(\d+)\s*(Nugget Tray S|Nugget Tray M|Nugget Tray L|Chil Nug Tray S|Chil Nug Tray M| Chil Nug Tray L|Strip Tray S|Strip Tray M|Strip Tray L|Chil Strp Tray S|Chil Strp Tray M| Chil Strp Tray L|Mac&Chz Tray|Mini Tray S|Mini Tray L|ChillGrl Tray S|ChillGrl Tray M|ChillGrl Tray L|Spcy ChillGrl Tray S|Spcy ChillGrl Tray M|Spcy ChillGrl Tray L|Gr] Ckn Bundle|GRL Wrap Tray S|GRL Wrap Tray M|GRL Wrap Tray L|Veggie Wrp Tray SM|Veggie Wrp Tray MD|Veggie Wrp Tray LG|Spcy Cool Wrp Tray SM|Spcy Cool Wrp Tray MD|Spcy Cool Wrp Tray LG|Salad Tray S|Salad Tray L|Ck Tray S|Ck Tray L|Brownie Tray S|Brownie Tray L|Brwn|Fruit Tray S|Fruit Tray L|)/g;
          var match;

          function pluralize(word, count) {
            return count === 1 ? word : word + 's';
          }

          // Loop through each match
          while ((match = regex.exec(formattedExtractedText)) !== null) {
              var number = parseInt(match[1], 10);
              var keyword = match[2];
              

              // Perform actions based on the keyword
              switch (keyword) {
                    case "YES Paper Goods":

                      break;
                    case "NO Paper Goods":

                      break;
                    //Chilled Nugget Trays
                    case "Chil Nug Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Chilled Nugget Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Chil Nug Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Chilled Nugget Tray M</p>`;
                      tongCount += number;
                      break;
                    case "Chil Nug Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 2} 8oz bottles for ${number} Chilled Nugget Tray L</p>`;
                      tongCount += number;
                      break;
                    //Nuggets Trays
                    case "Nugget Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Nugget Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Nugget Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Nugget Tray M</p>`;
                      tongCount += number;
                      break;
                    case "Nugget Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 2} 8oz bottles for ${number} Nugget Tray L</p>`;
                      tongCount += number;
                      break;
                    //Chilled Strip
                    case "Chil Strp Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Chilled Strip Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Chil Strp Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Chilled Strip Tray M</p>`;
                      tongCount += number;
                      break;
                    case "Chil Strp Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 2} 8oz bottles for ${number} Chilled Strip Tray L</p>`;
                      tongCount += number;
                      break;
                    //Strip Trays
                    case "Strip Tray S":
                        resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Strip Tray S</p>`;
                        tongCount += number;
                        break;
                    case "Strip Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number} 8oz ${pluralize('bottle', number)} for ${number} Strip Tray M</p>`;
                      tongCount += number;
                      break;
                    case "Strip Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 2} 8oz bottles for ${number} Strip Tray L</p>`;
                      tongCount += number;
                      break;
                    //Mac Tray
                    case "Mac&Chz Tray":
                        resultDiv.innerHTML += `<p>${number} ${pluralize('Spoon', number)} for ${number} Mac&Chz Tray</p>`;
                        spoonCount += number;
                        break;
                    //Mini Trays
                    case "Mini Tray S":
                        resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Chick-n-Mini Tray S</p>`;
                        tongCount += number;
                        break;
                    case "Mini Tray L":
                        resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Chick-n-Mini Tray L</p>`;
                        tongCount += number;
                        break;
                    //Grilled Bundle
                    case "Gr] Ckn Bundle":
                        resultDiv.innerHTML += `<p>Grilled Chicken Bundles include ${number * 3} Tongs</p>
                                                <ul>
                                                  <li>${number} ${pluralize('Tong', number)} for 10 Grilled Chicken Filets</li>
                                                  <li>${number} ${pluralize('Tong', number)} for 30 half strips of bacon</li>
                                                  <li>${number} ${pluralize('Tong', number)} for  1 Tray of Lettuce / Tomato / Sliced Colby Cheese</li>
                                                  <li>${number *10} repackaged multigrain buns</li>
                                                  <li>${number *10} Honey Roasted BBQ</li>
                                                </ul>
                        `;
                        tongCount += (number * 3);
                      break;
                    //Chilled Grilled
                    case "ChillGrl Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 6} Honey Roasted BBQ for ${number} Chilled Grilled Tray S</p>`;
                      tongCount += number;
                      break;
                    case "ChillGrl Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 12} Honey Roasted BBQ for ${number} Chilled Grilled Tray M</p>`;
                      tongCount += number;
                      break;
                    case "ChillGrl Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 16} Honey Roasted BBQ for ${number} Chilled Grilled Tray L</p>`;
                      tongCount += number;
                      break;
                    //Spicy Chilled Grilled
                    case "Spcy ChillGrl Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 6} Honey Roasted BBQ for ${number} Spicy Chilled Grilled Tray S</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Spcy ChillGrl Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 12} Honey Roasted BBQ for ${number} Spicy Chilled Grilled Tray M</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Spcy ChillGrl Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 16} Honey Roasted BBQ for ${number} Spicy Chilled Grilled Tray L</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    //Grilled Wraps
                    case "GRL Wrap Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 3} dressing packets for ${number} Grilled Wray Tray S</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "GRL Wrap Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 5} dressing packets for ${number} Grilled Wray Tray M</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;s
                      break;
                     case "GRL Wrap Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 7} dressing packets for ${number} Grilled Wray Tray L</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    //Spicy Grilled Wraps
                    case "Spcy Cool Wrp Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 3} dressing packets for ${number} Spicy Grilled Wray Tray S</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Spcy Cool Wrp Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 5} dressing packets for ${number} Spicy Grilled Wray Tray M</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Spcy Cool Wrp Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 7} dressing packets for ${number} Spicy Grilled Wray Tray L</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    //Veggie Wraps
                    case "Veggie Wrp Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 3} dressing packets for ${number} Veggie Wray Tray S</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Veggie Wrp Tray M":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 5} dressing packets for ${number} Veggie Wray Tray M</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    case "Veggie Wrp Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} and ${number * 7} dressing packets for ${number} Veggie Wray Tray L</p><p>If guest doesn't specify a dressing, use Avocado Lime Ranch</p>`;
                      tongCount += number;
                      break;
                    //Salad Tray
                    case "Salad Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Salad Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Salad Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Salad Tray L</p>`;
                      tongCount += number;
                      break;
                    //Fruit Tray
                    case "Fruit Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Spoon', number)} for ${number} Fruit Tray S</p>`;
                    spoonCount += number;
                      break;
                    case "Fruit Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Spoon', number)} for ${number} Fruit Tray L</p>`;
                      spoonCount += number;
                      break;
                    //Brownie Tray
                    case "Brownie Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Brownie Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Brownie Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Brownie Tray L</p>`;
                      tongCount += number;
                      break;
                    //Brownie & Cookie Tray
                    case "Brwn":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Brownie & Cookie Tray</p>`;
                      tongCount += number;
                      break;
                    //Cookie Tray
                    case "Ck Tray S":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Cookie Tray S</p>`;
                      tongCount += number;
                      break;
                    case "Ck Tray L":
                      resultDiv.innerHTML += `<p>${number} ${pluralize('Tong', number)} for ${number} Cookie Tray L</p>`;
                      tongCount += number;
                      break;
                  // Add more cases for additional keywords
              }
          } 
            utensilContainer.style.display = 'block';
            tongTotal.innerHTML = `Tongs: ${tongCount}`;
            spoonTotal.innerHTML = `Spoons: ${spoonCount}`;
            loadingBarContainer.style.display = 'none';
      }).catch(error => {
          console.error(error);
          resultDiv.textContent = 'Error processing image';
      });
  } else {
      resultDiv.textContent = 'Please select an image';
  }
}