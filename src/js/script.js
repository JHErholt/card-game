function start_game() {
    var arr_of_players = [] // array of all the players
    var number_of_bots = 3 // number of bots
    setup_bots(arr_of_players, number_of_bots)
    setup_player(arr_of_players)

    var deck = build_deck(number_of_bots) // array of all the cards
    shuffle_deck(deck) // shuffle the deck
    
    for (let i = 0; i < 7; i++) { // Deal cards until everyone has 7 cards
        for (let i = 0; i < arr_of_players.length; i++) { // Deal to each player
            let player = arr_of_players[i]
            deal_to_hand(player, deck)
        }
    }
    var open_card = deck.shift() // Deal the open card
    // Game should be all set up now
    // Start the game
    var current_player = arr_of_players[0] // Set the current player to the first player


    console.log(rewrite_card_name(open_card))
}
// Build the players
function setup_bots(arr_of_players, number_of_bots) { // Make an array for each bot, with their gender and name
    // var number_of_players = window.prompt("How many bots do you wish to play with?");
    for (i = 0; i < number_of_bots; i++) {
        let gender = get_gender_for_ai()
        let ai = [player_number = i, player_hand = [], player_gender = gender, player_name = get_name_for_ai(gender), player_type = "Ai"];
        arr_of_players.push(ai)
    }
}
function get_gender_for_ai() { // Get the gender for the ai, using a random number generator
    switch (get_random_number(2)) {
        case 0:
            return "male"
        case 1:
            return "female"
        default:
            return "Error | Gender"
    }
}
function get_name_for_ai(gender) { // Getting the name for the ai, using random numbers and the gender
    var male_names = [
        "Adam",
        "Adrian",
        "Aidan",
        "Alastair",
        "Alan",
        "Alasdair",
        "Benjamin",
        "Bobby",
        "Boris",
        "Bradley",
        "Brett",
        "Bryan",
        "Calum",
        "Cameron",
        "Carson",
        "Charles",
        "Christian",
        "Christopher",
        "Colin",
        "Connor",
        "Curtis",
        "Dale",
        "Damian",
        "Daniel",
        "David",
        "Dylan",
        "Eliot",
        "Ethan",
        "Evan",
        "Fergus",
        "Finlay",
        "Fraser",
        "Gareth",
        "George",
        "Giles",
        "Grant",
        "Harrison",
        "Harry",
        "Hector",
        "Hunter",
        "Iain",
        "Isaac",
        "Jack",
        "Jacob",
        "James",
        "Jason",
        "Jasper",
        "Jebediah",
        "Jeremy",
        "Jermaine",
        "Jerome",
        "Jesse",
        "Joel",
        "John",
        "Jonathan",
        "Joseph",
        "Joshua",
        "Julian",
        "Justin",
        "Kai",
        "Kieran",
        "Kris",
        "Liam",
        "Logan",
        "Lucas",
        "Luke",
        "Lyle",
        "Mark",
        "Martin",
        "Matthew",
        "Max",
        "Michael",
        "Micheal",
        "Mitchell",
        "Nathan",
        "Neil",
        "Norman",
        "Oscar",
        "Owen",
        "Paul",
        "Peter",
        "Philip",
        "Piers",
        "Quincy",
        "Reece",
        "Richard",
        "Robert",
        "Ryan",
        "Samuel",
        "Sebastian",
        "Seth",
        "Shaun",
        "Shawn",
        "Simon",
        "Stephen",
        "Steven",
        "Stewart",
        "Thomas",
        "Timothy",
        "Toby",
        "Tristan",
    ]
    var female_names = [
        "Abigail",
        "Anna",
        "Alissa",
        "Alice",
        "Amanda"
    ]

    switch (gender) {
        case ("male"):
            return male_names[get_random_number(male_names.length)]
        case ("female"):
            return female_names[get_random_number(female_names.length)]
        default:
            return "Error | Name"
    }

}
function setup_player(arr_of_players) { // Make an array for the player, with their gender and name
    let gender = "something"
    let name = "something"
    let player = [player_name = arr_of_players.length, player_hand = [], player_gender = gender, player_name = name, player_type = "Human"]
    arr_of_players.push(player)
}


// Build the deck of cards
function build_deck(number_of_bots) { // Make an array of all the cards
    let deck = [
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", // Yellow numbers
        "yd", "yd", // Yellow draw 
        "yr", "yr", // Yellow reverse
        "ys", "ys", // Yellow skip
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", // Blue numbers
        "bd", "bd", // Blue draw
        "br", "br", // Blue reverse
        "bs", "bs", // Blue skip
        "r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9",  // Red numbers
        "rd", "rd", // Red draw
        "rr", "rr", // Red reverse
        "rs", "rs", // Red skip
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", // Green numbers
        "gd", "gd", // Green draw
        "gr", "gr", // Green reverse
        "gs", "gs", // Green skip
        "wd", "wd", "wd", "wd", // Wild cards draw
        "w", "w", "w", "w" // Wild cards
    ]
    if (number_of_bots > 6) { // If there are more than 6 bots, use 3 whole decks
        let arr_1 = deck
        let arr_2 = deck
        let arr_3 = deck
        return arr_1.concat(arr_2, arr_3)
    } else if (number_of_bots > 3) { // If there are more than 3 bots, use 2 whole decks
        let arr_1 = deck
        let arr_2 = deck
        return arr_1.concat(arr_2) // Else use 1 whole deck
    } else {
        return deck
    }
}
function shuffle_deck(deck) { // Shuffle the deck
    deck.sort(() => Math.random() - 0.5);
}
function deal_to_hand(player, deck) { // Deal one card to the player
    player[1].push(deck.shift())
}


function rewrite_card_name(card) { // Change the card name to a more readable format
    // Split card name at 1 letter
    let adjusted_card = card.split("")
    color = ""
    value = ""
    switch (adjusted_card[0]) {
        case "y":
            color = "Yellow"
            break;
        case "b":
            color = "Blue"
            break;
        case "r":
            color = "Red"
            break;
        case "g":
            color = "Green"
            break;
        default:
            color = "Wild Card"
            break;
    }
    switch (adjusted_card[1]) {
        case "r":
            value = " Reverse"
            break;
        case "s":
            value = " Skip"
            break;
        case "d":
            value = " Draw"
            break;
        case undefined:
            value = ""
            break;
        default:
            value = ` ${adjusted_card[1]}`
            break;
    }
    return color + value
}

function get_random_number(max) { // Get a random number between 0 and max
    return Math.floor(Math.random() * ((max - 1) + 1));
}

start_game() // Starts the game / runs the code