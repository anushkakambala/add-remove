
var btn=document.querySelector('#btn')
var container=document.querySelector('#container')
var count=1
btn.addEventListener('click',()=>{
    let btnEle=document.createElement('button')
    btnEle.innerHTML="Button-"+count
    count+=1
    btnEle.addEventListener('click',()=>{
        btnEle.remove()
    })
    container.appendChild(btnEle)
})