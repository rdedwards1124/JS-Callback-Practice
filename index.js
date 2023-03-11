const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')


// 11. changed the callback to handleDirectionChange
function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

// 11. changed the callback to handleDirectionChange
move(character).withArrowKeys(100, 250, handleDirectionChange)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


// // 1. Since the direction of our character will change, we will need to track it with a variable
// let direction = null;

// // 2. to keep track of the character's current position with the following variables
// let x = 100; 
// let y = 250;

// // 5. let's wrap the logic we want to run repeatedly in a function
// function moveCharacter() {
//     // 3. the logic that would move the character image based on the current direction
//     if (direction === 'west') {
//         x = x - 1
//     }
//     if (direction === 'north') {
//         y = y + 1
//     }
//     if (direction === 'east') {
//         x = x + 1
//     }
//     if (direction === 'south') {
//         y = y - 1
//     }

//     // 4. finish by using x and y to update the character's left and bottom properties
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
//     // 4a. We need it to run repeatedly, so the character moves continuously when the direction is not null.
// }

// // 6. then will pass that function to setInterval
// // 6a. The setInterval function takes a callback function as its first argument and a certain number of milliseconds as its second argument. It then calls the callback repeatedly, waiting the specified number of milliseconds between each call
// setInterval(moveCharacter, 1)
// /* 7b. be careful not to call the function while passing it!!
//     like this: setInterval(moveCharacter(), 1)*/


// // 7. Rather than defining moveCharacter and referencing it by name to pass it to setInterval, we could define the function inline similarly to how we have passed addEventListener callback functions
// /*--------------------------------------------------------

// setInterval(function(){ 
//     if(direction === 'west'){
//         x = x - 1
//     }
//     if(direction === 'north'){
//         y = y + 1
//     }
//     if(direction === 'east'){
//         x = x + 1
//     }
//     if(direction === 'south'){
//         y = y - 1
//     }
//     character.style.left = x + 'px'
//     character.style.bottom = y + 'px'
// }, 1)
// 7a. This will run exactly the same as our previous logic
// ----------------------------------------------------------*/

// // 8. Now that we can move the character by setting the direction variable, let's use event listeners to change the direction whenever the user presses one of the arrow keys
// // 8a. There is a DOM event we can listen for named keydown, which will fire anytime the user presses a key
// // 8b. Notice we are using another callback function here. The addEventListener receives the inline function we are passing, calls it whenever the event we specify fires, and passes in the e object as an argument
// document.addEventListener('keydown', function(e){
//     if (e.repeat) return;
//     // 8e. The keydown event fires multiple times as long as a user holds down a key. To make our logic simpler, we will use this line to skip any repeat events
//     if (e.key === 'ArrowLeft') {
//         direction = 'west'
//     }
//     if (e.key === 'ArrowUp') {
//         direction = 'north'
//     }
//     if (e.key === 'ArrowRight') {
//         direction = 'east'
//     }
//     if (e.key === 'ArrowDown') {
//         direction = 'south'
//     }
// })
// // 8c. Recall "e" is an object containing details about the event that fired
// // 8d. Inside our callback function, we will need to check which key was pressed. We can do this using e.key. We will check e.key and, depending on its value, change the character's direction accordingly

// // 9. one more event listener to stop the character when the user releases a key
// // 9a. without this line, the character will continously move without stopping...
// document.addEventListener('keyup', function(e){
//     direction = null
// })




