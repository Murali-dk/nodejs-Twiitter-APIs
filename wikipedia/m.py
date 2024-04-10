

class Cart:
    def __init__(self):
        self.items = {}
        self.prize = {"mobile": 12000, "laptop": 30000}
    def add_items(self, item_name, quantity):
        self.items[item_name] = quantity
    def update_item(self, item_name, quantity):
        self.items[item_name] = quantity    
    def delete_iems(self, item_name):
        del self.items[item_name]    
    def total_price(self):
        total = 0
        for item_name, quantity in self.items.items():
            total += quantity * self.prize[item_name]
        return total    


cart_obj = Cart()
cart_obj.add_items("mobile", 0)
cart_obj.add_items("laptop", 2)

print(cart_obj.items)
print(cart_obj.total_price())