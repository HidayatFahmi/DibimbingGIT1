document.addEventListener('alpine:init',() => {
    Alpine.data('products', () => ({
        items : [
            {id : 1, name : 'Robusta Brazil', img : '1.jpg', price : 20000},
            {id : 2, name : 'Arabica Blend', img : '2.jpg', price : 25000},
            {id : 3, name : 'Primo Passo', img : '3.jpg', price : 30000},
            {id : 4, name : 'Aceh Gayo', img : '4.jpg', price : 35000},
            {id : 5, name : 'Sumatera Mandheling', img : '5.jpg', price : 40000},
            // {id : 6, name : 'xxx1', img : '5.jpg', price : 0},
            // {id : 7, name : 'xxx2', img : '4.jpg', price : 0},
            // {id : 8, name : 'xxx3', img : '3.jpg', price : 0},
            // {id : 9, name : 'xxx4', img : '3.jpg', price : 0},
            // {id : 10, name : 'xxx5', img : '3.jpg', price : 0},
            // {id : 11, name : 'xxx6', img : '3.jpg', price : 0},
        ],
        modal : false,
        openModal(event){
            this.modal = true;
            document.getElementById('item-detail-modal').classList.add('modal-show');
        },

        closeModal(event){
            if(event.target.classList.contains("modal-show")){
                this.modal = false;
                event.target.classList.remove("modal-show");
                // event.target.style.display = "none"
                console.log("xxx")

            }
        }
    }));

    Alpine.store('cart', {
        items : [],
        total: 0,
        quantity : 0,
        add(newItem){
            // cek apkah ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id == newItem.id);
            if(!cartItem){
                this.items.push({...newItem, quantity:1, total: newItem.price});
                this.total += newItem.price;
                this.quantity++;  
            }else{
                // jika brang sudah ada dengan yg ada di cart
                this.items = this.items.map((item) => {
                    // jika barang berbeda
                    if(item.id!== newItem.id){
                        return item;
                    }
                    else{
                        // jika barang sudah ada, tambah quantity dan total price
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })

            }

        },
        remove(id){
            // ambil item yang di remove berdasarkan id
            const cartItem = this.items.find((item) => item.id === id);

            // jika item lebih dari 1
            if(cartItem.quantity > 1){
                // telusuri satu persatu
                this.items = this.items.map((item) => {
                    // jika bukan barang yang di klik
                    if(item.id !== id){
                        return item;
                    }else{
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            }else if(cartItem.quantity === 1){
                this.items = this.items.filter((item) => item.id != id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    })
});

// form validation
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form =  document.querySelector("#checkout-form");

form.addEventListener('keyup', function(){
    for(let i=0;i<form.elements.length;i++){
        // console.dir(`form elements = ${form}`)
        if(form.elements[i].value.length !== 0){
            checkoutButton.classList.remove('disabled');
            checkoutButton.classList.add('disabled')
        }else{
            return false;
        }
    }
    checkoutButton.disabled = false;
    checkoutButton.classList.remove('disabled');
})

// kirim ketika tombol checkout di klik
checkoutButton.addEventListener('click', function(e){
    e.preventDefault();
    const formData =  new FormData(form);
    const data = new URLSearchParams(formData);
    const objData = Object.fromEntries(data);
    // console.log(`formData`)
    // console.log(formData)
    // console.log(`data : `)
    // console.log(data);
    // console.log(objData);
    const message = formatMessage(objData);
    window.open('http://wa.me/6281287395786?text='+encodeURIComponent(message));
})

// Format pesan Whatsapp
const formatMessage = (obj) => {
    return `Data Customer : 
    Nama : ${obj.name}
    Email : ${obj.email}
    No. Hp : ${obj.phone}
Data Pesanan: 
${JSON.parse(obj.items).map(item => `${item.name} (${item.quantity} x ${item.total})`).join('\n')}
Total : ${rupiah(obj.total)}
Terimakasih
    `
};
  
// konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style : 'currency',
        currency : 'IDR',
        minimumFractionDigits:0,
    }).format(number);
}

