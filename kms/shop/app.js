console.clear();
change = function(){
  //var contents=['好好学习按时发噶啥','努力赚钱','不要被消灭！','努力活下去','成为最贫穷的人！'];
  var contents=['拿去花不用谢','摸摸头~乖哦','奥利给干他就完了','加油你会暴富的','努力实现梦想吧','一点心意收下吧','一定会更加幸福','有钱任性','我对钱不感兴趣'];
  var content = contents[Math.floor(Math.random() * contents.length)];
  $("input[name='body']").val(content);
}
changetype = function(){
    $("#amountchose").hide();
    $("#inputtip").hide();
    $("#amountinput").show();
    $("#choseamount").removeAttr("name");
    $("#inputamount").attr("name","amount");
}
check = function(){
    amount = parseFloat($("select[name='amount']").val());
    if(amount>0===false){
         amount=parseFloat($("input[name='amount']").val());
            if(amount>0===false){
                alert("请选择正确的金额");
                return false;
            } 
    }
    $("form").submit();
}
checkvalue = function(){
	amount = parseFloat($("input[name='amount']").val());
	$("input[name='amount']").val(amount);
}

$.ajax({
      type: "get",
      url: "getdata.php",
      dataType: "json",
      data: {
         "cb":Math.random(),
      },
      async: true,
      success: function(res) {
          if (res.code == 200) {
                html='<h3 class="title">打赏记录(显示最近5条)</h3>';
                $.each(res.data, function(index, value) {
                	if(value['mount']>=10){
                		html+="<div class=\"itemred\"><span class=\"price\">￥"+value['mount']+"</span><p class=\"item-name\">"+value['time']+"</p><p class=\"item-description\">来自于<b>"+value['buyer']+"</b>的留言:&nbsp;&nbsp;"+value['mark']+"</p></div>";  
                		
                	}else{
                		html+="<div class=\"item\"><span class=\"price\">￥"+value['mount']+"</span><p class=\"item-name\">"+value['time']+"</p><p class=\"item-description\">来自于"+value['buyer']+"的留言:&nbsp;&nbsp;"+value['mark']+"</p></div>";  
                	}
                                
                
              });
                html+='<div class="total">小计<span class="price">￥'+res['total']+'</span></div>';
                $(".products").html(html);
                html='共收到来自['+res['diff_buyer']+']位大爷的打赏，人民币金额共计['+res['total_money']+']元。对于您的慷慨相助无以回报！';
                $(".total1").html(html);

          } else {
            html='<h3 class="title">打赏记录加载失败</h3>';
              $(".products").html();
          }

      },
      error: function(a) {
              html='<h3 class="title">打赏记录加载失败</h3>';
              $(".products").html();        

      }
});    
