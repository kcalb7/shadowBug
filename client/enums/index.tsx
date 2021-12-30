import { Category, BugFullInfo } from '../types'

export const categories: Category[] = [
  { id: 1, name: 'Coleoptera' },
  { id: 2, name: 'Lepidoptera' },
  { id: 3, name: 'Hymenoptera' },
  { id: 4, name: 'Diptera' },
  { id: 5, name: 'Homoptera' },
  { id: 6, name: 'Hemiptera' },
  { id: 7, name: 'Orthoptera' },
  { id: 8, name: 'Odonata' },
  { id: 9, name: 'Neutoptera' },
  { id: 10, name: 'Blattodea' },
  { id: 11, name: 'Thysanoptera' },
  { id: 12, name: 'Mallophaga' },
  { id: 13, name: 'Phasmatodea' },
  { id: 14, name: 'Mantodea' },
  { id: 15, name: 'Isoptera' },
  { id: 16, name: 'Ephemeroptera' },
  { id: 17, name: 'Dermaptera' },
  { id: 18, name: 'Siphonaptera' },
  { id: 19, name: 'Psocptera' },
  { id: 20, name: 'Thysanura' },
  { id: 21, name: 'Anoplura' }
]

export const bugs: BugFullInfo[] = [
  {
    id: 1,
    name: 'callipogon',
    nickname: '',
    categoryId: 1,
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    date: '22/X/2021',
    matched: false,
    img: {
      bug: '/img/bug/callipogon.jpg',
      bugShadow: '/img/bugShadow/callipogon.png',
      bugInfo: '/img/bugInfo/callipogon.jpg'
    }
  },
  {
    id: 2,
    name: 'callipogon2',
    nickname: '',
    categoryId: 1,
    location: 'São Sebastião do Paraíso, MG, Brasil',
    coordinates: '21º 4’ 54’’ S    47º 1’ 40’’ W',
    lat: null,
    lng: null,
    date: '22/X/2021',
    matched: false,
    img: {
      bugShadow: '/img/bug/callipogon.jpg',
      bug: '/img/bugShadow/callipogon.png',
      bugInfo: '/img/bugInfo/callipogon.jpg'
    }
  }
]