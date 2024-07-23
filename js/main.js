const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вася',
  'Петя',
  'Маша',
  'Катя',
  'Вовочка',
  'Винни-Пух',
  'Пятачок',
  'Иа',
  'Сова',
  'Кролик',
  'Кот Базилио',
  'Лиса Алиса',
  'Чипполино',
  'Синьор Помидор',
];

const DESCRIPTIONS = [
  'Фото заката',
  'Фото восхода',
  'Эльбрус',
  'Батуми',
  'Гонио',
  'Мачахела',
  'Аджарисцкали',
  'Шекветили',
  'Кобулети',
  'Сололаки',
  'Махинджаури',
  'Сарпи',
  'Квариати',
  'Чакви',
  'Уреки',
];

const LIKES = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS = {
  MIN: 0,
  MAX: 30,
};

const AVATARS = {
  MIN: 1,
  MAX: 6,
};

const PHOTOS = {
  MIN: 0,
  MAX: 25,
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createId = () => {
  let id = 1;
  return () => {
    id++;
    return id;
  }
}

const randomId = createId();

const createComment = () => ({
  id: randomId(),
  avatar: `img/avatar-${getRandomInteger(AVATARS.MIN, AVATARS.MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: Array.from({length: getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)}, createComment),
});

const getPhotoArray = () => Array.from ({length: PHOTOS.MAX}, (_, index) => createPhoto(index + 1));

const PhotoArray = getPhotoArray();

// eslint-disable-next-line no-console
console.log(PhotoArray);
