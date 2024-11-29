
class product {
    constructor(id, name, url, price) {
        this.id = id
        this.name = name
        this.url = url
        this.price = price
    }

}
let tab = [new product(Math.random(), 'Air JORDAN', './assets/1.jpg', 80),
new product(Math.random(), '5Retro', 'assets/2.png', 100),
new product(Math.random(), 'Colorful Air JORDAN', 'assets/3.jpg', 120),
new product(Math.random(), 'Air JORDAN 4', 'assets/4.jpg', 110),
new product(Math.random(), 'Women JORDAN', 'assets/5.png', 130),
new product(Math.random(), 'Air JORDAN LEGACY', 'assets/6.png', 100),]
// console.log(tab)




class shoppingCartitem {
    constructor(product, Quantity) {
        this.product = product
        this.Quantity = Quantity
    }
    total() {
        return this.Quantity * this.product.price;
    }
}
class shoppingCart {
    constructor(tab, arrOfInstances) {
        this.tab = tab
        this.arrOfInstances = []
    }
    dispalyProducts() {
        tab.forEach(element => {
            let ProductList = document.getElementById('product')
            let productCard = document.createElement('div');
            productCard.id = tab.id;
            productCard.className = 'div';
            productCard.innerHTML =
                `<div class='card' style='width: 18rem'>
                        <img src='${element.url}'class='card-img-top'style='height:350px'/>
                        <div class='body'>
                            <div class="align">
                                <h5 class='card-title'>${element.name}</h5>
                                <i class='fas fa-heart'></i>
                            </div>
                                <h4 class='unit-price'style="padding-left:8px;">$${element.price}</h4>
                            
                                <button class="add" onclick='Cart.addItems(${element.id},1)'>Add !</button> 
                                
                            
                        </div>
                    </div>`
            ProductList.append(productCard);
        });

    }
    
    addItems(id, Quantity) {
        const product = tab.find(prod => prod.id === id)

        if (product) {
            const existing = this.arrOfInstances.find(el => el.product.id === product.id)
            if (existing) {
                existing.Quantity += Quantity
            }
            else {
                const item = new shoppingCartitem(product, Quantity)
                this.arrOfInstances.push(item)
            }
            Cart.dispalyCartItems()
            this.totalOfItems()
        }
        console.log(this.arrOfInstances);
    }
 
    dispalyCartItems() {

        let shoopingCart = document.getElementById('shoopingCart')
        shoopingCart.innerHTML = ""
        this.arrOfInstances.forEach(element => {
            let addItems = document.createElement('div');
            addItems.className='card'
            addItems.innerHTML =
                `<img src='${element.product.url}'class='card-img-top'style='height:330px'/>
                            <div class='pct'>
<div>
    <h5 class='card-title'>${element.product.name}</h5>
    <h4>Quantity: ${element.Quantity}</h4>
    <h4 class='unit-price'style="padding-left:8px;">Total: $${element.total()}</h4></div>

<div><button class="delete" onclick="Cart.removeItems(${element.product.id})" >Delete</button> </div>
</div>
                        `
            shoopingCart.append(addItems);
        });
    }

    totalOfItems() { 
    
    let TPrice=document.getElementById('TPrice')
    
    let total=this.arrOfInstances.reduce((total,TItem)=>total+(TItem.total()),0
    );
    return TPrice.innerText=total
    
    }
    removeItems(id){
        this.arrOfInstances=this.arrOfInstances.filter(element=>element.product.id!==id)
        let shoopingCart = document.getElementById('shoopingCart')
        shoopingCart.innerHTML=""

        Cart.totalOfItems()
        this.dispalyCartItems()
    }
}
let Cart = new shoppingCart()
Cart.dispalyProducts()


