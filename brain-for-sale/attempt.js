function attempt(available, allowed, preferred) {

  const inputValues = allowed.includes('any')                   // Если в разрешённых значениях есть any
    ? available                                                       // То мы берём все имеющиеся
    : available.filter(value => allowed.includes(value));             // Иначе проверям какие из имеющихся значений разрешены

  return preferred.includes('any')                              //Если в предпочетаемых значениях есть any
    ? inputValues                                                      //То мы возвращаем все имеющиеся значения в inputValues
    : preferred.reduce((acc, value) => {                                //Иначе проходимся по каждому элементу списка
        if(inputValues.includes(value)) {                               //Если значение есть в списке, то сразу добавляем
          acc.push(value);
          return acc;
        }
        let lowerValue = undefined;                                     // Значение которое идёт до искомого значения
        let higherValue = undefined;                                      // Значение которое идёт после искомого значения
        if(inputValues[0] > value) {                                      // Поиск ближайших значений
           higherValue = inputValues[0];
        } else {
          for(let i = 0; i < inputValues.length; i++) {
            if (inputValues[i] < value && (inputValues[i + 1] === undefined || inputValues[i + 1] > value)) {
              lowerValue = inputValues[i];
              higherValue = inputValues[i + 1];
            }
          }
        }
        const result = higherValue || lowerValue;

        if(result && !acc.includes(result)) {         // Добавляем значение в список, если мы смогли найти его и если его ещё нет в массиве
          acc.push(result);
        }
        return acc;                                   //Иначе возвращаем массив без изменений
      }, []);

}


module.exports = attempt;