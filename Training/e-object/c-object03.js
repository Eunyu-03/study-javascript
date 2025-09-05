// static, 클래스로만 접근 가능
// 공통 요소로 적용되어야 할 프로퍼티
// User.count = 0;
// prototype, 해당 타입의 객체로만 접근 가능
// 반복되는 동일한 메소드를 prototype에 선언해놓고 한 번만 메모리에 올리기 위해
// User.prototype.introduce = function () {
//     console.log(this.name, this.age, this.gender);
// };
// function User(name, age, gender = "선택안함") {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     User.count++;
// }

// const hong = new User("홍길동", "20");
// const lee = new User("이순신", "44");

// console.log(hong);
// console.log(lee);
// console.log(User.count);

// hong.introduce();
// lee.introduce();

// 회사 객체에 직원의 정보가 있다.
// 직원의 수익이 회사의 수익에 더해져야한다.

Company.total = 0;

Company.prototype.getTotal = function () {
    Company.total += this.revenue;
};

function Company(name, revenue) {
    this.name = name;
    this.revenue = revenue;
}

const hong = new Company("홍길동", 100000);
const lee = new Company("이순신", 200000);
const kim = new Company("김이박", 300000);

hong.getTotal();
lee.getTotal();
kim.getTotal();

console.log(Company.total);
