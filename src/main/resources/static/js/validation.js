const form = document.getElementById("sender");
const errortxt = document.getElementById("err-txt");
const submitbtn = document.getElementById("submit-btn");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let timer;

submitbtn.disabled = true;

form.addEventListener('keyup', (e) => {

    clearTimeout(timer);

    onChange(form);
    timer = setTimeout(() => {
        if(form.value.match(mailformat)){
            return;
        }else{
            errortxt.classList.add("show")
        }
    }, 2000)
})

function onChange(form){
    if(form.value.match(mailformat)){
            submitbtn.disabled = false;
            submitbtn.classList.add("active");

        errortxt.classList.remove("show")
    }else{
        submitbtn.disabled = true;
        submitbtn.classList.remove("active");

    }
}