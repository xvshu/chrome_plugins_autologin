var ur_name_c = "";
var ur_pwss_c = "";
var ti_url="";
chrome.tabs.getSelected(null, function (tab) {
	console.log("=>url:"+tab.url);
	ti_url=tab.url;
});
chrome.storage.local.get("ur_name", function(obj) {
	console.log("=>ur_name:"+obj.ur_name);
	ur_name_c=obj.ur_name;
});
chrome.storage.local.get("ur_pwss", function(obj) {
	console.log("=>ur_pwss:"+obj.ur_pwss);
	ur_pwss_c=obj.ur_pwss;
});




//保存
document.getElementById('save_pass_bt').onclick = function(){
	var ur_name = document.getElementById('ur_name').value;
	var ur_pwss = document.getElementById('ur_pwss').value;
	if(ur_name=="" || ur_pwss==""){
		alert("用户名称，用户密码必须填写！");
		return;
	}
	var u_p ={
		"ur_name":ur_name,
		"ur_pwss":ur_pwss
	}
	chrome.storage.local.set(u_p, function(obj) {
		alert("存储成功");
	});	
	chrome.storage.local.get("ur_name", function(obj) {
		console.log("=>ur_name:"+obj.ur_name);
		ur_name_c=obj.ur_name;
	});
	chrome.storage.local.get("ur_pwss", function(obj) {
		console.log("=>ur_pwss:"+obj.ur_pwss);
		ur_pwss_c=obj.ur_pwss;
	});	
					
}




//保存
document.getElementById('auso_login_bt').onclick = function (){
	
	chrome.storage.local.get("ur_name", function(obj) {
		console.log("=>ur_name:"+obj.ur_name);
		ur_name_c=obj.ur_name;
	});
	chrome.storage.local.get("ur_pwss", function(obj) {
		console.log("=>ur_pwss:"+obj.ur_pwss);
		ur_pwss_c=obj.ur_pwss;
	});

	if(ur_name_c == undefined || ur_pwss_c == undefined || ur_name_c=="" || ur_pwss_c==""){
		alert("用户名称，用户密码为空，不能自动填写！");
		return;
	}
	
	chrome.tabs.executeScript(null,{code:"document.getElementById('username').value='"+ur_name_c+"'"});
	chrome.tabs.executeScript(null,{code:"document.getElementById('password').value='"+ur_pwss_c+"'"});

}