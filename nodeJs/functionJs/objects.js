// const job = {
// title: 'Developer',
// location: 'New York',
// salary: 50000,

// };

// //Date 소위 생성자 함수 또는 클래스
// console.log(new Date().toISOString());

// const job2 = {
// title: 'Cook',
// location: 'Munich',
// salary: 35000,

// };


//블루 프린트를 통해 얻은 객체가 객체 리터럴({}) 접근 방식으로 얻은 것과 동일함
//그래서 이렇게 clss 블루프린트 방법을 통해서 한 번 만들어 두면 필요할 때 const 에 새로 만들면 쉬움
//에러나 오타를 방지함

class Job {
    constructor(jobTitle, place , salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}`)
    }
}

const Developer = new Job('Developer', 'New York', 50000);

const cook = new Job('Cook', 'Munich', 35000);

Developer.describe();
cook.describe();