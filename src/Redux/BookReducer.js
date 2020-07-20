const ADD_CART = 'ADD-CART';


let initialState = {
   isReady:false,
   books:[
      {id:'1', img:'https://img2.wbstatic.net/big/new/13570000/13570580-1.jpg', title:'Опоздавшие к лету', author:'Лазарчук А.Г.',  age_rest:'16+', price:4490, cart:false,},
      {id:'2', img:'https://img1.wbstatic.net/big/new/13260000/13265197-1.jpg', title:'Печать Сумрака', author:'Лукьяненко С.',  age_rest:'16+', price:1920, cart:false,},
      {id:'3', img:'https://img1.wbstatic.net/big/new/13570000/13570597-1.jpg', title:'Охотник', author:'Шенгальц И.А.',  age_rest:'16+', price:3470, cart:false,},
      {id:'4', img:'https://img2.wbstatic.net/big/new/13570000/13570598-1.jpg', title:'Провинциальный маг', author:'Шенгальц И.А.',  age_rest:'16+', price:3390, cart:false,},
      {id:'5', img:'https://img2.wbstatic.net/big/new/13510000/13511052-1.jpg', title:'Цетаганда', author:'Буджолд Л.М.',  age_rest:'12+', price:1510, cart:false,},
      {id:'6', img:'https://img1.wbstatic.net/big/new/11210000/11213485-1.jpg', title:'Ведьмак', author:'Сапковский А.',  age_rest:'16+', price:10200, cart:false,},
      {id:'7', img:'https://img2.wbstatic.net/big/new/5720000/5720218-1.jpg', title:'Рик и Морти', author:'Горман Зак',  age_rest:'18+', price:5670, cart:false,},
      {id:'8', img:'https://img2.wbstatic.net/big/new/6380000/6381718-1.jpg', title:'Гравити Фолз. Забытые легенды.', author:'Алекс Хирш',  age_rest:'12+', price:2890, cart:false,},
      {id:'9', img:'https://img2.wbstatic.net/big/new/3430000/3435764-1.jpg', title:'Клатбище домашних жывотных', author:'Стивен Кинг',  age_rest:'16+', price:2000, cart:false,},
      {id:'10', img:'https://img2.wbstatic.net/big/new/12930000/12939576-1.jpg', title:'Путеводитель по жизни.', author:'Беар Гриллс',  age_rest:'16+', price:1100, cart:false,},
      {id:'11', img:'https://img1.wbstatic.net/big/new/8210000/8213711-1.jpg', title:'Harry Potter and the Chamber of Secrets', author:'Роулинг Д.',  age_rest:'12+', price:4250, cart:false,},
      {id:'12', img:'https://img1.wbstatic.net/big/new/6820000/6828675-1.jpg', title:'Бегущая с волками', author:'Клариса Пинкола',  age_rest:'16+', price:5190, cart:false,},
      {id:'13', img:'https://cdn.f.kz/prod/300/299118_550.jpg', title:'Евгений Онегин', author:'Александр С.П.',  age_rest:'16+', price:1219, cart:false,},
      {id:'14', img:'https://img1.wbstatic.net/big/new/6890000/6891205-1.jpg', title:'Тонкое искусство пофигизма', author:'Мэнсон М.',  age_rest:'16+', price:2370, cart:false,},
      {id:'15', img:'https://cdn.f.kz/prod/1233/1232689_550.jpg', title:'Книга о власти над собой', author:'Э. Роббинс',  age_rest:'16+', price:6190, cart:false,},
      {id:'16', img:'https://cdn.f.kz/prod/1275/1274016_550.jpg', title:'Зачем мы спим', author:'М. Уолкер',  age_rest:'16+', price:4190, cart:false,},
      {id:'17', img:'https://cdn.f.kz/prod/152/151062_550.jpg', title:'Шантарам', author:'Г.Д.Робертс',  age_rest:'16+', price:3990, cart:false,},
      {id:'18', img:'https://cdn.f.kz/prod/101/100602_550.jpg', title:'Шерлоке Холмс', author:'А.К.Дойл',  age_rest:'16+', price:5990, cart:false,},
      {id:'19', img:'https://cdn.f.kz/prod/46/45085_550.jpg', title:'Пространство вариантов', author:'В.Зеланд',  age_rest:'16+', price:1890, cart:false,},
      {id:'20', img:'https://cdn.f.kz/prod/336/335591_550.jpg', title:'Слова назидания', author:'А.Кунанбаев',  age_rest:'12+', price:4000, cart:false,},
   ],
}

const BooksReducer = (state = initialState, action) => {
   switch(action.type){
      default:
         return state
   }
}

export default BooksReducer