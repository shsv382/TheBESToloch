# Тестовое задание.

Требуется выполнить приведенные ниже задания в порядке их следования.
Задания включают как теоритические вопросы, так и практические задачи.

Выполнения теоритических вопросов необходимо сопровождать письменными пояснениями,
практических заданий - файлом с кодом. Выполнять можно в рамках данного файла

Задания с "*" не обязательны к выполнению, но дают плюс при рассмотрении кандидата.

Выполнять задания нужно в рамках данного проекта, результаты можно передать в виде архива
или ссылки на git репозиторий.

### Задания:

### 1) Что такое eventLoop, Main Thread, как устроен процесс загрузки и отображения страницы в браузере.

### 2) Объясните почему результат выполнения кода из файла Task2.js приведет к такому выводу в консоль.

### 3) Реализуйте функцию, которая сортирует переданный массив цифр по возрастанию, при этом дубликаты должны идти в конце массива.

Пример:
    Входной массив:  [3,6,1,2,5,2,9,3]
    Выходной массив: [1,2,3,5,6,9,2,3]

### 4) Необходимо реализовать приложение в рамках модуля FrontApp.
В качесве сервера использовать script "run" из модуля JsonServer.
При оценке не будет учитываться визуальная составляющая приложения, 
только подход к организации ключевых модулей приложения и организацию их взаимодействие.
Приложение должно включать следующие страницы:
    
    1. Стартовую страницу с 2 кнопками, ведущие на страницы просмотра сущностей posts и profile
    2. При двойном клике на сущность должны переходить на страницу просмотра сущности
    3. На странице просмотра всех posts сделать 2 кнопки - удаление выбранного post и добавление нового post
    4. "*" со страницы просмотра конкретного profile сделать кнопку для удаления профиля и всех его post. Поясните почему выбрали именно такое решение 

### 5) "*" Модифицировать приложение из задания 5 для обработки сбойной ситуации. Для этого следует запустить script "run-server" из модуля JsonServer. Поясните выбор такого решения