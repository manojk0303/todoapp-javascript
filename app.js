let inp1 = document.querySelector("#inp1");
let inp1s  = document.querySelector("#inp1submit");
let inp2 = document.querySelector("#inp2");
let ul = document.querySelector(".lists");
let clear = document.querySelector("#clear");





inp1s.addEventListener('click',createTask)
ul.addEventListener('click',delTask)
clear.addEventListener('click',clearTask)
inp2.addEventListener('keyup',searchTask)
document.addEventListener('DOMContentLoaded',getTasks)







function check_whether_task_is_same(el){
    
    let a=0
    tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks !== null){
        tasks.forEach(function(task){
            if(task === el){
            a=1
            console.log("task  :",task,"el    :",el)
            }
        })}

    if(a==1){
        return true
    }else{
        return false
    }
}


function getTasks(e){
    if (localStorage.getItem('tasks') == null){
        // localStorage.createLocalStorage('tasks')
        tasks = [];
        console.log('yes')
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

        
    }
    tasks.forEach(function(task){
        let newl = document.createElement('li');
    newl.classList.add('list')
    newl.classList.add('item')
    // let newspan = document.createElement('span');
    newl.appendChild(document.createTextNode(task))

    // newl.appendChild(newspan);
    // newl.innerText = name
    console.log(newl.textContent);

    newl.innerHTML += '<a class= "delete" href="#"><img src="images/ic.png" alt="del" ></a>'
    ul.appendChild(newl)
    })
}



function createLocalStorage(task){
    let tasks;

    if (localStorage.getItem('tasks') == null){
        // localStorage.createLocalStorage('tasks')
        tasks = [];
        console.log('yes')
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

        
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}





function createTask(e){
    e.preventDefault();

    

    let name = inp1.value;

    if(name==""){
        alert("no tasks were given")
    } 
    else if(check_whether_task_is_same(name)){
        alert("task already exist")
        
    }
    
    
    else{
        let newl = document.createElement('li');
        newl.classList.add('list')
        newl.classList.add('item')
        newl.appendChild(document.createTextNode(name));
        // newl.innerText = name
        console.log(newl.textContent);
    
        newl.innerHTML += '<a class= "delete" href="#"><img src="images/ic.png" alt="del" ></a>'
        ul.appendChild(newl)
        inp1.value = ""
        createLocalStorage(name)}
   }







function delTask(e){
    if(e.target.parentElement.classList.contains('delete')){
        // console.log(e.target,'  yes')

        ul.removeChild(e.target.parentElement.parentElement)

    }
    else{
        console.log('no')
    }
    let tasks;
    // console.log(localStorage.getItem('tasks'))

    if (localStorage.getItem('tasks') == null){
        // localStorage.createLocalStorage('tasks')
        tasks = [];
        console.log('yes')
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

        
    }
    tasks.forEach(function(task){
        console.log(e.target.parentElement.parentElement.textContent,task)

        if(e.target.parentElement.parentElement.textContent === task){

            tasks.splice(tasks.indexOf(task),1)
        }
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
}







function clearTask(e){
    
    // ul.innerHTML = ""
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)


    }
    localStorage.clear()
        
    console.log(ul.firstChild)  
}

function searchTask(e){
    let text = e.target.value.toLowerCase();
    let lists = document.querySelectorAll(".list");
    
    lists.forEach(function(list){
    let item = list.firstChild.textContent.toLowerCase();

    if(item.indexOf(text) !== -1){
        list.style.display = 'grid';
    }else{
        list.style.display = 'none';

    }
    })
}
