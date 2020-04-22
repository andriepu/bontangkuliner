import shuffle from 'lodash.shuffle';

export default {
  isSearch: false,
  filter: '',

  banners: shuffle([
    {
      href: '#',
      image: '/images/merchants/ayam-kremes-juara.jpg',
      text: 'Ayam Kremes Juara',
    }, {
      href: '#',
      image: '/images/merchants/dimsum-juara.jpg',
      text: 'Dimsum Juara',
    }, {
      href: '#',
      image: '/images/merchants/takoichi.jpg',
      text: 'Takoichi',
    }, {
      href: '#',
      image: '/images/merchants/telor-gulung.jpg',
      text: 'Telor Gulung',
    },
  ]),

  products: shuffle([
    {
      href: '#',
      image: '/images/merchants/ayam-kremes-juara.jpg',
      name: 'Ayam Kremes Juara',
    }, {
      href: '#',
      image: '/images/merchants/dimsum-juara.jpg',
      name: 'Dimsum Juara',
    }, {
      href: '#',
      image: '/images/merchants/takoichi.jpg',
      name: 'Takoichi',
    }, {
      href: '#',
      image: '/images/merchants/telor-gulung.jpg',
      name: 'Telor Gulung',
    },
  ]),
};
