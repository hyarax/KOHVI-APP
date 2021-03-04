const coffeLatteData = [
  {
    id: '1',
    image: require('../images/AvocadoCoffee.png'),
    title: 'Avocado Coffee',
    price: '23.000',
    sizeName: 'Regular',
    sizeNumber: '300ml',
    crust: 'Extra Sugar',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'Milk',
        image: require('../images/coklatsusu.png'),
      },
      {
        id: '2',
        name: 'avocado',
        image: require('../images/avocado.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/IrishCoffee.png'),
    title: 'Irish Coffee',
    price: '23.000',
    sizeName: 'Large',
    sizeNumber: '600ml',
    crust: 'Less Sugar',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'Milk',
        image: require('../images/coklatsusu.png'),
      },
      {
        id: '2',
        name: 'regal',
        image: require('../images/regal.png'),
      },
      {
        id: '3',
        name: 'cereal',
        image: require('../images/cereal.png'),
      },
    ],
  },
];

export default coffeLatteData;
