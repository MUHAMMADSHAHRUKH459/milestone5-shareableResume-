let myName : any = document.getElementById('name')
let desig : any = document.getElementById('designation')
let phone : any =  document.getElementById('phone')
let email : any = document.getElementById('email')
let DOB : any = document.getElementById('dob')
let address : any = document.getElementById('Address')
let pic : any = document.getElementById('pic')
let pass : any = document.getElementById('pass')
let degree : any = document.getElementById('deg')
let institute : any = document.getElementById('uni')
let pass1 : any = document.getElementById('pass1')
let degree1 : any = document.getElementById('deg1')
let institute1 : any = document.getElementById('uni1')
let skill1 : any = document.getElementById('skill1')
let skill2 : any = document.getElementById('skill2')
let skill3 : any = document.getElementById('skill3')
let skill4 : any = document.getElementById('skill4')
let skill5 : any = document.getElementById('skill5')
let skill6 : any = document.getElementById('skill6')
let skill7 : any = document.getElementById('skill7')
let skill8 : any = document.getElementById('skill8')
let lang : any = document.getElementById('lang')
let lang1 : any = document.getElementById('lang1')
let lang2 : any = document.getElementById('lang2')
let styear : any = document.getElementById('styear')
let endyear : any = document.getElementById('endyear')
let company : any = document.getElementById('company') 
let jobTitle : any = document.getElementById('jobTitle')
let styear1 : any = document.getElementById('styear1')
let endyear1 : any = document.getElementById('endyear1')
let company1 : any = document.getElementById('company1') 
let jobTitle1 : any = document.getElementById('jobTitle1')
let link : any = document.getElementById('link')
let link1 : any = document.getElementById('link1')

let submitBtn = document.getElementById('submitBtn');
let form  = document.getElementById('form');

form?.addEventListener('submit', (e) => {
    e.preventDefault()

    localStorage.setItem('name', myName.value) 
    localStorage.setItem('designation', desig.value)
    localStorage.setItem('phone', phone.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('dob', DOB.value)
    localStorage.setItem('Address', address.value)
    localStorage.setItem('pass', pass.value)
    localStorage.setItem('deg', degree.value)
    localStorage.setItem('uni', institute.value)
    localStorage.setItem('pass1', pass1.value)
    localStorage.setItem('deg1', degree1.value)
    localStorage.setItem('uni1', institute1.value)
    localStorage.setItem('skill1', skill1.value)
    localStorage.setItem('skill2', skill2.value)
    localStorage.setItem('skill3', skill3.value)
    localStorage.setItem('skill4', skill4.value)
    localStorage.setItem('skill5', skill5.value)
    localStorage.setItem('skill6', skill6.value)
    localStorage.setItem('skill7', skill7.value)
    localStorage.setItem('skill8', skill8.value)
    localStorage.setItem('lang', lang.value)
    localStorage.setItem('lang1', lang1.value)
    localStorage.setItem('lang2', lang2.value)
    localStorage.setItem('styear', styear.value)
    localStorage.setItem('endyear', endyear.value)
    localStorage.setItem('company', company.value)
    localStorage.setItem('jobTitle', jobTitle.value)
    localStorage.setItem('styear1', styear1.value)
    localStorage.setItem('endyear1', endyear1.value)
    localStorage.setItem('company1', company1.value)
    localStorage.setItem('jobTitle1', jobTitle1.value)
    localStorage.setItem('link', link.value)
    localStorage.setItem('link1', link1.value)


    console.log(pic.files[0]);
    

    if(pic.files && pic.files[0]){
        let reader  = new FileReader();
            reader.addEventListener("load", () => {
                let textImg : any = reader.result
                localStorage.setItem('profile_pic', textImg)
                
            })
            reader.readAsDataURL(pic.files[0])
        }
    


    window.location.href = 'resume/static.html'
})