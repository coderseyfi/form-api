import Music from '../assets/ico/musical-note.png'
import Motion from '../assets/ico/motion-graphic.png'
import Calendar from '../assets/ico/calendar.png'
import Theater from '../assets/ico/theater.png'
import Vector from '../assets/ico/vector.png'
import Console from '../assets/ico/console.png'

export const DUMMY_DASHBOARD = [
    {
        id: 1,
        ico: Music,
        text: 'Musiqi Sənayesi Akademiyası',
    },
    {
        id: 2,
        ico: Motion,
        text: 'Animatorların Akselerasiyası',
        to: '/animator',
    },
    {
        id: 3,
        ico: Calendar,
        text: 'Producers Elevator',
        to: '/procuders',
    },
    {
        id: 4,
        ico: Theater,
        text: 'Komediya Məktəbi'
    },
    {
        id: 5,
        ico: Vector,
        text: 'Qrafik Dizaynda Milli kod'
    },
    {
        id: 6,
        ico: Console,
        text: 'Oyun Tərtibatçılar Emelatxanası'
    },
]