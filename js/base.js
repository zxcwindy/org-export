$(function(){
    //title
    var title = $("h1.title").text();
    $("h1.title").remove();
    $("#preamble").append("<div class=\"container\"><h1>"+title+"</h1></div>").addClass("bs-header");

    //布局
    $("#content").addClass("container bs-docs-container");
    $("#table-of-contents").addClass("col-md-3");
    $("#table-of-contents > h2").remove();
    
    $(".outline-2").wrapAll("<div id=\"outline-2\" class=\"col-md-9\" role=\"main\"></div>");
    $("#table-of-contents,#outline-2").wrapAll("<div class=\"row\"></div>");
    //布局end

    //右边导航栏
    $("#text-table-of-contents").addClass("bs-sidebar hidden-print");
    $("#text-table-of-contents > ul").addClass("bs-sidenav");
    $("#text-table-of-contents  ul").addClass("nav");

    //内容标题
    $(".outline-2 > h2[id^='sec']").wrap("<div class=\"page-header\"></div>");

    //页脚
    $("#postamble").wrap("<footer class=\"bs-footer\" role=\"contentinfo\"></footer>").addClass("container");

    //css
    $("img").css("max-width","800px");
});
