
// window.vipulsMessag = "Hello, this is in Javascript";
// window.sayIt = (message) =>{
//     console.log(message);
// }


class InstallHelper
{
    consructor(){
        console.log("InstallHelper::InstallHelper() called");
        this.canInstallFlag = false;
        this.wasInstalledFlag = false;
        this.deferredPrompt = null;
    }

    wasInstalled(){
        return this.wasInstalledFlag;
    }

    canInstall(){
        console.log("JS: canInstall called");
        return this.canInstallFlag;
    }

    showPromptNow(){
        console.log("Inside showPromptNow on the JS side");
        console.log("deferredPrompt is " + this.deferredPrompt);
        if( this.deferredPrompt){
            this.deferredPrompt.prompt();
        }
    }
}

const _instance = new InstallHelper();
window.InstallHelperInstance = _instance;


window.addEventListener("beforeinstallprompt", (e)=>{
    console.log("JS: beforeinstallprompt event handler called...");
    _instance.deferredPrompt = e;
    _instance.canInstallFlag = true;
    e.preventDefault();
});

window.addEventListener('appinstalled',(e) => {
    console.log("JS: appinstalled event handler called...");
    _instance.wasInstalledFlag = true;
    _instance.deferredPrompt = null;
});
