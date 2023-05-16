const notice=document.querySelector(".notice");
const events=document.querySelector(".events");
const home=document.querySelector(".home");
const dash=document.querySelector(".dash");
const noticeContent=document.querySelector(".notice-content");
const eventContent=document.querySelector(".event-content");

notice.addEventListener("click",function(){
    dash.style.display="none";
    eventContent.style.display="none";
    noticeContent.style.display="";
})
home.addEventListener("click",function(){
    noticeContent.style.display="none";
    eventContent.style.display="none";
    dash.style.display="";
})
events.addEventListener("click",function(){
    noticeContent.style.display="none";
    eventContent.style.display="";
    dash.style.display="none";
})


window.addEventListener('load',()=>{
    noticeContent.style.display='none';
    eventContent.style.display="none";
    const form=document.querySelector("#new-notice");
    const input=document.querySelector("#notice-input");
    const file=document.querySelector("#notice-file");
    const noticeList=document.querySelector(".notice-list");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const title=input.value; 
        if(!title){
            alert("Please enter the notice title.");
            return;
        }
        const notice_EL=document.createElement("div");
        notice_EL.classList.add("notices");

        const notice_content_EL=document.createElement("div");
        notice_content_EL.classList.add("content");
        notice_EL.appendChild(notice_content_EL);

        const notice_input_el=document.createElement('input');
        notice_input_el.classList.add("text");
        notice_input_el.type="text";
        notice_input_el.value=title;
        notice_input_el.setAttribute("readonly","readonly");

        notice_content_EL.appendChild(notice_input_el);

        const notice_actions_el=document.createElement("div");
        notice_actions_el.classList.add("actions");

        const notice_download_El=document.createElement("button");
        notice_download_El.classList.add("download");
        notice_download_El.innerHTML="Download";
        notice_download_El.value=file.value;
        console.log(notice_download_El.value);

       

        const notice_delete_El=document.createElement('button');
        notice_delete_El.classList.add("delete");
        notice_delete_El.innerHTML="Delete";

        notice_actions_el.appendChild(notice_download_El);
        notice_actions_el.appendChild(notice_delete_El);

        notice_EL.appendChild(notice_actions_el);
        noticeList.appendChild(notice_EL);

        input.value="";

        notice_delete_El.addEventListener("click",()=>{
            noticeList.removeChild(notice_EL);
        });
        
        notice_download_El.addEventListener("click",()=>{
            const filedata=notice_download_El.value;
            if(!filedata){
                alert("no detail notice");
                return;
            }

            var blob = new Blob([filedata],{type:'text/plain'});

            const link=document.createElement('a');
            link.href=URL.createObjectURL(blob);
            link.download=notice_download_El.value;
            link.click();
            
        });
    });
});
