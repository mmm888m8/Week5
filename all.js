//全域註冊input驗證元件 !!!
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
//全域註冊表單驗證元件  !!!
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
//全域註冊VueLoading元件  !!!
Vue.component('loading', VueLoading);
//匯入中文語系檔案
import zh_TW from "./zh_TW.js";
//載入語系設定檔案到VeeValidate
VeeValidate.localize('tw', zh_TW);

//為了把將bs4驗證樣式引入js，必須先載入的設定檔案
VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
});

var app = new Vue({
    el: '#app',
    data: {
        customerName:'',
        email:'',
        phone:'',
        address:'',
        bill:'',
        comment:'',
        
    },
});