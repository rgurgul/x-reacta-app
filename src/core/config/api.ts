export class Api {
    static BASE_END_POINT = process.env.REACT_APP_API_BASE || 'https://api.debugger.pl/';
    static ITEMS_END_POINT = Api.BASE_END_POINT + 'items';
    static UPLOAD_END_POINT = Api.BASE_END_POINT + 'upload';
    static DOES_IT_EXIST = Api.BASE_END_POINT + 'does-it-exist';
    static WORKERS_END_POINT = Api.BASE_END_POINT + 'workers';

    static BASE_AUTH = 'https://auth.debugger.pl/';
    static LOGIN_END_POINT = Api.BASE_AUTH + 'login';
    static LOGOUT_END_POINT = Api.BASE_AUTH + 'logout';
    static LOGGED_END_POINT = Api.BASE_AUTH + 'is-logged';
    static REGISTER_END_POINT = Api.BASE_AUTH + 'register';
    static PROFILE_END_POINT = Api.BASE_AUTH + 'data';
}
