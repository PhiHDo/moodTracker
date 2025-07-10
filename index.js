// console.log('JavaScript is connected!');

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// for testing, probably delete later
function getRatingScore()
{
    let selectRatingScore = 
          document.querySelector('#ratingScore');
    output = 
        selectRatingScore.options
        [selectRatingScore.selectedIndex].value;
        rateValue = document.querySelector('.output').textContent = output;
}

const ratingValues = [1,2,3,4,5,6,7];
function getRatingTestArray()
{

    let selectRatingScore = 
          document.querySelector('#ratingScore');
    let output = 
        selectRatingScore.options[selectRatingScore.selectedIndex].value;

    ratingValues.push(output);

    // rateValue = document.querySelector('.array-values').textContent = output;

    document.querySelector('.array-values').textContent = ratingValues.join(", ");
}

function avgRating()
{
    //for the week/the last 7 days
    let sum = 0;
    let avg = 0;

    ratingValues.forEach(element => {
        sum += Number(element);        
    });

    if (ratingValues.length = 7)
    {
        avg = sum / 7;
        // console.log(avg);
    }    
    document.querySelector('.weekly-avg').textContent = avg.toFixed(2);
}

function createGraph()
{
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

createGraph();