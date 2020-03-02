function closeDisclaimer()
{
    document.getElementById("disclaimer").style.opacity = "0";
    
    document.getElementById("close").style.width = "0";
    document.getElementById("close").style.opacity = "0";
    document.getElementById("opening").style.width = "0";
    document.getElementById("opening").style.opacity = "0";
    document.getElementById("disclaimer").style.width = "0";
    document.body.style.overflow = 'auto';
    document.html.style.overflow = 'auto';
    
};