export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Entrantes',
    items: [
      {
        name: 'Tartar de atún rojo',
        description: 'Atún rojo de Burela, aguacate, sésamo y aceite de yuzu sobre crisoma de arroz.',
        price: '18',
        tags: ['Firma', 'Sin gluten'],
      },
      {
        name: 'Vieiras a la plancha',
        description: 'Vieiras de Galicia sobre puré de patata trufado y reducción de Pedro Ximénez.',
        price: '22',
        tags: ['Firma'],
      },
      {
        name: 'Carpaccio de ternera',
        description: 'Láminas de ternera gallega, albahaca, parmesano curado 24 meses y aceite de oliva Arbequina.',
        price: '16',
        tags: ['Sin gluten'],
      },
      {
        name: 'Croquetas de jamón ibérico',
        description: 'Cremosas por dentro, crujientes por fuera. Jamón ibérico de bellota curado 36 meses.',
        price: '12',
        tags: [],
      },
    ],
  },
  {
    id: 'mains',
    label: 'Principales',
    items: [
      {
        name: 'Risotto de setas silvestres',
        description: 'Arroz Carnaroli, setas de temporada, parmesano y mantequilla noisette.',
        price: '24',
        tags: ['Vegetariano'],
      },
      {
        name: 'Bacalao confitado',
        description: 'Lomo de bacalao sobre pil-pil de pimientos asados y olivas negras.',
        price: '28',
        tags: ['Firma', 'Sin gluten'],
      },
      {
        name: 'Entrecôte de vaca gallega',
        description: '300 g de entrecôte madado 45 días, patata soufflé y salsa de pimienta verde.',
        price: '34',
        tags: ['Firma'],
      },
      {
        name: 'Ravioli de langostino',
        description: 'Pasta fresca rellena de langostinos del Mediterráneo, bisque de marisco y caviar de trucha.',
        price: '26',
        tags: [],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Postres',
    items: [
      {
        name: 'Tarta de chocolate negro 70%',
        description: 'Bizcocho húmedo, ganache de chocolate de origen y helado de avellana tostada.',
        price: '12',
        tags: ['Firma', 'Vegetariano'],
      },
      {
        name: 'Crema catalana moderna',
        description: 'Crema quemada, crujiente de azúcar y sorbete de cítricos de Murcia.',
        price: '10',
        tags: ['Vegetariano', 'Sin gluten'],
      },
      {
        name: 'Queso artesano con membrillo',
        description: 'Selección de tres quesos curados, dulce de membrillo y nueces de California.',
        price: '14',
        tags: ['Vegetariano', 'Sin gluten'],
      },
    ],
  },
];

export interface WineItem {
  name: string;
  origin: string;
  note: string;
  price: string;
}

export const wines: WineItem[] = [
  {
    name: 'Dominio de Pingus',
    origin: 'Ribera del Duero',
    note: 'Tinto intenso, especiado y de larga guarda.',
    price: '180',
  },
  {
    name: 'Recaredo Turó d\'en Mota',
    origin: 'Penedès',
    note: 'Cava brut nature gran reserva, 12 años de crianza.',
    price: '95',
  },
  {
    name: 'R. López de Heredia Viña Tondonia',
    origin: 'Rioja',
    note: 'Tinto clásico, elegante y perfectamente afinado.',
    price: '120',
  },
  {
    name: 'Avancia Godello',
    origin: 'Valdeorras',
    note: 'Blanco mineral, fresco y de gran estructura.',
    price: '42',
  },
];
