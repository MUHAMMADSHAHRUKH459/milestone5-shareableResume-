"use strict";
let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let desig = localStorage.getItem("designation");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let DOB = localStorage.getItem("dob");
    let add = localStorage.getItem("Address");
    let pass = localStorage.getItem("pass");
    let deg = localStorage.getItem("deg");
    let institute = localStorage.getItem("uni");
    let pass1 = localStorage.getItem("pass1");
    let deg1 = localStorage.getItem("deg1");
    let institute1 = localStorage.getItem("uni1");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let institute2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let skill6 = localStorage.getItem("skill6");
    let skill7 = localStorage.getItem("skill7");
    let skill8 = localStorage.getItem("skill8");
    let lang = localStorage.getItem("lang");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let jobTitle = localStorage.getItem("jobTitle");
    let styear1 = localStorage.getItem("styear1");
    let endyear1 = localStorage.getItem("endyear1");
    let company1 = localStorage.getItem("company1");
    let jobTitle1 = localStorage.getItem("jobTitle1");
    let link = localStorage.getItem("link");
    let link1 = localStorage.getItem("link1");
    let picture = localStorage.getItem("profile_pic");
    let resumeName = document.getElementById("resName");
    resumeName.textContent = myName;
    let resumeDesig = document.getElementById("resDesig");
    resumeDesig.textContent = desig;
    let resumePhone = document.getElementById("resPhone");
    resumePhone.textContent = phone;
    let resumeEmail = document.getElementById("resEmail");
    resumeEmail.textContent = email;
    let resumeDOB = document.getElementById("resDOB");
    resumeDOB.textContent = DOB;
    let resumeAdd = document.getElementById("resAdd");
    resumeAdd.textContent = add;
    let resumePass = document.getElementById("resPass");
    resumePass.textContent = pass;
    let resumeDeg = document.getElementById("resDeg");
    resumeDeg.textContent = deg;
    let resumeInst = document.getElementById("resInst");
    resumeInst.textContent = institute;
    let resumePass1 = document.getElementById("resPass1");
    resumePass1.textContent = pass1;
    let resumeDeg1 = document.getElementById("resDeg1");
    resumeDeg1.textContent = deg1;
    let resumeInst1 = document.getElementById("resInst1");
    resumeInst1.textContent = institute1;
    let resumePass2 = document.getElementById("resPass2");
    resumePass2.textContent = pass2;
    let resumeDeg2 = document.getElementById("resDeg2");
    resumeDeg2.textContent = deg2;
    let resumeInst2 = document.getElementById("resInst2");
    resumeInst2.textContent = institute2;
    let resumeSkill1 = document.getElementById("resSkill1");
    resumeSkill1.textContent = skill1;
    let resumeSkill2 = document.getElementById("resSkill2");
    resumeSkill2.textContent = skill2;
    let resumeSkill3 = document.getElementById("resSkill3");
    resumeSkill3.textContent = skill3;
    let resumeSkill4 = document.getElementById("resSkill4");
    resumeSkill4.textContent = skill4;
    let resumeSkill5 = document.getElementById("resSkill5");
    resumeSkill5.textContent = skill5;
    let resumeSkill6 = document.getElementById("resSkill6");
    resumeSkill6.textContent = skill6;
    let resumeSkill7 = document.getElementById("resSkill7");
    resumeSkill7.textContent = skill7;
    let resumeSkill8 = document.getElementById("resSkill8");
    resumeSkill8.textContent = skill8;
    let resumeLang = document.getElementById("resLang");
    resumeLang.textContent = lang;
    let resumeLang1 = document.getElementById("resLang1");
    resumeLang1.textContent = lang1;
    let resumeLang2 = document.getElementById("resLang2");
    resumeLang2.textContent = lang2;
    let resumeStyear = document.getElementById("resStyear");
    resumeStyear.textContent = styear;
    let resumeEndyear = document.getElementById("resEndyear");
    resumeEndyear.textContent = endyear;
    let resumeCompany = document.getElementById("resCompany");
    resumeCompany.textContent = company;
    let resumeJobTitle = document.getElementById("resJobTitle");
    resumeJobTitle.textContent = jobTitle;
    let resumeStyear1 = document.getElementById("resStyear1");
    resumeStyear1.textContent = styear1;
    let resumeEndyear1 = document.getElementById("resEndyear1");
    resumeEndyear1.textContent = endyear1;
    let resumeCompany1 = document.getElementById("resCompany1");
    resumeCompany1.textContent = company1;
    let resumeJobTitle1 = document.getElementById("resJobTitle1");
    resumeJobTitle1.textContent = jobTitle1;
    let resumeLink = document.getElementById("resLink");
    resumeLink.textContent = link;
    let resumeLink1 = document.getElementById("resLink1");
    resumeLink1.textContent = link1;
    let resPic = document.getElementById("resImg");
    resPic.src = picture;
});
// print button
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
// edit button
let edit_btn = document.getElementById('edit_btn');
edit_btn?.addEventListener('click', () => {
    window.history.back();
});
// share button
let share_btn = document.getElementById('share_btn');
let anc = document.getElementById('anc');
let userName;
if (myName) {
    userName = myName.toLowerCase().replace(/\s+g/, '-');
}
else {
    userName = 'user';
}
let baseUrl = 'http://127.0.0.1:5500/resume/static.html';
let uniqueUrl = `${baseUrl}?/${userName}`;
share_btn?.addEventListener('click', () => {
    anc?.setAttribute('href', uniqueUrl);
});
// Copy button
let copy = document.getElementById('copy_btn');
copy?.addEventListener('click', () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert('Link copied to clipboard');
    });
});
