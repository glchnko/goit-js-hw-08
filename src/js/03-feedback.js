import throttle from 'lodash.throttle';

const refs = {
 formEl: document.querySelector('.feedback-form'),
 emailEl: document.querySelector('.feedback-form input'),
 messageEl: document.querySelector('.feedback-form textarea'),
}

refs.formEl.addEventListener('input', throttle(onInput, 500));
refs.formEl.addEventListener('submit', onSubmit);
onReload();


function onInput(e){
    e.preventDefault();
    const data = {};
    data.email = refs.emailEl.value;
    data.textarea = refs.messageEl.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));

}

function onSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


 function onReload(){
    const saveData = localStorage.getItem("feedback-form-state")
    if(saveData){
        let parseSaveData = JSON.parse(saveData)
        refs.emailEl.value = parseSaveData.email
        refs.messageEl.value = parseSaveData.textarea
        console.log(parseSaveData)
    }

 }

