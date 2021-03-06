//выполните в консоли
function task2() {

    new Promise((res)=> {
        setTimeout(()=> {console.log(0)});  // setTimeout встает в очередь макрозадач
                                            // и ждет завершения выполнения 
                                            // и предыдущей макрозадачи,
                                            // и всех микрозадач

        res();                              // положительное завершение промиса,
                                            // после этого выполнится дольнейший
                                            // синхронный код, то есть
                                            // return 7 (без вывода в консоль),
                                            // далее промис встает в очередь
                                            // микрозадач, поэтому цепочка вызовов
                                            // .then()/.catch()/.finally()
                                            // выполнится перед setTimeout
    })
        .then(()=> console.log(1))          // выведет в консоль 1

        .then(()=>{throw 5})                // генерация ошибки, er=5, дальнейшие
                                            // .then() игнорируются
                                            // до первого .catch()
        .then(()=>console.log(2))           // поэтому 2 не выводится

        .catch((er)=>console.log(er))       // перехват ошибки er и вывод ее в консоль
                                            // если не будет catch(),
                                            // то в консоль выведется то,
                                            // что в блоке finally(),
                                            // и далее выполнение функции task2() 
                                            // завершится с ошибкой "5"

        .then(()=>console.log(4))           // штатный вывод в консоль 4,
                                            // ошибки нет
        
        .finally(()=>console.log(6));       // выведет в консоль 6
                                            // в любом случае,
                                            // даже если не будет перехвата
                                            // ошибки методом .catch()

                                            // обработка цепочки промисов завершена
                                            // вызов коллбэка из setTimeout()
                                            // выведет в консоль 0

    return 7;
}

task2();