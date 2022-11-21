function dateBetween(){

    const todayZero = new Date("2022-09-29T22:00:00.00Z");
    console.log("today => ", typeof todayZero.getTime());

    const day = todayZero.getTime();
    const rightnow = Date.now;

    const diff = parseInt(day) - parseInt(rightnow);
    console.log(diff);
}
dateBetween();
