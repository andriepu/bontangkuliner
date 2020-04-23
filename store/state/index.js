import shuffle from 'lodash.shuffle';

export default {
  isSearch: false,
  filter: '',

  banners: shuffle([
    {
      href: 'https://toko.ly/dimsumjuarabtg',
      image: '/images/merchants/ayam-kremes-juara.jpg',
      text: 'Ayam Kremes Juara',
    }, {
      href: 'https://toko.ly/dimsumjuarabtg',
      image: '/images/merchants/dimsum-juara.jpg',
      text: 'Dimsum Juara',
    }, {
      href: undefined,
      image: '/images/merchants/takoichi.jpg',
      text: 'Takoichi',
    }, {
      href: undefined,
      image: '/images/merchants/telor-gulung.jpg',
      text: 'Telor Gulung',
    },{
      href: 'https://instagram.com/freshmilk.bontang?igshid=qewcssxkgixp',
      image: '/images/merchants/FRESHMILK_THAITEA_FA-02.png',
      name: 'FRESHMILK THAITEA',
    },
  ]),

  topProducts: shuffle([
    {
      href: 'https://toko.ly/dimsumjuarabtg',
      image: '/images/merchants/ayam-kremes-juara.jpg',
      name: 'Ayam Kremes Juara',
    }, {
      href: 'https://toko.ly/dimsumjuarabtg',
      image: '/images/merchants/dimsum-juara.jpg',
      name: 'Dimsum Juara',
    }, {
      href: undefined,
      image: '/images/merchants/takoichi.jpg',
      name: 'Takoichi',
    },
  ]),

  products: shuffle([
     {
      href: undefined,
      image: '/images/merchants/telor-gulung.jpg',
      name: 'Telor Gulung',
    },{
      href: 'https://instagram.com/freshmilk.bontang?igshid=qewcssxkgixp',
      image: '/images/merchants/FRESHMILK_THAITEA_FA-02.png',
      name: 'FRESHMILK THAITEA',
    },
  ]),
};
