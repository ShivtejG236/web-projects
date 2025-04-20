const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const padd = 10; // Adjust the padding as needed

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        if (target) {
            // Add 'active' class to the clicked tab
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tab.classList.add('active');

            // Add 'active' class to the corresponding tab content
            target.classList.add('active');

            // Scroll to the target tab content using scrollIntoView
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the ID of the intersecting tab content
            const targetId = entry.target.getAttribute('id');

            // If the intersecting tab content is the home tab, remove 'active' class from all tabs
            if (targetId === 'home') {
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                });
            } else {
                // Find the corresponding tab
                const correspondingTab = document.querySelector(`[data-tab-target="#${targetId}"]`);

                // If a corresponding tab is found, activate it
                if (correspondingTab) {
                    // Remove 'active' class from all tabs
                    tabs.forEach(tab => {
                        tab.classList.remove('active');
                    });

                    // Add 'active' class to the corresponding tab
                    correspondingTab.classList.add('active');
                }
            }
        }
    });
}, { threshold: 0.8 }); // Adjust the threshold as needed
tabContents.forEach(tabContent => {
    observer.observe(tabContent);
});
// Create a new Intersection Observer
const headerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'home') {
            // Get the header element
            const header = document.querySelector('.header');
            
            // Trigger a click event on the header
            header.click();
        }
    });
}, { threshold: 0.8 }); // Adjust the threshold as needed
// Observe the home content
const homeContent = document.getElementById('home');
headerObserver.observe(homeContent);



document.addEventListener("DOMContentLoaded", function() {
    var cartButton = document.querySelector(".view-cart");

    cartButton.addEventListener("click", function() {
        // Redirect the user to cart.html
        window.location.href = "cart.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Find all 'Add to Cart' buttons
    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Attach click event listener to each button
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var serviceId = this.dataset.serviceId;
            var serviceName = this.parentNode.querySelector('.details-text').textContent;

            // Add service to cart
            addToCart(serviceId, serviceName);
        });
    });
});
function addToCart(serviceId, serviceName) {
    // Retrieve cart items from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected service to the cart
    cart.push({ id: serviceId, name: serviceName });

    // Update local storage with the updated cart items
    localStorage.setItem('cart', JSON.stringify(cart));
}


var addtoCart0 = document.getElementById('add-to-cart0');
var addtoCart1 = document.getElementById('add-to-cart1');
var addtoCart2 = document.getElementById('add-to-cart2');
var addtoCart3 = document.getElementById('add-to-cart3');

