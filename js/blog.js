// let data = [];

// function onPost(event) {

//     event.preventDefault()

//     let projectName = document.getElementById('project-name').value;
//     let startDate = document.getElementById('start-date').value;
//     let endDate = document.getElementById('end-date').value;
//     let description = document.getElementById('description-box').value;
//     let nodeJs = document.getElementById('nodejs').checked;
//     let image = document.getElementById('input-image').files;

//     if(projectName == '') {
//         alert('Project Name harus di isi !');
//     } else if(startDate && endDate == '') {
//         alert('Date harus di isi !');
//     } else if(description == '') {
//         alert('Description harus di isi !');
//     }

//     let blog = {
//         projectName,
//         startDate,
//         endDate,
//         description
//         // postAt: new Date()
//     }

//     data.push(blog);
//     console.log(data);
//     // renderBlog();
    
// }

// function renderBlog() {
//     document.getElementById('blog').innerHTML = '';

//     for(i = 0; i < data.length; i++)
//     document.getElementById('blog').innerHTML += `
//     <div class="output-myproject">
//             <h1>My Project</h1>
//         </div>

//         <div class="post-blog">

//             <div class="card-blog">

//                 <div class="content-blog">

//                     <div class="thumbnail">
//                         <img src="${data[i].gambar}" alt="">
//                     </div>
                    
//                     <div class="title-blog">
//                         <h3>${data[i].projectName}</h3>
//                         <p>${selisihWaktu(data[i].postAt)}</p>
//                     </div>
                
//                     <div class="description-output">
//                         <p>${data[i].description}</p>
//                     </div>
    
//                     <div class="technologies-output">
//                         <div class="nodejs">
//                             <img src="img/nodejs.png" alt="">
//                         </div>
//                         <div class="nextjs">
//                             <img src="img/nextjs.png" alt="">
//                         </div>
//                         <div class="reactjs">
//                             <img src="img/reactjs.png" alt="">
//                         </div>
//                         <div class="typescript">
//                             <img src="img/typescript.png" alt="">
//                         </div>
//                     </div>
                    
//                     <div class="opsi-blog">
//                         <div class="edit-blog">
//                             <a href="">edit</a>
//                         </div>

//                         <div class="delete-blog">
//                             <a href="">delete</a>
//                         </div>
//                     </div>

//                 </div>

//             </div>
            
//         </div>
// `
// }

let data = [];

function addData(event) {

    event.preventDefault()

    let title = document.getElementById('project-name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('description-box').value;
    let image = document.getElementById('input-image').files;
    let gambar = URL.createObjectURL(image[0]);

    console.log(gambar);

    let blog = {
        title,
        startDate,
        endDate,
        description,
        gambar
    }

    data.push(blog);
    console.log(data);
    renderBlog()
}

function renderBlog() {
    document.getElementById("post-blog").innerHTML = ``
    for( i = 0; i < data.length; i++) {
        document.getElementById('post-blog').innerHTML += `<div class="card-blog">

        <div class="content-blog">

            <div class="thumbnail">
                <img src="${data[i].gambar}" alt="">
            </div>
            
            <div class="title-blog">
                <h3><a href="blog.html">${data[i].title}</a></h3>
                <p>durasi : 3 bulan</p>
            </div>
        
            <div class="description-output">
            ${data[i].description}    
            </div>

            <div class="technologies-output">
                <div class="nodejs">
                    <img src="img/nodejs.png" alt="">
                </div>
                <div class="nextjs">
                    <img src="img/nextjs.png" alt="">
                </div>
                <div class="reactjs">
                    <img src="img/reactjs.png" alt="">
                </div>
                <div class="typescript">
                    <img src="img/typescript.png" alt="">
                </div>
            </div>
            
            <div class="opsi-blog">
                <div class="edit-blog">
                    <a href="">edit</a>
                </div>

                <div class="delete-blog">
                    <a href="">delete</a>
                </div>
            </div>

        </div>

    </div>`
    }
}