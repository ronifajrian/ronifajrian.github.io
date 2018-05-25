var content = document.createElement("div")
content.setAttribute("class","content")

var arrMenu = []
for (var i = 0; i < arrNav.length; i++) {
  arrMenu.push(document.createElement("div"))

  arrMenu[i].setAttribute("id",arrNav[i])
  judul = document.createElement("h2")
  breakLine = document.createElement("hr")

  arrMenu[i].appendChild(judul)
  arrMenu[i].appendChild(breakLine)
  content.appendChild(arrMenu[i])
}
document.body.appendChild(content)

//////////////////////////////////

var arrJudul = []
for (var i = 0; i < arrNav.length; i++) {
  arrJudul.push(document.getElementById(arrNav[i]))

  var judul = arrJudul[i].getElementsByTagName("h2")[0]

  if (arrNav[i] == "home") {
    judul.innerHTML = "WELCOME"
  }else {
    judul.innerHTML = arrNav[i].toUpperCase()
  }
}
/////////////////////////////////////HOME///////////////////////////////////////

var home = document.getElementById("home")

var h3 = document.createElement("h3")
var p = document.createElement("p")
p.innerHTML = "Hi, i am RONI, this is my first webpage, Let's be FullStack Developer with Hacktiv8"
p.style.color = "#0e71ce"

var img = document.createElement("img")
img.setAttribute("id","imgFullStack")
img.setAttribute("src","images/FullStack-Image.jpg")

h3.appendChild(p)
home.appendChild(h3)
home.appendChild(img)

/////////////////////////////////////ABOUT//////////////////////////////////////
var about = document.getElementById("about")

var p = document.createElement("p")
var p1 = document.createElement("p")
var p2 = document.createElement("p")

var img = document.createElement("img")
img.setAttribute("id","imgFoto")
img.setAttribute("src","images/gateway.JPG")
p.appendChild(img)

p1.innerHTML = "I'm a student of Hacktiv8. My Target is being Fullstack Developer"
p2.innerHTML = "I am a fresh graduate from Telkom University who graduated in 2017. I majored as Informatic Engineering, and understand the basics of programming, but my skill as a programmer is not that deep. I understand the basics of PHP, HTML, and JAVA."

about.appendChild(p)
about.appendChild(p1)
about.appendChild(p2)

/////////////////////////////////////CONTACT//////////////////////////////////////
var contact = document.getElementById("contact")

var forms = document.createElement("form")
forms.setAttribute("action","index.html")
forms.setAttribute("name","forms")
forms.setAttribute("onsubmit","return formsValidation()")

contact.appendChild(forms)

var arrInput = ["First Name","Last Name"]

for (var i = 0; i < arrInput.length; i++) {
  var label = document.createElement("label")
  label.setAttribute("for",arrInput[i])
  label.innerHTML = arrInput[i].toUpperCase()
  forms.appendChild(label)

  var input = document.createElement("input")
  input.setAttribute("type","text")
  input.setAttribute("id",arrInput[i])
  input.setAttribute("name",arrInput[i])
  input.setAttribute("placeholder",arrInput[i]+"...")
  forms.appendChild(input)
}

  document.addEventListener("click", function(){
    for (var i = 0; i < arrInput.length; i++) {
    document.getElementById(arrInput[i]).style.backgroundColor = "white"
  }
})


var txtArea = document.createElement("textarea")
txtArea.setAttribute("name","message")
txtArea.setAttribute("id","message")
txtArea.setAttribute("rows","8")
txtArea.setAttribute("cols","50%")
txtArea.setAttribute("placeholder","type your message here...")


forms.appendChild(txtArea)



var button = document.createElement("input")
button.setAttribute("type","submit")
button.setAttribute("value","Submit")

forms.appendChild(button)



function formsValidation() {
  var arrEmp = []
  var message = document.getElementById("message")

  for (var i = 0; i < arrInput.length; i++) {
    var input = document.getElementById(arrInput[i])

    if (input.value == "") {
      arrEmp.push(arrInput[i])
    }
  }
  if (arrEmp.length !== 0) {
    alert(arrEmp + " masih kosong!")

    for (var i = 0; i < arrEmp.length; i++) {
      document.getElementById(arrEmp[i]).style.backgroundColor = "red"
    }
    return false
  } else {
    alert("Thank You!")
  }
}