addtoCart0.addEventListener('mousedown', ()=>{
    addtoCart0.style.color = 'aliceblue';
    if (addtoCart0.textContent === 'Add to Cart') {
        addtoCart0.textContent = 'Done..!';
    } else if (addtoCart0.textContent === 'Done..!') {
        addtoCart0.textContent = '2 Quantity added';
        addtoCart0.style.translate = '0.5vw';
    } else if (addtoCart0.textContent === '2 Quantity added') {
        addtoCart0.textContent = '3 Quantity added. To add further or remove, plz headover to the cart';
        addtoCart0.style.translate = '1vw';
        addtoCart0.style.top = '-5vh'
    } else if (addtoCart0.textContent === '3 Quantity added. To add further or remove, plz headover to the cart') {
        addtoCart0.textContent = 'Add to Cart';
        addtoCart0.style.translate = '0';
        addtoCart0.style.top = '-8vh';
    }
});
addtoCart1.addEventListener('mousedown', ()=>{
    addtoCart1.style.color = 'aliceblue';
    if (addtoCart1.textContent === 'Add to Cart') {
        addtoCart1.textContent = 'Done..!';
    } else if (addtoCart1.textContent === 'Done..!') {
        addtoCart1.textContent = '2 Quantity added';
        addtoCart1.style.translate = '0.5vw';
    } else if (addtoCart1.textContent === '2 Quantity added') {
        addtoCart1.textContent = '3 Quantity added. To add further or remove, plz headover to the cart';
        addtoCart1.style.translate = '1vw';
        addtoCart1.style.top = '-15vh'
    } else if (addtoCart1.textContent === '3 Quantity added. To add further or remove, plz headover to the cart') {
        addtoCart1.textContent = 'Add to Cart';
        addtoCart1.style.translate = '0';
        addtoCart1.style.top = '-8vh';
    }
});
addtoCart2.addEventListener('mousedown', ()=>{
    addtoCart2.style.color = 'aliceblue';
    if (addtoCart2.textContent === 'Add to Cart') {
        addtoCart2.textContent = 'Done..!';
    } else if (addtoCart2.textContent === 'Done..!') {
        addtoCart2.textContent = '2 Quantity added';
        addtoCart2.style.translate = '0.5vw';
    } else if (addtoCart2.textContent === '2 Quantity added') {
        addtoCart2.textContent = '3 Quantity added. To add further or remove, plz headover to the cart';
        addtoCart2.style.translate = '1vw';
        addtoCart2.style.top = '-15vh'
    } else if (addtoCart2.textContent === '3 Quantity added. To add further or remove, plz headover to the cart') {
        addtoCart2.textContent = 'Add to Cart';
        addtoCart2.style.translate = '0';
        addtoCart2.style.top = '-8vh';
    }
});
addtoCart3.addEventListener('mousedown', ()=>{
    addtoCart3.style.color = 'aliceblue';
    if (addtoCart3.textContent === 'Add to Cart') {
        addtoCart3.textContent = 'Done..!';
    } else if (addtoCart3.textContent === 'Done..!') {
        addtoCart3.textContent = '2 Quantity added';
        addtoCart3.style.translate = '0.5vw';
    } else if (addtoCart3.textContent === '2 Quantity added') {
        addtoCart3.textContent = '3 Quantity added. To add further or remove, plz headover to the cart';
        addtoCart3.style.translate = '1vw';
        addtoCart3.style.top = '-15vh'
    } else if (addtoCart3.textContent === '3 Quantity added. To add further or remove, plz headover to the cart') {
        addtoCart3.textContent = 'Add to Cart';
        addtoCart3.style.translate = '0';
        addtoCart3.style.top = '-8vh';
    }
});

addtoCart0.addEventListener('mouseup', ()=>{
    addtoCart0.style.color = '#000000d3';
})
addtoCart1.addEventListener('mouseup', ()=>{
    addtoCart1.style.color = '#000000d3';
})
addtoCart2.addEventListener('mouseup', ()=>{
    addtoCart2.style.color = '#000000d3';
})
addtoCart3.addEventListener('mouseup', ()=>{
    addtoCart3.style.color = '#000000d3';
})

addtoCart0.addEventListener('mouseover', ()=>{
    addtoCart0.style.color = '#000000d3';
})
addtoCart1.addEventListener('mouseover', ()=>{
    addtoCart1.style.color = '#000000d3';
})
addtoCart2.addEventListener('mouseover', ()=>{
    addtoCart3.style.color = '#000000d3';
})
addtoCart3.addEventListener('mouseover', ()=>{
    addtoCart3.style.color = '#000000d3';
})

addtoCart0.addEventListener('mouseleave', ()=>{
    addtoCart0.style.color = 'aliceblue';
    addtoCart0.textContent = "Add to Cart";
})
addtoCart1.addEventListener('mouseleave', ()=>{
    addtoCart1.style.color = 'aliceblue';
    addtoCart1.textContent = "Add to Cart";
})
addtoCart2.addEventListener('mouseleave', ()=>{
    addtoCart2.style.color = 'aliceblue';
    addtoCart2.textContent = "Add to Cart";
})
addtoCart3.addEventListener('mouseleave', ()=>{
    addtoCart3.style.color = 'aliceblue';
    addtoCart3.textContent = "Add to Cart";
})





