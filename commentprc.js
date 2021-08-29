const url= `https://jsonplaceholder.typicode.com/comments`;
const showComment = comments => {
    fetch(url)
    .then(res => res.json())
    .then(data => allcomments(data))
}
const allcomments = comments=>{
    const container = document.getElementById('comments');
    let serial = 1;
    comments.forEach(element => {

        const div = document.createElement('div');
        div.innerHTML=`

        <div class="card mt-5" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${serial}.${element.name}</h5>
    <hr>
    <p> ${element.email}</p>
    
    <button onclick= showdetail(${element.id}) class="card-link btn-danger btn">Card link</button>
  </div>
</div>

        `
        serial++;

        container.appendChild(div);

        
    });
}

const showdetail= id =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(Data =>showDetails(Data))


}
const showDetails = detail => {
    console.log(detail);
    const container = document.getElementById('details');
    const div = document.createElement('div');
        div.innerHTML=`
        
    <h5>${detail.name}</h5>
    <p> ${detail.body}</p>
    
    

        `
        container.innerHTML='';
        container.appendChild(div);

}
