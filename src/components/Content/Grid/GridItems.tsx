import { GridItem } from "./Grid";

const categories = [
  'Setup',
  'Livros',
  'Suplementos',
  'Performance',
];

export const GridItems: GridItem[] = [
  {
    id: 1,
    imageUrl: 'https://m.media-amazon.com/images/I/51WEsVzT4SL._AC_SX679_.jpg',
    title: 'Suporte de Mesa',
    categories: ['Setup'],
    link: 'https://amzn.to/4hqKZTN'
  },
  {
    id: 2,
    imageUrl: 'https://m.media-amazon.com/images/I/410keNlvUOL._AC_SX679_.jpg',
    title: 'Suporte de Celular',
    categories: ['Setup'],
    link: 'https://www.amazon.com.br/Suporte-Celular-Ajust%C3%A1vel-Articulado-Smartphone/dp/B08R9R6M85/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=LI1FULK1M6WJ&dib=eyJ2IjoiMSJ9.Gtb2GCIinGCjr3naivs0yjuFXGtRGOqulCRS3SU9571q64Q_uir2ecLzfOXaAgx9s-rK5bEzea1K9-hw6S4EySjm2f4A2r_fexp56sNDBdVyBTX9aySnH_FN8DZtSdeN7HZJNLuY5jF9IFtwT74NQ_ew6SMoDRynV9EznLuc-nKQrJ_MRGTjaNYsfRstH1WSQVPk-zt-ZdkPJrmrzsyZPClRcfBPW8O5KfPwdYXRpb-Exc5waaFRMNUXUfi80EOVuPHicdwCHx1Mlna-GBgMRuypn36QSLzFOHWxNhDznBk.ouI0-bHvGZdBClxK37oMP1_pnU56MV_9D2gB_tLFrdA&dib_tag=se&keywords=suporte+celular&psr=EY17&qid=1730244045&s=todays-deals&sprefix=suporte+celular%2Ctodays-deals%2C179&sr=1-1-catcorr'
  },
  {
    id: 3,
    imageUrl: 'https://m.media-amazon.com/images/I/61l5i6CSE6L._AC_SX679_.jpg',
    title: 'Cabo USB Tipo C',
    categories: ['Setup'],
    link: 'https://m.media-amazon.com/images/I/61l5i6CSE6L.__AC_SX300_SY300_QL70_ML2_.jpg'
  },
  {
    id: 4,
    imageUrl: 'https://m.media-amazon.com/images/I/41j8+z2CyPL._AC_SX679_.jpg',
    title: 'Baseus 8 em 1 Docking Station',
    categories: ['Setup'],
    link: 'https://www.amazon.com.br/Baseus-Esta%C3%A7%C3%A3o-ancoragem-adaptador-microSD/dp/B07N6RMSY3/ref=sr_1_5?crid=1VLGJIPAAO2U0&dib=eyJ2IjoiMSJ9.D8ECOmpRa3MSbhMSxWg-jjy47aJSENTspOmNPPT6I4cC6GAdDZDbnWmw17HHUda2Bn0hcTI5_lv0YJQ3Jk1aiPhz8xRDoCs5uE8Ap3gkSC09KgRD7eQXUl2vmRB0au5pXZpJFUvpnytvonTHyVnnrnHT7aUc1_m9bwKPspK_Nk1ZghDF1S9hrIvmIQUMv1zbXqWf6_x0nkkb-AEOSH1ieO-KtaykAszBTOYi7i-oUv3ikdjDzLFr8jhGnQgC8D4Cd5jOdfKRIM25aPDJ2GY1Wt-4ALsBhsTCwZHprCYhtO4.o9yHu1_5qEM1Nu_pDSmrXuHo9zXulCwBO-NRuge-eoY&dib_tag=se&keywords=baseus+8+em+1+docking+station&qid=1730244334&sprefix=baseus+8+em+%2Caps%2C202&sr=8-5&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678'
  },
  {
    id: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/91H5rj22DgL._SY522_.jpg',
    title: 'Caminho - São Josemaría Escrivá',
    categories: ['Livros'],
    link: 'https://www.amazon.com.br/Caminho-Josemaria-Escriva/dp/8554991303/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=K5V608Z4F96S&dib=eyJ2IjoiMSJ9.1IsDKeB_aGk3IKuVu3-8Vf0aJfDpi28Fq1oRwY3tdorJ9QG8hJP53vjSMEIwptvAhGLT1rg81pLz4Vxdrj8cbyIAnuH4kVlx_ddcI88WV6KKHImCWQi5Cn79hVzsRo2R4OiaFJeOZAYgQhnCYp4YxA6NRUrLldYf0vvbpUDO4RQeiXCbFH5CXozGK9H0iLHUaAcHxZEcyeir4PtvnWoPK8Gm5tM74QfdvpjgnJ-mtAWsA8f2PKqFjcMPgoRF1oHu9cYoR4S00mDGOdVURqTjXBaLqJLM8SjZoeCK9D2-vJE.z2JgraUCjDnCwxIx-cAittewqjHPYG2NS3SuwMHemDA&dib_tag=se&keywords=caminho&qid=1730244406&sprefix=caminho%2Caps%2C255&sr=8-1'
  },
  {
    id: 6,
    imageUrl: 'https://m.media-amazon.com/images/I/61eCG6fZFjL._SY522_.jpg',
    title: 'Fé Explicada - Leo J. Trese',
    categories: ['Livros'],
    link: 'https://www.amazon.com.br/f%C3%A9-explicada-Leo-J-Trese/dp/6586964547/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29XJ2WOS70V6K&dib=eyJ2IjoiMSJ9.-mLVZLDL2bwcVMfd8wUkFiRTbS8OHFRfbt_EQuBlq2CsM4ZXAsrB6Sp_stNJVsicVMFJnjM0OZq4oabAr_GdivKMdVrODiDuZbK1VlE2gb3fOHhbqz_nuvsckDar5i2uP4GwSodmPU3nVmRF1WYkvSbSkLl61pUfRmpM3N9V81KQTvlSXE1walAHTj6t589ILiPpecwTcz18ICN5gUlK4QEZcpeK216FuMVyD4i-FJg82Z25ar1x2frqYccFXEvs2wjZ9490Tak51tOAKAtsCUYcdat5fCk03Bsgf_E2IVk.3tKFWSqpOOrZCkKl4D6MvH_wfRuLb6KKYoYzqHJN9qk&dib_tag=se&keywords=f%C3%A9+explicada&qid=1730244615&sprefix=f%C3%A9+explicad%2Caps%2C226&sr=8-1'
  },
  {
    id: 7,
    imageUrl: 'https://m.media-amazon.com/images/I/616Iboh1sJL._AC_SX679_.jpg',
    title: 'Microfone HyperX Solocast',
    categories: ['Setup'],
    link: 'https://www.amazon.com.br/Microfone-HyperX-Solocast-USB-Compat%C3%ADvel/dp/B08KFL3SFV/ref=sr_1_4?crid=1AN43H3A3T7MP&dib=eyJ2IjoiMSJ9.REGjvirsw0ZeHeTH5ePolYzmLEois8LZgLlmJha3sRNf3NKN82MCj2M6Q9TdSYxSo-hz5Dh9uAq4rwp4CUNunWpzEHyUIK_l9y_kMXVxeDfwd4NERCrWV_WOk6yhCb7PMwESlUuWD2HGMpuZumSnrA-3nVhZfbTZfqxr3nMc_UjUOE3nz-qluhZocn4LTdLypjwT1reNYfP2a9dzcobDT_as4APaw1h98J4midWDCkybpxmpmDsLoqmaMOE-CHZNSDmffXUTk3pwctjmPumC307sAjPxbQmo8C1sxmpQ9Qk.cVBbLc9vAGcizaUUgT0JltRBsx_gx9UpQCZA7JwhtnA&dib_tag=se&keywords=microfone+hyperx&qid=1730244720&sprefix=microfone+hy%2Caps%2C373&sr=8-4&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e'
  },
  {
    id: 8,
    imageUrl: 'https://m.media-amazon.com/images/I/613pUlI+W3L._AC_SX679_.jpg',
    title: 'Creatina Monohidratada 500g',
    categories: ['Suplementos'],
    link: 'https://www.amazon.com.br/Creatina-Monohidratada-500g-Importada-Nutrition/dp/B0BL579H1Z/ref=sr_1_3_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26SL2UWOBKWD3&dib=eyJ2IjoiMSJ9.J0soID_wSqiO8DAV0Kj0KXVD5_8Dli6c790ht5LGk4vi39FgXR6aVx_vk-zaFFqFJ4BsA5vtSvGY2j0SlJcpT_g5BIIV6dKwK9XmYEfw6RcntWQCk7KmdSFhG_SSCgRZ1npDMrT10eWx2FUDAndIJSzSt-YR5wLoJkfFr_OX3fGHT_fBZmouduPN7gfiOCs5QrVcvm03dX6l2i7hc5UeTWxsvMz3FUUoJbwk54dvV1MqnNYYNkaJ4j2gyJRM1SE6GaT0qVi99eCar7-kk5nz1YT-uBNGdJw9iBpnLlfToWA.DefstqNTgai2D6eGyoHWSG7JpXH-RytAqRQocG9uAEc&dib_tag=se&keywords=creatina&qid=1730244781&sprefix=creatina+%2Caps%2C243&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
  },
  {
    id: 9,
    imageUrl: 'https://picsum.photos/200/200',
    title: 'Item 9',
    categories: ['Category 2', 'Category 3'],
    link: '#'
  },
  {
    id: 10,
    imageUrl: 'https://picsum.photos/200/300',
    title: 'Item 10',
    categories: ['Category 1', 'Category 3'],
    link: '#'
  },
  {
    id: 11,
    imageUrl: 'https://picsum.photos/200/400',
    title: 'Item 11',
    categories: ['Category 1', 'Category 2', 'Category 3'],
    link: '#'
  },
  {
    id: 12,
    imageUrl: 'https://picsum.photos/500/200',
    title: 'Item 12',
    categories: ['Category 2'],
    link: '#'
  },
  {
    id: 13,
    imageUrl: 'https://picsum.photos/400/400',
    title: 'Item 13',
    categories: ['Category 3'],
    link: '#'
  },
  {
    id: 14,
    imageUrl: 'https://picsum.photos/500/500',
    title: 'Item 14',
    categories: ['Category 1', 'Category 2'],
    link: '#'
  }
];
