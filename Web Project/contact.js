

// var navLinks=document.getElementById("navLinks");
// function showmenu(){
//     navLinks.style.right="0";
// }
// function hidemenu(){
//     navLinks.style.right="-200px";
// }

// // let hello = function() {
    
// // let inpName = document.querySelector("inpName")
// // let inpEmail = document.querySelector("inpEmail")
// // let inpSubject = document.querySelector("inpSubject")
// // let btn = document.getElementById("#sbmtbtn")

// // btn.addEventListener("click",(e)=>{
// //     let input = e.target.value;
// //     console.log(input);
// // })
// // }



// // document.getElementById('contactForm').addEventListener('submit', function(event) {
// //     event.preventDefault(); // Prevent default form submission

// //     const formData = new FormData(this);
// //     const formObject = {};
// //     formData.forEach(function(value, key) {
// //         formObject[key] = value;
// //     });

//     // axios.post('/api/messages', formObject)
//     //     .then(function (response) {
//     //         alert(response.data);
//     //     })
//     //     .catch(function (error) {
//     //         console.error('Submission error:', error);
//     //         alert('Failed to submit the form.');
//     //     });
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let res = await axios.post('http://localhost:4000/api/messages',formData)
//         if(res){
//             console.log(res.data);
//         }
//         console.log(res);
//       }



