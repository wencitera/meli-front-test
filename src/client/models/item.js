class Item {
    id = '';
    title = '';
    price = {
        currency: '',
        amount: '',
        decimals: ''
    };
    picture = '';
    condition = '';
    free_shipping = true;
    location = '';

    constructor(id, title, price, picture, condition, free_shipping, location) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.location = location;
    }
}

export default Item;