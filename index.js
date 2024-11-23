class GroceryList { 
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `${this.name}`
    }
}


class AddItem {
    constructor(name) {
        this.name = name;
        this.item = [];
    }

    addItem(item) {
        if (item instanceof GroceryList)
            this.item.push(GroceryList);
        else {
            throw new Error ('An error has occurred.')
        }
    }

    describe() {
        return `You have ${this.name} in your cart`
    }
}


class Menu {
    constructor() {
        this.items = [];
        this.selecteditem = null;
    }

    start() { // creating the starting menu
        let selection = this.mainMenu(); // setting the default starting point to mainMenu located below
        while (selection != 0) {
            switch (selection) {
                case '1': 
                this.addItemsToList()
                break;
                case '2':
                    this.viewItems()
                    break;
                case '3':
                    this.removeItems()
                default:
                    selection = 0; 
            }
            selection = this.mainMenu(); 
        }
    }

    mainMenu() { // The main menu screen asking you what you would like to do
        return prompt(`
            1 - Add an Item to Your Shopping Cart.
            2 - View Items in Your Shopping Cart.
            3 - Remove an Item From Your Shopping Cart.
            `)
    }


    addItemsToList() { // functionality to allow you to navigate into adding an item, and push the name of the item into the addItem class
        let name = prompt('Add an item to your shopping list.')
        this.items.push(new AddItem(name));
    }



    viewItems() { 
        let itemList = `Here are the items you have added to your cart:
`;
        for (let i = 0; i < this.items.length; ++i) {
            itemList += i + ') ' + this.items[i].name + '' + '\n';  
        }
        alert(itemList);
    }

   removeItems() { 
        let index = prompt('Enter the index of the item you want to remove:');
        if (index > -1 && index < this.items.length) {
            this.items.splice(index, 1)
        }
   }


}


let appTest = new Menu();
appTest.start();