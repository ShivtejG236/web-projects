let StartB = document.getElementsByClassName("StartB")[0]
let Startmenu = document.getElementsByClassName("Startmenu")[0]
let SearchB = document.getElementsByClassName("SearchB")[0]
let SearchH = document.getElementsByClassName("SearchH")[0]
let Searchmenu = document.getElementsByClassName("Searchmenu")[0]
let TaskviewB = document.getElementsByClassName("TaskviewB")[0]
let Taskview = document.getElementsByClassName("Taskview")[0]
let WidgetsB = document.getElementsByClassName("WidgetsB")[0]
let Widgets = document.getElementsByClassName("Widgets")[0]
let TeamsB = document.getElementsByClassName("TeamsB")[0]
let Teams = document.getElementsByClassName("Teams")[0]
let SettingsB = document.getElementsByClassName("SettingsB")[0]
let SettingsMin = document.getElementsByClassName("SettingsMin")[0]

StartB.addEventListener("click", ()=>{
    if (Startmenu.style.bottom == "80px"){
        Startmenu.style.bottom = "-780px"
    }
    else{
        Startmenu.style.bottom = "80px"
        Searchmenu.style.bottom = "-780px"
        Widgets.style.left = "-750px"
        Teams.style.bottom = "-550px"
    }
})

SearchB.addEventListener("click", ()=>{
    if (Searchmenu.style.bottom == "80px"){
        Searchmenu.style.bottom = "-780px"
    }
    else{
        Searchmenu.style.bottom = "80px"
        Startmenu.style.bottom = "-780px"
        SearchH.style.bottom = "-250px"
        Widgets.style.left = "-750px"
    }
})
SearchB.addEventListener("mouseover", ()=>{
    if (SearchH.style.bottom == "-250px"){
        SearchH.style.bottom = "80px"
        Searchmenu.style.bottom = "-780px"
    }
    else{
        SearchH.style.bottom = "80px"
    }
})
SearchB.addEventListener("mouseleave", ()=>{
    if (SearchH.style.bottom == "80px"){
        SearchH.style.bottom = "-250px"
    }
    else{
        SearchH.style.bottom = "-250px"
    }
})
TaskviewB.addEventListener("mouseover", ()=>{
    if (Taskview.style.bottom == "-250px"){
        Taskview.style.bottom = "80px"
        Startmenu.style.bottom = "-780px"
        Searchmenu.style.bottom = "-780px"
        Widgets.style.left = "-750px"
        Teams.style.bottom = "-550px"
    }
    else{
        Taskview.style.bottom = "80px"
    }
})
TaskviewB.addEventListener("mouseleave", ()=>{
    if (Taskview.style.bottom == "80px"){
        Taskview.style.bottom = "-250px"
    }
    else{
        Taskview.style.bottom = "-250px"
    }
})
WidgetsB.addEventListener("click", ()=>{
    if (Widgets.style.left == "-750px"){
        Widgets.style.left = "-4px"
        Startmenu.style.bottom = "-780px"
        Searchmenu.style.bottom = "-780px"
        Teams.style.bottom = "-550px"
    }
    else{
        Widgets.style.left = "-750px"
    }
})
TeamsB.addEventListener("click", ()=>{
    if (Teams.style.bottom == "-550px"){
        Teams.style.bottom = "80px"
        Startmenu.style.bottom = "-780px"
        Searchmenu.style.bottom = "-780px"
        Widgets.style.left = "-750px"
    }
    else{
        Teams.style.bottom = "-550px"
    }
})
SettingsB.addEventListener("click", ()=>{
    if (SettingsMin.style.bottom == "-800px"){
        SettingsMin.style.bottom = "80px"
        Startmenu.style.bottom = "-780px"
        Searchmenu.style.bottom = "-780px"
        Taskview.style.bottom = "-250px"
        Teams.style.bottom = "-550px"
        Widgets.style.left = "-750px"
    }
    else{
        SettingsMin.style.bottom = "80px"
    }
})