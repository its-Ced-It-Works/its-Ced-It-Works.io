function closeStart()
{
    document.getElementById("disclaimer").classList.add("fade-and-spin");
    document.getElementById("close").classList.add("fade-and-spin");
    document.getElementById("opening").innerHTML = "";
    setTimeout(closeDisclaimer,2000);
    document.body.style.overflow = 'auto';
    document.html.style.overflow = 'auto';
    
};

function closeDisclaimer()
{
    document.getElementById("disclaimer").style.opacity = "0";
    document.getElementById("close").style.width = "0";
    document.getElementById("close").style.opacity = "0";
    document.getElementById("opening").style.width = "0";
    document.getElementById("opening").style.opacity = "0";
    document.getElementById("disclaimer").style.width = "0";
};