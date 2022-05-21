





const searchPhone = () => {
    const input = document.getElementById('input');
    const searchText = input.value;
    searchText.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayPhone(data.data))
}

const displayPhone = data => {
    // console.log(data)

    const phone = document.getElementById('phone');
    data.forEach(info => {
        // console.log(info)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card text-center">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><b>Name:</b> ${info.phone_name}</h5>
            <h5 class="card-title"><b>Brand:</b> ${info.brand}</h5>
            <button type="button" onclick="CallByPhoneId('${info.slug}')" class="btn btn-info btn-sm">Explore</button>
           
        </div>
        </div>
    
        `
        phone.appendChild(div)
    });

}

const CallByPhoneId = data => {
    console.log(data)

    const url = `https://openapi.programming-hero.com/api/phone/${data}`
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.data))
        .then(data => displayPhoneDetails(data.data))


}

const displayPhoneDetails = data => {
    console.log(data)
    const phoneDetail = document.getElementById('phoneDetail');
    phoneDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
 <div class="card ">
     <img src="${data.image}" class="card-img-top" alt="...">
     <div class="card-body">
         <h5 class=""><i style="color: tomato">Name : </i> ${data.name}</h5>
         <h5 class=""><i style="color: tomato">Main Features : </i> ${data.mainFeatures.storage}</h5>
         <h5 class=""><i style="color: tomato">Chip set : </i> ${data.mainFeatures.chipSet}</h5>
         <h5 class=""><i style="color: tomato">Display Size : </i> ${data.mainFeatures.displaySize}</h5>
         <h5 class=""><i style="color: tomato">Memory : </i> ${data.mainFeatures.memory}</h5>
         <h5 class=""><i style="color: tomato">Sensors : </i> ${data.mainFeatures.sensors}</h5>
         <h5 class=""><i style="color: tomato">Storage : </i> ${data.mainFeatures.storage}</h5>
        
     </div>
     </div>
     `
    phoneDetail.appendChild(div);
}

































