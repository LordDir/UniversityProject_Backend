// Джейсон

/*LPBase = " " // берём из бд значения логов и паролей к каждому */

function GetLogin() {
/*    Login = " ";*/
} // Получаем введённый логин

function GetPassword() {
/*    Password = " ";*/
} // Получаем введённый пароль

function CheckBase() {
/*    if (Login + Password == LPBase){
        Goto;
    } else {
        Acess denied;
    }
*/
} // Устраиваем проверку по базе каждого логина + пароля, если совпало то пройти, если нет то денай

function GheckLogin(){

} // Проверяем есть ли введённый логин в базе, если да то денай, если нет ок

function CheckPassword(){

} // Проверяем, сходятся ли введённые пароли, если да то ок, если нет денай

function CheckTNumber(){

} // Проверяем существует ли телефонный номер, высылаем 6-значный код, если введён в новом поле, то ок, если нет по истечении 10 минут то денай

function Register(){

} // Регаем нового пользователя если всё выше норм, если нет денай

    if (){// если мы на странице авторизации/тыкнули на смену чётное количество раз
        GetLogin();
        GetPassword();
        CheckBase(); // Для авторизации готово
    }

    if (){// если мы тыкнули на смену 1 раз
        CheckLogin();
        CheckPassword();
        CheckTNumber();
        Register();// Для регистрации готово
    }



// всё я устал

/* шо тут должно делаться
вз-ие с хтмл
    на странице входа
        если там правильные логин пароль
            разрешить
            войти как авторизованный пользователь "такой-то"
        если нет
            доступ денайд
    на странице регистрации
        если доступен логин
        если пароль совпадают
        если телефонный номер существует
            нужно подтверждение номера
                отправка шаблон листа с рандом паролем из 6 цифр для подтверждения
                    ввод в отдельное окно подтверждения номера
            регистрация пользователя
                отправка логина и пароля на сервер
                занос в бд
        если нет
            доступ денайд
готово
*/ 