// JavaScript to detect mobile devices and show the plus mark instead of tabs
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var plus = document.querySelector('.expand');
    plus.style.display = 'block'; // Display the plus button on mobile
} else {
    var tabsElement = document.querySelector('.tabs');
    tabsElement.classList.add('visible'); // Display the tabs on desktop
}
function toggleTabs() {
    var tabsElement = document.querySelector('.tabs');
    tabsElement.classList.toggle('visible');
    var plusElement = document.querySelector('.expand');
    var closeElement = document.querySelector('.collapse');
    plusElement.style.display = tabsElement.classList.contains('visible') ? 'none' : 'block'; // Toggle plus button visibility
    closeElement.style.display = tabsElement.classList.contains('visible') ? 'block' : 'none'; // Toggle close button visibility
}
// JavaScript to detect mobile devices and show the plus mark instead of tabs
function adjustTabsLayout() {
    var tabsElement = document.querySelector('.tabs');
    if (window.innerWidth <= 768) { // Set the threshold for mobile devices
        tabsElement.classList.add('vertical'); // Display tabs vertically on mobile
    } else {
        tabsElement.classList.remove('vertical'); // Remove vertical class for desktop
    }
}
// Initial adjustment of tabs layout
adjustTabsLayout();
// Event listener for window resize to adjust tabs layout
window.addEventListener('resize', adjustTabsLayout);




var servicesContent3 = document.getElementById('services-content3');
// Get the element that you want to hover
var servicesContent2 = document.getElementById('services-content2');
// Get the element that you want to change when hovering
var servicesContent1 = document.getElementById('services-content1');
var servicesContent0 = document.getElementById('services-content0');
var details = document.getElementsByClassName('details');
// Add event listener for mouseover
servicesContent0.addEventListener('mouseover', function() {
    servicesContent1.style.translate = '37vw';
    servicesContent1.style.scale = '1.1';
    servicesContent1.style.zIndex = '3';
    // servicesContent1.style.rotate = '-5deg';
    servicesContent2.style.translate = '19vw';
    servicesContent2.style.scale = '1.05';
    servicesContent2.style.zIndex = '2';
    // servicesContent3.style.translate = '-11.5vw';
    // servicesContent3.style.rotate = '5deg';
});
servicesContent0.addEventListener('mouseout', function() {
    servicesContent1.style.translate = '0';
    servicesContent1.style.rotate = '0deg';
    servicesContent1.style.scale = '1';
    servicesContent2.style.translate = '0';
    servicesContent2.style.scale = '1';
    servicesContent3.style.translate = '0';
    servicesContent3.style.scale = '1';
    servicesContent3.style.rotate = '0deg';
});
servicesContent1.addEventListener('mouseover', function() {
    servicesContent2.style.opacity = '0';
    servicesContent1.style.zIndex = '4';
});
servicesContent1.addEventListener('mouseout', function() {
    servicesContent2.style.opacity = '1';
    servicesContent1.style.zIndex = '0';
});
servicesContent2.addEventListener('mouseover', function() {
  // Change the opacity of servicesContent1 when servicesContent2 is hovered
  servicesContent1.style.opacity = '0';
  servicesContent2.style.zIndex = '4';
});
// Add event listener for mouseout
servicesContent2.addEventListener('mouseout', function() {
  // Reset the opacity of servicesContent1 when the mouse leaves servicesContent2
  servicesContent1.style.opacity = '1';
  servicesContent2.style.zIndex = '0';
});
servicesContent3.addEventListener('mouseover', function() {
    servicesContent1.style.translate = '-19vw';
    servicesContent1.style.scale = '1.05';
    servicesContent1.style.zIndex = '2';
    servicesContent2.style.translate = '-37vw';
    servicesContent2.style.scale = '1.1';
    servicesContent2.style.zIndex = '3';
});
servicesContent3.addEventListener('mouseout', function() {
    servicesContent0.style.translate = '0';
    servicesContent0.style.rotate = '0deg';
    servicesContent0.style.scale = '1';
    servicesContent1.style.translate = '0';
    servicesContent1.style.scale = '1';
    servicesContent2.style.translate = '0';
    servicesContent2.style.scale = '1';
    servicesContent2.style.rotate = '0deg';
});



