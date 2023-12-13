// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded',function(){
    const form=document.querySelector('form');
    const contactPage=document.getElementById('contact-page');
    const submitInformation=document.getElementById('submit-button');
    form.addEventListener('submit',function(event){
        contactPage.innerHTML='<p class="thank-you" style="font-size:24px;">Thank you for your message!</p>';
    });
});