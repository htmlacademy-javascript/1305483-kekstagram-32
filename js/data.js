import {getRandomInteger, getRandomArrayElement, createId} from './util.js';

const Messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const Names = [
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

const Descriptions = [
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

const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 0,
  MAX: 30,
};

const Avatars = {
  MIN: 1,
  MAX: 6,
};

const Photos = {
  MIN: 0,
  MAX: 25,
};

const newId = createId();

const createComment = () => ({
  id: newId(),
  avatar: `img/avatar-${getRandomInteger(Avatars.MIN, Avatars.MAX)}.svg`,
  message: getRandomArrayElement(Messages),
  name: getRandomArrayElement(Names),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(Descriptions),
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({length: getRandomInteger(Comments.MIN, Comments.MAX)}, createComment),
});

const getPhotoArray = () => Array.from ({length: Photos.MAX}, (_, index) => createPhoto(index + 1));

const PhotoArray = getPhotoArray();

export {getPhotoArray};
