const data = [
    
    {
        name:'Ash yung',
        age:30,
        gender:'male',
        lookingfor :'female',
        location:'beijing china',
        image:'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
        name:'Ashley chase',
        age:28,
        gender:'female',
        lookingfor :'male',
        location:'new_york usa',
        image:'https://randomuser.me/api/portraits/women/86.jpg'
    },
    {
        name:'Joy yu',
        age:36,
        gender:'female',
        lookingfor :'male',
        location:' tokyo japan',
        image:'https://randomuser.me/api/portraits/women/87.jpg'
    },
    {
        name:'Ram malhotra',
        age:30,
        gender:'male',
        lookingfor :'female',
        location:' delhi india',
        image:'https://randomuser.me/api/portraits/men/90.jpg'
    },
    {
        name:'Adam gilchrist',
        age:34,
        gender:'male',
        lookingfor :'female',
        location:'queen park australia',
        image:'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
        name:'Esparenza torres',
        age:35,
        gender:'female',
        lookingfor :'male',
        location:'madrid spain',
        image:'https://randomuser.me/api/portraits/women/96.jpg'
    },
    {
        name:'Ryan doe',
        age:27,
        gender:'male',
        lookingfor :'female',
        location:'paris ',
        image:'https://randomuser.me/api/portraits/men/98.jpg'
    },
    {
        name:'Sarclet jhonson',
        age:29,
        gender:'female',
        lookingfor :'male',
        location:'colombia',
        image:'https://randomuser.me/api/portraits/women/70.jpg'
    },

]

//profile iterator
const profiles = profileIterator(data);
nextProfile();

//next event 
document.getElementById('next').addEventListener('click',nextProfile);

//nextprofile function


function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile!== undefined){
        document.getElementById('profileDisplay').innerHTML=`
    <ul class="list-group">
    <li class = "list-group-item">Name: ${currentProfile.name}</li>
    <li class = "list-group-item">Age: ${currentProfile.age}</li>
    <li class = "list-group-item">Location: ${currentProfile.location}</li>
    <li class = "list-group-item">Gender: ${currentProfile.gender} looking for : ${currentProfile.lookingfor}</li>
    </ul>
     `;

     document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    }else{
        //no more profile exist
        window.location.reload();
    }
    
}

function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next:function(){
            return nextIndex < profiles.length ?
             {value:profiles[nextIndex++],done:false}:
             {done:true}
        }
    }
}
