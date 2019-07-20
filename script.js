const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e) {
    removeBorder ();
    this.classList.add('tab-border');

    tabContentItems.forEach( item => {
        
        if(item.id.includes(this.id)){
            item.classList.add('show');
        }else {
            item.classList.remove('show');
        }  
    })
}

function removeBorder() {
    tabItems.forEach( item => {
        item.classList.remove('tab-border');
    })
}

tabItems.forEach( item => item.addEventListener('click', selectItem));