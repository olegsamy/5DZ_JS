// 1 ******************************
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }
console.log('task1');
console.log('*************************');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (let key in numbers) {
    if (numbers[key] >= 3 ) {  console.log(numbers[key]);
    } else {
        continue;	

    }
}

// 2 ******************************
// Необходимо из объекта, который лежит в константе post вывести значения, к
// которым приписан комментарий, в консоль.

//   const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//       {
//         userId: 10,
//         userName: "Alex",
//         text: "lorem ipsum",
//         rating: {
//           likes: 10,
//           dislikes: 2, // вывести это число
//         },
//       },
//       {
//         userId: 5, // вывести это число
//         userName: "Jane",
//         text: "lorem ipsum 2", // вывести этот текст
//         rating: {
//           likes: 3,
//           dislikes: 1,
//         },
//       },
//     ],
//   };

console.log('task2');
console.log('*************************');
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };
  
  //  решение
  console.log(post.author);
  console.log(post.comments[0].rating.dislikes);
  console.log(post.comments[1].userId);
  console.log(post.comments[1].text);

// 3 ******************************
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя
// метод forEach.

//   const products = [
//     {
//       id: 3,
//       price: 200,
//     },
//     {
//       id: 4,
//       price: 900,
//     },
//     {
//       id: 1,
//       price: 1000,
//     },
//   ];

console.log('task3');
console.log('*************************');

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//  решение
products.forEach(element => {
    element.price = element.price - element.price * 0.15;
});
console.log(products);

// 4 ******************************
// Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
// const products = [
//     {
//       id: 3,
//       price: 127,
//       photos: [
//         "1.jpg",
//         "2.jpg",
//       ],
//     },
//     {
//       id: 5,
//       price: 499,
//       photos: [],
//     },
//     {
//       id: 10,
//       price: 26,
//       photos: [
//         "3.jpg",
//       ],
//     },
//     {
//       id: 8,
//       price: 78,
//     },
//   ];

console.log('task4');
console.log('*************************');

const productsTask4 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

//  решение
const photosYes = productsTask4.filter(item => item.photos >= '.jpg');
console.log(photosYes);

productsTask4.sort((a, b) => a.price - b.price); console.log(productsTask4);

// 5 ******************************
// Дано 2 массива

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

console.log('task5');
console.log('*************************');
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

//  решение
const week = {};    // новый массив	

for (let i = 0; i <= ru.length - 1; i++) {

    week[en[i]] = ru[i];
}

console.log(week);


// Задание 4 (тайминг 30 минут) ********************************************
// 1 Создайте объект riddles
// 2 Добавьте свойства question, answer
// 3 создайте метод askQuestion который спрашивает у
// пользователя вопрос question и сравнивает ответ с answer
// 4 Добавьте свойство hints (содержащее 2 подсказки)
// 5 Если пользователь ответил неверно, ему даётся одна
// подсказка
// 6 Если пользователь ответил второй раз неверно, даётся
// вторая подсказка
// 7 Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”

console.log('task6*');
console.log('*************************');

const riddles = {
    question: 'Какой "древний, славный" город в этом году отмечает 300 лет?',
    answer: 'екатеринбург',
    hints: ['первая подсказка - город назван в честь жены Петра Великого', 'вторая подсказка - столица Урала и вторая столица русского рока'],   
    askQuestion() {         
        if (prompt(this.question).toLowerCase() === this.answer) {
            return alert('Точно, в ноябре Екб 300 лет'),
            console.log('Точно, в ноябре Екб 300 лет');           
        } else {
            alert(this.hints.shift());                        
        }      
        if (prompt(this.question).toLowerCase() === this.answer) {
              return alert('Точно, в ноябре Екб 300 лет'),
              console.log('Точно, в ноябре Екб 300 лет');    
        } else {
               alert(this.hints.shift());                  
        }      
        if (prompt(this.question).toLowerCase() === this.answer) {
                return alert('Точно, в ноябре Екб 300 лет'),
                console.log('Точно, в ноябре Екб 300 лет'); 
        } else {
                alert('Вы проиграли'),
                console.log('Вы проиграли');                        
        }      
    }
}
riddles.askQuestion();   