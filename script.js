const form = document.querySelector("form")
const generateOtp = document.getElementById("generateOtp")
const showotp = document.getElementById("show-otp")
const username = document.getElementById("username")
const email = document.getElementById("emailaddress")
const mobail = document.getElementById("mobailnumber")
let generatedOtp = null

generateOtp.addEventListener("click", (e) => {
    e.preventDefault()

    if (!username.value || !email.value || !mobail.value) {
        alert('Please fill out all fields.');
        return;
    }
    generatedOtp = ""
    for (let i = 0; i < 6; i++) {
        // generatedOtp = Math.floor(100000 + Math.random() * 900000);
        generatedOtp += Math.floor(Math.random() * 10);
    }
    showotp.style.display = 'block'
    showotp.innerText = `Your OTP is : ${generatedOtp}`
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let otpWrite = document.getElementById("otpWrite")
    if (otpWrite.value === generatedOtp) {
        // alert("Form Submitted Successfully")
        document.getElementById("submitedOk").style.display = "block"
        document.getElementById("formControl").style.display = "none"
        form.reset()
        showotp.style.display = "none"
    }
    else {
        alert("Entered OTP is wrong")
        otpWrite.value = ""
    }
})

document.getElementById("submitOkay").addEventListener("click",()=>{
    document.getElementById("formControl").style.display = "block"
    document.getElementById("submitedOk").style.display = "none"
})
