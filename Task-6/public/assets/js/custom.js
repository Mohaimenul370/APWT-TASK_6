function loadpage(url) {
    window.location = url;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideNetworkInfo(protocol) {
    if (protocol.value == "Hotspot") {
        document.getElementById("networkInfo").style.display = "none";
    } else {
        document.getElementById("networkInfo").style.display = "block";
    }
}


function toWordCapitalCase(mySentence) {
    const words = mySentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

function fetchInterface(serverId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("d_interface").innerHTML = this.responseText;
        }
    };
    var url = "app/Controller/ajaxController.php?serverId=" + serverId + "&action=interface";
    http.open("POST", url, true);
    http.send();
}

function fetchPPPoeInterface(serverId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("d_interface").innerHTML = this.responseText;
        }
    };
    var url = "app/Controller/ajaxController.php?serverId=" + serverId + "&action=interface-pppoe";
    http.open("POST", url, true);
    http.send();
}

function fetchProfiles(serverId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("packageId").innerHTML = this.responseText;
        }
    };
    var url = "app/Controller/ajaxController.php?serverId=" + serverId + "&action=hotspot_profiles";
    http.open("POST", url, true);
    http.send();
}

function fetchPPPoEProfiles(serverId) {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("packageId").innerHTML = this.responseText;
        }
    };
    var url = "app/Controller/ajaxController.php?serverId=" + serverId + "&action=pppoe_profiles";
    http.open("POST", url, true);
    http.send();
}


function valid_mobile ( value ) {
    /*When value not number then try to convert bangla to english number*/
    if (isNaN(value)) {
        value = translteBanglaToEngNum(value);
    }
    valid_number = value.match("(?:\\+88|88)?(01[3-9]\\d{8})"); /*Regular expression to validate number*/
    /*When valid return without +88/88 number if exist*/
    if(valid_number){
        return valid_number[1]; /*valid number method return 3 with actual input*/
    } else {
        return false; /*return false when not valid*/
    }
}

/*
    * Bangla to English number conversion method
    * @author: Lincoln Mahmud
    * @company: Purple Patch
*/

function translteBanglaToEngNum( num_str ){
    var bengali = {"০":0, "১":1, "২":2, "৩":3, "৪":4, "৫":5, "৬":6, "৭":7, "৮":8, "৯":9};
    var changed_nun='';
    num_str.toString().split('').forEach(l => {
        if(isNaN(l)){changed_nun += bengali[l];}else{changed_nun +=l;}
    });
    return changed_nun;
}





scrollingElement = (document.scrollingElement || document.body)

function scrollSmoothToBottom(id) {
    $(scrollingElement).animate({
        scrollTop: document.body.scrollHeight
    }, 500);
}