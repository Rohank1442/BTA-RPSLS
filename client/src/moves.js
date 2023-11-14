import lizardIcon from './images/lizard.png'
import paperIcon from './images/paper.png'
import rockIcon from './images/rock.png'
import scissorsIcon from './images/scissors.png'
import spockIcon from './images/spock.png'

export const Move = {
    Null: 'Null',
    Rock: 'Rock',
    Paper: 'Paper',
    Scissors: 'Scissors',
    Lizard: 'Lizard',
    Spock: 'Spock'
}

export const moves = [
    Move.Rock,
    Move.Paper,
    Move.Scissors,
    Move.Lizard,
    Move.Spock
];

export const movesIcons = [
    rockIcon,
    paperIcon,
    scissorsIcon,
    lizardIcon,
    spockIcon
];