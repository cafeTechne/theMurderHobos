
        var character1 = window.document.getElementById("character1");
        var character2 = window.document.getElementById("character2");
        var character3 = window.document.getElementById("character3");            var character4 = window.document.getElementById("character4");
        var character5 = window.document.getElementById("character5");
        var character6 = window.document.getElementById("character6");
        var character7 = window.document.getElementById("character7");
        var instructions = document.getElementById("instructionsForAboutPage");
        
        


        function hideAllSections(){

            character1.style.display = "none";
            character2.style.display = "none";
            character3.style.display = "none";
            character4.style.display = "none";
            character5.style.display = "none";
            character6.style.display = "none";
            character7.style.display = "none";
            instructions.style.display = "none";
        }


        function getCharacterInformation(characterName){
            if(characterName == "Pat") {hideAllSections(); character1.style.display = "block"; }
            if(characterName == "Tyler") {hideAllSections(); character2.style.display = "block"; }
            if(characterName == "Lindsey") {hideAllSections(); character3.style.display = "block"; }
            if(characterName == "JD") {hideAllSections(); character4.style.display = "block"; }
            if(characterName == "Jim") {hideAllSections(); character5.style.display = "block"; }
            if(characterName == "Garth") {hideAllSections(); character6.style.display = "block"; }
            if(characterName == "Urg") {hideAllSections(); character7.style.display = "block"; }
        }
        

        setTimeout(function clickOnStart(){document.getElementById("cn-button").click();}, 200);
            
        function hideTheH1Node(){
            var h1Node = window.document.getElementsByTagName("h1");
            h1Node[0].style.display = "none";
        }

        function showTheH1Node(){
            var h1Node = window.document.getElementsByTagName("h1");
            h1Node[0].style.display = "block";
        }

        function hideTheHeader(){
            var headerNode = window.document.getElementsByTagName("nav");
            headerNode[0].style.display = "none";            
        }
