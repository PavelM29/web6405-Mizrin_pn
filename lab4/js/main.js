class UserData {
    constructor(login, password, agreement) {
        this.login = login;
        this.password = password;
        this.agreement = agreement;
    }

    print() {
        console.log('========== ДАННЫЕ ПОЛЬЗОВАТЕЛЯ ==========');
        console.log('Логин:    ' + this.login);
        console.log('Пароль:   ' + '*'.repeat(this.password.length));
        console.log('Согласие: ' + (this.agreement ? 'Да' : 'Нет'));
        console.log('=========================================');
    }
}

const form = document.getElementById('registration-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const user = new UserData(
        form.login.value.trim(),
        form.password.value,
        form.agreement.checked
    );

    user.print();
    form.reset();
});