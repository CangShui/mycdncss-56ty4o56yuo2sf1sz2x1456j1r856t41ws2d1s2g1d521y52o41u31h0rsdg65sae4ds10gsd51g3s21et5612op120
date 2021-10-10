if (E.bgm.audio && E.screen == 'pc') {
    function lcz() {
       
        
       
        this.mould = '<ul style="height: 184px;list-style: none;position: relative;line-height: 1.4;padding: 0 15px;overflow-y: hidden;display:none;"></ul>',
        
        this.destory = function() {}
       }
       
    var bgm = $("#bgm"), bgm_title = $("#bgm-title"), listen = $("#listen"), listen_temp = $("#listen #temp"), listen_list = $("#listen #playlist"), listen_cover = $("#listen .cover"), listen_title = $("#listen .title"), listen_items = $("#listen .list .items"), listen_audio = $("#listen audio.bgm"), list_page_btn = $(".list-page-btn"), song_msg = $("#song-msg"), video = $("#bgvideo video"), btn_play = $("#listen .play"), btn_rewind = $("#listen .rewind"), btn_fastforward = $("#listen .fastforward"), btn_onlist = $("#listen .onlist"), btn_onsource = $("#listen #onsource"), repeat = localStorage.repeat || 0, shuffle = localStorage.shuffle || "on", continous = !0, autoplay = !0, time = new Date, isdelay = !1, timeout = !1, item_num = 0, null_num = 0, old_data, listLi, temp_id, isPlaying, playCounts, currentTrack, clearautoplay, song_name, list_height, list_page_num, audio = listen_audio[0];
    bgm.on("click", function(a) {
        _this = $(this);
        $("#bgm.show")[0] ? (listen.slideUp(150),
        _this.removeClass("show")) : (listen.show(),
        _this.addClass("show"));
        $(document).one("click", function() {
            listen.slideUp(150);
            _this.removeClass("show")
        });
        a.stopPropagation();
        listen.on("click", function(a) {
            a.stopPropagation()
        })
    });
   
}

//显示ip节点
$(function() {
        $.get("/cdn-cgi/trace",
        function(data) {
                var sip = data.match(/(ip=?)(\S*)/)[2];
                var str = data.match(/(colo=?)(\S*)/)[2];
                var every = [['HKG', 'CloudFlare香港'], ['MFM', 'CloudFlare澳门'], ['BKK', 'CloudFlare曼谷'], ['TPE', 'CloudFlare台北'], ['NRT', 'CloudFlare东京'], ['KIX', 'CloudFlare大阪'], ['ICN', 'CloudFlare仁川'], ['LHR', 'CloudFlare伦敦'], ['SIN', 'CloudFlare新加坡'], ['CDG', 'CloudFlare巴黎'], ['FRA', 'CloudFlare法兰克福'], ['KUL', 'CloudFlare马来西亚'], ['LAX', 'CloudFlare洛杉矶'], ['SJC', 'CloudFlare圣何塞'], ['KBP', 'CloudFlare乌克兰'], ['PRG', 'CloudFlare布拉格']];
                for (var i = 0; i < every.length; i++) {
                        if (str == every[i][0]) {
                                $("#result").append("当前CDN节点:[" + str + "]" + every[i][1] + ",本地IP:" + sip);
                        }
                }
                
        });
})

//广告
var pCount=parseInt($('figure').length-1)
rand= Math.floor(Math.random()*(pCount+1));
$('figure:eq('+rand+')').attr('id','googlead')
$("#googlead").append('<iframe runat="server" src="https://cangshui.net/-otherweb/otherlink301/ad.html" width="300" height="242" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>');

//控制台
console.clear();
console.log('%c访问即代表遵守本站Cookies! ','background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
console.log('%c如有不适,请您直接关闭本页面. ','background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
console.log('%c页面加载完毕消耗了'+Math.round(performance.now()*100)/100+'ms','background:#fff;color:#333;text-shadow:0 0 2px #eee,0 0 3px #eee,0 0 3px #eee,0 0 2px #eee,0 0 3px #eee;');
console.log("%c「Maybe you are my God」", "background:black; color:white; font-size:25px");
