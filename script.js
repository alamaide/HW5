
document.getElementById('randomUS').addEventListener('click', randomVacationUS);
document.getElementById('randomEurope').addEventListener('click', randomVacationEurope);

function randomVacationUS() {



    let choices = ["California", "New York", "Florida", "Arizona"];
    let randChoice = Math.floor(Math.random() * choices.length)

    let display_choice = choices[randChoice];
    

    if (display_choice === "California") {
        document.getElementById('vacationUS').innerHTML = "California!";
    } else if (display_choice === "New York") {
        document.getElementById('vacationUS').innerHTML = "New York!";
    
        }    else if (display_choice === "Florida") {
            document.getElementById('vacationUS').innerHTML = "Florida!";
            }    else if (display_choice === "Arizona") 
                document.getElementById('vacationUS').innerHTML = "Arizona!";
    }
    

    function randomVacationEurope() {



        let choices = ["Germany", "France", "Switzerland", "Italy"];
        let randChoice = Math.floor(Math.random() * choices.length)
    
        let display_choice = choices[randChoice];
        
    
        if (display_choice === "Germany") {
            document.getElementById('vacationEurope').innerHTML = "Germany!";
        } else if (display_choice === "France") {
            document.getElementById('vacationEurope').innerHTML = "France!";
        
            }    else if (display_choice === "Switzerland") {
                document.getElementById('vacationEurope').innerHTML = "Switzerland!";
                }    else if (display_choice === "Italy") 
                    document.getElementById('vacationEurope').innerHTML = "Italy!";
        }
        

