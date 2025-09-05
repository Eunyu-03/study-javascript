// 히어로가 몬스터를 공격하여 성장하는 게임을 제작한다.

// 히어로 객체
// 이름, 체력, 공격력, 방어력
// 공격하기: 공격 대상의 몬스터 체력을 공격력만큼 제거하고
//          방어력만큼 몬스터의 공격을 방어한다.

// 몬스터 객체
// 이름, 체력, 공격력, 생존 유무(true)
// 전투 후 체력 반영: 전투 후 hp가 0이하라면 생존 유무를 false로 변경한다.
// 만약 사망했다면, 이름 프로퍼티를 삭제한다.

// let hero = {};
// let monster = {};

// hero.name = "히어로";
// hero.hp = 100;
// hero.attackPower = 10;
// hero.defense = 10;

// monster.name = "몬스터";
// monster.hp = 100;
// monster.attackPower = 15;
// monster.survival = true;

// hero.attack = function (monster) {
//     monster.hp -= this.attackPower;
//     this.hp -=
//         this.defense < monster.attackPower &&
//         monster.attackPower - this.defense;
//     monster.survival = monster.hp > 0;
// };

// console.log(monster);
// console.log(hero);

// hero.attack(monster);
// hero.attack(monster);

// console.log(monster);
// console.log(hero);

// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);
// hero.attack(monster);

// console.log(monster);
// console.log(hero);

// 마켓에서 판매하는 상품은 단 1개이다.
// 이름, 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.

// 고객 객체를 2개 정의한다.
// 이름, 잔고, 쿠폰 할인율

// 고객 2명은 서로 할인율을 다르게 설정한다.

let market = {};

market.name = "이마트";
market.productname = "콩순이 냉장고";
market.price = 10000;
market.stock = 5;

const user1 = {};
const user2 = {};

user1.name = "김이박";
user2.name = "최장정";

user1.money = 100000;
user2.money = 200000;

user1.discount = 0.2;
user2.discount = 0.1;

market.sell = function (user1) {
    let actualPrice = (1 - user1.discount) * this.price;
    user1.money -= actualPrice;
    this.stock--;
};

market.sell(user1);
market.sell(user2);

console.log(market);
console.log(user1);
console.log(user2);
