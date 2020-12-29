
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
            character8.style.display = "none";
            character9.style.display = "none";
            character10.style.display = "none";

            instructions.style.display = "none";
        }


        //is it worth refactoring the function below into something less procedural and more concise if it does the job?
/**
 * This function displays the backstory of the character chosen and also left justifies the text so that it is more legible.
 * @param {*} characterName
 */
        function getCharacterInformation(characterName){
            if(characterName == "Pat") {hideAllSections(); character1.style.display = "block";
            document.querySelector("#character1 > h2").style.textAlign="left"}
            if(characterName == "Nils") {hideAllSections(); character2.style.display = "block";
            document.querySelector("#character2 > h2").style.textAlign="left"}
            if(characterName == "Lindsey") {hideAllSections(); character3.style.display = "block";
            document.querySelector("#character3 > h2").style.textAlign="left"}
            if(characterName == "Herb") {hideAllSections(); character4.style.display = "block";
            document.querySelector("#character4 > h2").style.textAlign="left"}
            if(characterName == "Matt") {hideAllSections(); character5.style.display = "block";
            document.querySelector("#character5 > h2").style.textAlign="left"}
            if(characterName == "Travis") {hideAllSections(); character6.style.display = "block";
            document.querySelector("#character6 > h2").style.textAlign="left"}
            if(characterName == "Urg") {hideAllSections(); character7.style.display = "block";
            document.querySelector("#character7 > h2").style.textAlign="left";}
            if(characterName == "Atmos") {hideAllSections(); character8.style.display = "block";
            document.querySelector("#character8 > h2").style.textAlign="left";}
            if(characterName == "Harriet") {hideAllSections(); character9.style.display = "block";
            document.querySelector("#character9 > h2").style.textAlign="left";}
            if(characterName == "Ben") {hideAllSections(); character10.style.display = "block";
            document.querySelector("#character10 > h2").style.textAlign="left";}

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
