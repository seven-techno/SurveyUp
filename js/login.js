/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function check(form)/*function to check userid & password*/
{
    /*the following code checkes whether the entered userid and password are matching*/
    if (form.userid.value === "admin" && form.pswrd.value === "admin")
    {
        var uname = escape(form.userid.value) + ";";
        document.cookie = "name=" + uname;
        window.location.href = "finalprivate.html";

    } else
    {
        alert("Error Password or Username");/*displays error message*/
    }

}

function login() {

    if (event.keyCode === 13)
        document.getElementById('loginbtn').click();

}

function logout() {
    if (document.cookie.length !== 0)
    {
        document.cookie = "name=" + "";
        window.location.href = "index.html";
    }
}
