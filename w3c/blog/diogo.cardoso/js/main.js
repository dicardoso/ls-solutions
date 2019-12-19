const posts = document.querySelector('.posts')
var com = []

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(req => req.json())
    .then(json => showPosts(json))

function comentarios(id){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(req => req.json())
        .then(json => showComments(json, id))    
}

function showComments(json, id){
    let text = ''
    let aux = json.filter(c => c.postId == id)
    
    aux.forEach(comment => {             
        text += `<div class="comment">
            <div class="id">#${comment.id}</div>
            <h4>${comment.email}</h4>
            <p>${comment.body}</p>
        </div>` 
    })      
}
function showPosts(json){
    json.forEach(post => {
        let add = `<div class="post">
            <div class="author">
                <div class="num">#${post.id}</div>
                <div class="body">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
            </div>
            
            <div class="comments">
                <h3>Comentários</h3>
                ${comentarios(post.id)}
            </div>
        </div>` 
        posts.insertAdjacentHTML('beforeend', add)       
    });
}
