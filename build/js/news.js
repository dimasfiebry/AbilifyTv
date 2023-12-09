
let lastScrolltop = 0
let navbar = document.querySelector('.navbar')


window.addEventListener('scroll', ()=>{
   let scrollTop = window.scrollY || document.documentElement.scrollTop

  

   if (scrollTop>lastScrolltop && scrollTop > navbar.offsetHeight) {
     navbar.classList.add('hidden')

   } else {
      if(scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
        navbar.classList.remove('hidden')
      }
   }
   lastScrolltop = scrollTop
})
