import seoURLCleaner from './index.js';

let result = Object.is(
  seoURLCleaner('lorem ipsum dolor sit amet'),
  'lorem-ipsum-dolor-sit-amet'
);
console.log(result); // True

result = Object.is(
  seoURLCleaner('Đây là đoạn string có dấu bằng tiếng Việt'),
  'day-la-doan-string-co-dau-bang-tieng-viet'
);
console.log(result); // True

result = Object.is(
  seoURLCleaner('É um facto estabelecido de que um leitor é distraído'),
  'e-um-facto-estabelecido-de-que-um-leitor-e-distraido'
);
console.log(result); // True
