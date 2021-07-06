class AlarmClock {

  //выделяет память для объекта
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  //добавляет новый звонок в коллекцию существующих
  addClock(time, callback, id) {
    if (!id) {
      throw new Error("Звонок не найден");
    }
    if (this.alarmCollection.find(clock => id === clock.id)) {
      console.error("Звонок уже существует");
      return;
    }
    this.alarmCollection.push({id, time, callback});
  }

  //удаляет определённый звонок
  removeClock(id) {
    const findClock = this.alarmCollection.findIndex(clock => clock.id === id);
    if (findClock === -1) {
      return false;
    } else {
      this.alarmCollection.splice(findClock, 1);
      return true;
    }
  }

  //возвращает текущее время в строковом формате HH:MM
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  }

  //запускает все звонки
  start() {
    function checkClock(clock) {
      if (this.getCurrentFormattedTime() === clock.time) {
        clock.callback();
      }
    }
    checkClock = checkClock.bind(this);

    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(clock => checkClock(clock)), 500);
    }
  }

  //останавливает выполнение всех звонков
  stop() {
    if(this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  //печатает все звонки
  printAlarms() {
    this.alarmCollection.forEach(clock => console.log(`Будильник ${clock.id} сработает в ${clock.time}`));
  }

  //удаляет все звонки
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let phoneAlarm = new AlarmClock();

  phoneAlarm.addClock("09:00", () => console.log("Пора вставать"), 1);
  phoneAlarm.addClock("09:01", () => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 2);
  //phoneAlarm.addClock("09:01", () => console.log("Иди умываться!"));
  phoneAlarm.addClock("09:02", () => {
    console.log("Вставай, а то проспишь!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
  }, 3);
  phoneAlarm.addClock("09:05", () => console.log("Вставай, а то проспишь!"), 1); //существующий id
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}

testCase();