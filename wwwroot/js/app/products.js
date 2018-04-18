
new Vue({
    'el':'.container-fluid',
    data: function () {
        return {
            products: []
        }
    },
    created: function () {
        console.log('created')
        var context = this;
        $.get('./../wwwroot/data/products.json', {}, function (datas) {
            console.log(datas)
            context.products = datas.data.products
        });
    }
});