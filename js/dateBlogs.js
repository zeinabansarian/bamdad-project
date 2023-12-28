let blogDate= document.querySelectorAll('.blgDate') 


blogDate.forEach(blog=>{
    let day = blog.childNodes[1].innerText
    let splitDay = day.split(' ')
    let dayBlog = splitDay[0]
    let monthBlog = splitDay[1]

    let topDate= dayBlog.concat(monthBlog)
    let yearBlog = splitDay[2]
    blog.childNodes[3].children[0].innerText = topDate
    blog.childNodes[5].children[0].innerText = yearBlog
    
})
