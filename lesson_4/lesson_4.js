const str = "Mr. Dursley always sat with his back to the window in his office on the ninth floor. If he hadn't, he might have found it harder to concentrate on drills that morning. He didn't see the owls swooping past in broad daylight, though people down in the street did; they pointed and gazed open-mouthed as owl after owl sped overhead. Most of them had never seen an owl even at nighttime. Mr. Dursley, however, had a perfectly normal, owl-free morning. He yelled at five different people. He made several important telephone calls and shouted a bit more. He was in a very good mood until lunchtime, when he thought he'd stretch his legs and walk across the road to buy himself a bun from the bakery. He'd forgotten all about the people in cloaks until he passed a group of them next to the baker's. He eyed them angrily as he passed. He didn't know why, but they made him uneasy. This bunch were whispering excitedly, too, and he couldn't see a single collecting tin. It was on his way back past them, clutching a large doughnut in a bag, that he caught a few words of what they were saying. 'The Potters, that's right, that's what I heard' 'yes, their son, Harry' Mr. Dursley stopped dead. Fear flooded him. He looked back at the whisperers as if he wanted to say something to them, but thought better of it. He dashed back across the road, hurried up to his office, snapped at his secretary not to disturb him, seized his telephone, and had almost finished dialing his home number when he changed his mind. He put the receiver back down and stroked his mustache, thinking. . . no, he was being stupid. Potter wasn't such an unusual name. He was sure there were lots of people called Potter who had a son called Harry. Come to think of it, he wasn't even sure his nephew was called Harry. He'd never even seen the boy. It might have been Harvey. Or Harold. There was no point in worrying Mrs. Dursley; she always got so upset at any mention of her sister. He didn't blame her if he'd had a sister like that... but all the same, those people in cloaks... He found it a lot harder to concentrate on drills that afternoon and when he left the building at five o'clock, he was still so worried that he walked straight into someone just outside the door. 'Sorry,' he grunted, as the tiny old man stumbled and almost fell. It was a few seconds before Mr. Dursley realized that the man was wearing a violet cloak. He didn't seem at all upset at being almost knocked to the ground. On the contrary, his face split into a wide smile and he said in a squeaky voice that made passersby stare, 'Don't be sorry, my dear sir, for nothing could upset me today! Rejoice, for You-Know-Who has gone at last! Even Muggles like yourself should be celebrating, this happy, happy day!'  "



console.log(str.replace(/[\s']['\s]/g, '\"'));



const input = document.querySelectorAll('.input');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const btn = document.querySelector('#btn');
btn.addEventListener('click', checkInput)


function checkInput(){
    input.forEach((inp) =>{
        beyond(inp);
    })
}

function beyond(input){
    if(input.id === 'name'){
        // console.log(input.id )
        unswerNume();
    }else if(input.id === 'phone'){
        // console.log(input.id )
        unswerPhone();
    }else if(input.id === 'email'){
        unswerEmail();
        // console.log(input.id )
    } 
}

function unswerNume(){
    const uName = /[A-Za-z]+/;
    if(!(uName.test(name.value))){
        name.style.border = '2px solid red';
    }else {
        name.style.border = '1px solid black';
    }
}
function unswerPhone(){
    const uPhone = /^[\+|8][0-9]{3,4}[\s|\-][0-9]{3}[\s|\-][0-9]{2}[\s|\-][0-9]{2}$|^[\+|8][0-9]{10,11}$/;
    if(!(uPhone.test(phone.value))){
        phone.style.border = '2px solid red';
    }else {
        phone.style.border = '1px solid black';
    }
}
function unswerEmail(){
    const uEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
    if(!(uEmail.test(email.value))){
        email.style.border = '2px solid red';    
    }else {
        email.style.border = '1px solid black';
    }
}
