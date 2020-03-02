function closeStart()
{
    document.getElementById("disclaimer").classList.add("fade-and-spin");
    document.getElementById("close").classList.add("fade-and-spin");
    document.getElementById("opening").innerHTML = "";
    setTimeout(closeDisclaimer,1900);
    document.body.style.overflow = 'auto';
    document.html.style.overflow = 'auto';
    
};

function closeDisclaimer()
{
    document.getElementById("disclaimer").remove();
    document.getElementById("disclaimer").style.width = "0";

    document.getElementById("close").style.width = "0";
    document.getElementById("opening").style.width = "0";
};