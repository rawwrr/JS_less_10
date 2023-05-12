/*
1. Создать новый массив, добавив для каждого актера свойство age и посчитать его, учитывая текущий год (найти способ, как получать текущий год с помощью JS)

For example, [
  {
    ...,
    actors: [
      ...,
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
        age: 44
      }
    ]
  }
]

2. Создать массив объектов: один объект - это один жанр фильмов, имеющий структуру:
[
  {
    name: "Thriller",
    movies: ["Plane", "Sharper"]
  },
  {
    name: "Adventure",
    movies: ["Guardians of the Galaxy Vol. 3", "Plane"]
  }
]

и т.п.

!Должны быть все жанры, которые есть в массиве с фильмами: thriller, drama, comedy, adventure, crime etc.

3. Верстка https://www.figma.com/file/HzaZ6wPbGOesItfapGBJ4H/Untitled?type=design&node-id=0-1&t=PXZwt1h137UwOf2a-0

Создать функцию, которая принимает в себя id фильма из массива

getMovie(3)

const getMovie = (id) => { ... }

В зависимости от ID заполнять страницу данными из объекта фильма

Все картинки должны отображаться

О рейтинге:

0 - 5 (красный)
5 - 8 (желтый)
8 - 10 (зеленый)

4. При наведении на рейтинг - открывается окошко, где юзер может оценить фильм
Форма состоит из 2 элементов: input and submit button

В инпут он вводит свой рейтинг, нажимает на кнопку "Rate" и он выводится в блоке с рейтингом (средний)

For example, если рейтинг был 8, а юзер оценил на 10, то вывести срейдний 9.
*/

const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: null,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];

// # 1. Создать новый массив, добавив для каждого актера свойство age и посчитать его, учитывая текущий год (найти способ, как получать текущий год с помощью JS)
// const newArrMov = (arrMovie) => {
//   return arrMovie.map((arrActor) => {
//     return arrActor.actors.map((birth) => {
//       let currentYear = new Date().getFullYear();

//       if (birth.birthyear) {
//         currentYear -= birth.birthyear;
//       } else {
//         currentYear = null;
//       }

//       return { ...birth, age: currentYear };
//     });
//   });
// };

// console.log(newArrMov(movies));

// # 2. Создать массив объектов: один объект - это один жанр фильмов, имеющий структуру:
// [
//   {
//     name: "Thriller",
//     movies: ["Plane", "Sharper"]
//   },
//   {
//     name: "Adventure",
//     movies: ["Guardians of the Galaxy Vol. 3", "Plane"]
//   }
// ]

// и т.п.

// !Должны быть все жанры, которые есть в массиве с фильмами: thriller, drama, comedy, adventure, crime etc.

// const genres = movies.reduce((acc, movie) => {
//   movie.genre.forEach((genre) => {
//     if (acc.includes(genre) === false) {
//       acc.push(genre);
//     }
//   });
//   return acc;
// }, []);

// const genresMovies = genres.map((genre) => {
//   return {
//     name: genre,
//     movies: movies
//       .filter((movie) => movie.genre.includes(genre))
//       .map((movie) => movie.title),
//   };
// });

// console.log(genres);
// console.log(genresMovies);
