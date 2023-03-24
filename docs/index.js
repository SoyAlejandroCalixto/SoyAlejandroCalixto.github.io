let mob_startsearch = document.getElementById("mobile-startsearch");
mob_startsearch.addEventListener("click", startsearch_click);

let mob_searchbar = document.getElementById("mobile-searchbar");
function startsearch_click()
{
    if(mob_searchbar.style.left == "0px")
    {
        mob_searchbar.style.left = "-100vw";
        mob_searchbar.style.opacity = "0";
    }
    else
    {
        mob_searchbar.style.left = "0px";
        mob_searchbar.style.opacity = "1";
    }
}