const forms = document.querySelectorAll(".contact-field");
const errortxt = document.querySelectorAll(".error-txt");
const submitbtns = document.getElementById("submit-btn");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let timer;

submitbtns.forEach(submit => {submit.disabled = true});

forms.forEach(form => {form.addEventListener('keyup', (e) => {

    clearTimeout(timer);

    onChange(form);
    timer = setTimeout(() => {
        if(form.value.match(mailformat)){
            return;
        }else{
            errortxt.forEach(err => {
                err.classList.add("show")
            })

        }
    }, 2000)
})})

function onChange(form){
    if(form.value.match(mailformat)){
        submitbtns.forEach(submit => {
            submit.disabled = false;
            submit.classList.add("active");
        });
        errortxt.forEach(err => {
            err.classList.remove("show")
        })
    }else{
        submitbtns.forEach(submit => {
            submit.disabled = true;
            submit.classList.remove("active");
            });

    }
}