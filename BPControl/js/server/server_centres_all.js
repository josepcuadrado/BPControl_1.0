function server_centres_all(){
	
$.getJSON('http://app2.hesoftgroup.eu/admin/restOrganizationList', function(center){
   
var di ='<div> ';
	 
$.each( center, function( index, item){
	
	di+=' <img class="zoom" style="max-width:300px;height:200px; border:hidden; border-radius:6px;box-shadow: 0 20px 10px -10px rgba(0,0,0,0.4);" id="logoc" src="http://app2.hesoftgroup.eu/admin/restOrganizationDownloadLogo/'+ item.id +'";  /><p style="margin:10px; margin-top:20px; font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif; width:80%;font-size:20px;text-align:left;color:#A00;font-weight:bold;margin-left:20px;">'+(item.description || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;">'+item.name+'</p><p style="	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;margin: 10px;width:80%;text-align:left;margin-left:20px;">'+(item.description || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.reportText || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactAddress || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactComments || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactPerson || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactPhone || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactWebpage || '<empty>') + '</p><p style="margin: 10px;width:80%;text-align:left;margin-left:20px;	font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, sans-serif;">'+(item.contactEmail || '<empty>') + '</p><br> <hr id="barra"/><br>';
     });
	
di+='</div>';
$("#server_centres_all").html(di);	
});

}


