// ==UserScript==
// @name         Atualiza SOLMAN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Atualizar dados do solman
// @author       Gabriel Lucas de Toledo Ribeiro
// @match        *solman.castgroup.com.br*/sap(*=)*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';
    console.debug("Atualizando a cada 20 segundos...");
    function atualiza(){
        try{
            console.debug(Date.now() + " Atualizando... ");
            var crmfrm = document.getElementById('CRMApplicationFrame');
            console.debug("crmfrm="+crmfrm);
            if(crmfrm!==null){
                var workaf = crmfrm.contentDocument.getElementById("WorkAreaFrame1");
                console.debug("workaf="+workaf);
                if(workaf !== null){
                    var btn = workaf.contentDocument.getElementById("C20_W63_V64_V66_Refresh");
                    console.debug("btn="+btn);
                    if(btn !== null){
                        btn.click();
                    }
                }
            }
        }catch(e){
            console.debug("ERRO: "+e);
        }
        setTimeout(atualiza, 20000);
    }
    atualiza();
})();