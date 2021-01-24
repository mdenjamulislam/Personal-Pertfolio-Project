$(document).ready (function(){
    $("nav ul li:nth-child(1)").click(function(){
        $(this).addClass('active');
        $("ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("nav ul li:nth-child(1)").removeClass('active');
        });
    });
    $("nav ul li:nth-child(2)").click(function(){
        $("#resume").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#resume").removeClass("show-section");
            $("nav ul li:nth-child(2)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(3)").click(function(){
        $("#skill").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#skill").removeClass("show-section");
            $("nav ul li:nth-child(3)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(4)").click(function(){
        $("#portfolio").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#portfolio").removeClass("show-section");
            $("nav ul li:nth-child(4)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(5)").click(function(){
        $("#contact").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#contact").removeClass("show-section");
            $("nav ul li:nth-child(5)").removeClass('active');
        });
    });
});

