import { DAYS_IN_CIRCLE } from "./constants";
import Garden from "./models/Garden";

const COUNT_DAYS = 300;

const garden = new Garden();

console.log("==== Вы создали свой сад! ====");

console.log("Количество деревьев:", garden.threesCount);
console.log("Общее количество яблок:", garden.applesCount);

console.log("========= Жизнь сада ==========");

let months = 0;
for (let i = 0; i < COUNT_DAYS; i++) {
    garden.passDay();

    months++;
    if (months === DAYS_IN_CIRCLE) {
        months = 0;
        console.log("Общее количество дней прошло", garden.daysCount);
        console.log("Количество деревьев:", garden.threesCount);
        console.log("Общее количество яблок:", garden.applesCount);
        console.log("===========");
        garden.clearExpiredApples();
    }
}
