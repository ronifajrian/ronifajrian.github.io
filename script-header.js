var arrNav = ["home","about","contact"]
var arrSocmed = ["twitter","facebook","instagram","linkedin"]

var header = document.createElement("div")
header.setAttribute("class","header")



// UL Header

var ulNav = document.createElement("ul")
ulNav.setAttribute("id","nav")

var menu = []
for (var i = 0; i < arrNav.length; i++) {
  menu.push(document.createElement("li"))
  link = document.createElement("a")
  link.setAttribute("href","#"+arrNav[i])
  link.setAttribute("class","navigasi")
    txtLink = document.createTextNode(arrNav[i].toUpperCase())

  link.appendChild(txtLink)
  menu[i].appendChild(link)
  ulNav.appendChild(menu[i])
}
//////////////////////////////////////////////////////////////////////////////

var ulSocmed = document.createElement("ul")
ulSocmed.setAttribute("id","socmed")

var menu = []
for (var i = 0; i < arrSocmed.length; i++) {
  menu.push(document.createElement("li"))
  link = document.createElement("a")
  if (arrSocmed[i] == "linkedin") {
    link.setAttribute("href",("https://linkedin.com/in/ronifajrian"))
  } else {
    link.setAttribute("href",("https://"+arrSocmed[i]+".com/ronifajrian"))
  }
  link.setAttribute("class","sosmed")
  link.setAttribute("target","_blank")

  logo = document.createElement("img")
  logo.setAttribute("src",("images/"+arrSocmed[i]+".svg"))

  link.appendChild(logo)
  menu[i].appendChild(link)
  ulSocmed.appendChild(menu[i])
}

// isi header dengan list-list
header.appendChild(ulNav)
header.appendChild(ulSocmed)
document.body.appendChild(header)
