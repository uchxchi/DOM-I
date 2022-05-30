const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


//nav
const navigation  = document.querySelectorAll('.italic')
console.log(navigation)
const firstA = navigation[0]
const a1 = firstA
a1.textContent = siteContent.nav["nav-item-1"]

const secondA = navigation[1]
const a2 = secondA
a2.textContent = siteContent.nav["nav-item-2"]

const thirdA = navigation[2]
const a3 = thirdA
a3.textContent = siteContent.nav["nav-item-3"]

const fourthA = navigation[3]
const a4 = fourthA
a4.textContent = siteContent.nav["nav-item-4"]

const fifthA = navigation[4]
const a5 = fifthA
a5.textContent = siteContent.nav["nav-item-5"]

const sixthA = navigation[5]
const a6 = sixthA
a6.textContent = siteContent.nav["nav-item-6"]

//first section

const h1 = document.querySelector('h1')
console.log(h1)
h1.textContent = siteContent.cta.h1

const button = document.querySelector('button')
console.log(button)
button.textContent = siteContent.cta.button

const logoImg = document.getElementById('logo-img')
console.log(logoImg)
logoImg.src = siteContent.images["logo-img"]

const ctaImg = document.getElementById('cta-img') //here
console.log(ctaImg)
ctaImg.src =siteContent.images["cta-img"]

//main content
const mainContent =document.querySelectorAll('.text-content')
console.log(mainContent)
//top

const firstContent = mainContent[0]

const h4 = firstContent.querySelector('h4')
h4.textContent = siteContent["main-content"]["features-h4"]

const pTag = firstContent.querySelector('p')
pTag.textContent = siteContent["main-content"]["features-content"]

const secondContent = mainContent[1]

const secondH4 = secondContent.querySelector('h4')
secondH4.textContent = siteContent["main-content"]["about-h4"]

const secondTag = secondContent.querySelector('p')
secondTag.textContent = siteContent["main-content"]["about-content"]

//middle image

const middleImg = document.querySelector('.middle-img')
 console.log(middleImg)
middleImg.src =siteContent.images["accent-img"]

//bottom

const thirdContent = mainContent[2]

const thirdH4 = thirdContent.querySelector('h4')
thirdH4.textContent = siteContent["main-content"]["services-h4"]

const thirdTag = thirdContent.querySelector('p')
thirdTag.textContent = siteContent["main-content"]["services-content"]

const fourthContent = mainContent[3] 

const fourthH4 = fourthContent.querySelector('h4')
fourthH4.textContent = siteContent["main-content"]["product-h4"]

const fourthTag = fourthContent.querySelector('p')
fourthTag.textContent = siteContent["main-content"]["product-content"]

const fifthContent = mainContent[4] 

const fifthH4 = fifthContent.querySelector('h4')
fifthH4.textContent = siteContent["main-content"]["vision-h4"]

const fifthTag = fifthContent.querySelector('p')
fifthTag.textContent = siteContent["main-content"]["vision-content"]

//contact

const contact = document.querySelector('.contact')
console.log(contact)

const contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent.contact["contact-h4"]

const contactP = contact.querySelectorAll('p')
console.log(contactP)

const firstP = contactP[0]
console.log(firstP)
const p1 = firstP
p1.textContent = siteContent.contact.address

const secondP = contactP[1]
const p2 = secondP
p2.textContent = siteContent.contact.phone

const thirdP = contactP[2]
const p3 = thirdP
p3.textContent = siteContent.contact.email

//footer
const footerA = document.querySelector('.bold')
footerA.textContent = siteContent.footer.copyright



