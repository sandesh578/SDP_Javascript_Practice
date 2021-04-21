//private methods are only accessible within class and starts with #)
//protected methods and properties are accessile within same class as well as inherited class
class CoffeeMachine {
    _waterAmount = 0;
    #capacity=200;//it cannot be acessed directly outside the class
  
    set waterAmount(value) {
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }
  
    constructor(power) {
      this._power = power;
    }
    
    get Capacity()
    {
        return this.#capacity;
    }

    get power()
    {
        return this._power;
    }
  }
  
  let coffeeMachine = new CoffeeMachine(100);

  coffeeMachine.waterAmount = 50;

  console.log(coffeeMachine.waterAmount);//50

  console.log(coffeeMachine.Capacity);//200

  console.log(coffeeMachine.power);//100