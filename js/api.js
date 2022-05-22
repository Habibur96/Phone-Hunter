

const searchPhone = () => {
    const searchText = document.getElementById('input').value;

    document.getElementById('input').value = '';// Clear data

    if (searchText == '') {
        alert('Please write something to display.');
    }
    else {

        //load data
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => displayPhone(data.data))
            .catch(error => displayErrorMessage(error))
    }
}

const displayPhone = data => {
    // console.log(data)
    if (data.length == 0) {
        alert('No phone found');

    } else {
        const phone = document.getElementById('phone');
        phone.textContent = '';

        let count = 0;
        data.forEach(info => {
            count++;
            if (count > 20) {
                showAll(info);
            }

            else {

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
            }
        });
    }
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
         <h5 class=""><i style="color: tomato">Release Date : </i> ${data.releaseDate ? data.releaseDate : 'No release date found'}</h5>
         <h5 class="text-center mt-4 mb-4"><i style="color: blue">Main-Features</i> </h5>
         <h5 class=""><i style="color: tomato">Chip set : </i> ${data.mainFeatures.chipSet}</h5>
         <h5 class=""><i style="color: tomato">Display Size : </i> ${data.mainFeatures.displaySize}</h5>
         <h5 class=""><i style="color: tomato">Memory : </i> ${data.mainFeatures.memory}</h5>
         <h5 class=""><i style="color: tomato">Sensors : </i> ${data.mainFeatures.sensors}</h5>
         <h5 class=""><i style="color: tomato">Storage : </i> ${data.mainFeatures.storage}</h5>
         <h5 class="text-center mt-4 mb-4"><i style="color: blue">Others</i> </h5>
         <h5 class=""><i style="color: tomato">Bluetooth : </i> ${data.others.Bluetooth}</h5>
         <h5 class=""><i style="color: tomato">GPS : </i> ${data.others.GPS}</h5>
         <h5 class=""><i style="color: tomato">NFC : </i> ${data.others.NFC}</h5>
         <h5 class=""><i style="color: tomato">Radio : </i> ${data.others.Radio}</h5>
         <h5 class=""><i style="color: tomato">USB : </i> ${data.others.USB}</h5>
         <h5 class=""><i style="color: tomato">WLAN : </i> ${data.others.WLAN}</h5>
        
     </div>
     </div>
     `
    phoneDetail.appendChild(div);
}

//Show All Mobile
const showAll = data => {

    document.getElementById('otherPhone').addEventListener('click', function () {

        const phone = document.getElementById('phone');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
     <div class="card text-center">
     <img src="${data.image}" class="card-img-top" alt="...">
     <div class="card-body">
         <h5 class="card-title"><b>Name:</b> ${data.phone_name}</h5>
         <h5 class="card-title"><b>Brand:</b> ${data.brand}</h5>
         <button type="button" onclick="CallByPhoneId('${data.slug}')" class="btn btn-info btn-sm">Explore</button>
        
     </div>
     </div>
 
     `
        phone.appendChild(div)
    })
}


