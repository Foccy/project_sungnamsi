const navHover = document.querySelectorAll('.one_depth_menu_list>li')
const navDepth1 = document.querySelectorAll('.hidden_nav_depth>.nav_depth')


for(let i=0; i<=navHover.length; i++){
  navHover[i].addEventListener("mouseover",()=>{
    navDepth1[i].style.display='block'
  })
  navDepth1[i].addEventListener("mouseover",()=>{
    navDepth1[i].style.display='block'
  })
  navHover[i].addEventListener("mouseout",()=>{
    navDepth1[i].style.display='none'
  })
  navDepth1[i].addEventListener("mouseout",()=>{
    navDepth1[i].style.display='none'
  })
}