<!DOCTYPE html>
<?php require_once('functions/snippets.php'); ?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <title>Rakugaki</title>
    <meta name="description" content="Art Chen's portfolio" />
    <meta name="keywords" content="rakugaki,web,javascript,html,css,jquery,php,development,design,theme,wordpress,ghost,freelancer" />
    <link rel="icon" type="image/ico" href="./favicon.ico" />
    <script type="text/javascript" src="//use.typekit.net/onh5nft.js"></script>
    <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
    <link rel="stylesheet" type="text/css" media="all" href="css/perfect-scrollbar.css" />
    <link rel="stylesheet" type="text/css" media="all" href="style.css" />
    <script src="./js/jquery.min.js" type="text/javascript"></script>
    <script src="./js/modernizr.custom.js" type="text/javascript"></script>
    <script src="./js/jquery.mousewheel.js" type="text/javascript"></script>
    <script src="./js/jquery.easing.1.3.min.js" type="text/javascript"></script>
    <script src="./js/jquery.address.min.js" type="text/javascript"></script>
    <script src="./js/jquery.mobile.custom.min.js" type="text/javascript"></script>
    <script src="./js/perfect-scrollbar.js" type="text/javascript"></script>
    <script src="./js/all.js" type="text/javascript"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-34114327-2', 'auto');
      ga('send', 'pageview');

    </script>
</head>
<body>
    
<div id="wrapper-all">
    
    <div class="plot"></div>

    <div id="st-container" class="st-container">
        
        <nav class="st-menu st-effect-2">
            <?php include 'menu.php';?>
        </nav>
        
        <!-- content push wrapper -->
        
        <div class="st-pusher">
            <div class="st-content">
                <div class="st-content-inner">
                    
                    <!-- Site Nav Trigger -->
                    <div class="site-nav" id="st-trigger-effects">
                        <div class="nav-trigger trigger" data-effect="st-effect-2">
                            <span class="icon-list"></span>
                        </div>
                    </div>
                    
                    <!-- Slide Nav -->
                    <div class="slide-nav cf">
                        <div class="prev-button special-anchor trigger">
                            <span class="icon-arrow-left"></span>
                        </div>
                        <div class="select-button trigger" data-slide="index">
                            <span class="icon-grid"></span>
                        </div>
                        <div class="next-button special-anchor trigger">
                            <span class="icon-arrow-right"></span>
                        </div>
                    </div>
                    
                    <div class="slide-index">
                        <ul>
                            <li><a class="special-anchor home-button">Welcome</a></li>
                            <!--<li><a data-slide="springtide" class="special-anchor-direct">Springtide</a></li>-->
                            <li><a data-slide="shiro" class="special-anchor-direct">Shiro</a></li>
                            <li><a data-slide="kcalb" class="special-anchor-direct">Kcalb</a></li>
                            <li><a data-slide="yabu-no-naka" class="special-anchor-direct">Yabu no Naka</a></li>
                            <li class="list-end"><a data-slide="about" class="special-anchor-direct">About</a></li>
                        </ul>
                    </div>

                    <div class="slider">

                        <div class="slides">
                            
                            <!-- Welcome -->
                            <?php include 'slide-welcome.php'; ?>
                            
                            <!-- Springtide -->
                            <?php //include 'slide-springtide.php'; ?>
                            
                            <!-- Shiro -->
                            <?php include 'slide-shiro.php'; ?>

                            <!-- Kcalb -->
                            <?php include 'slide-kcalb.php'; ?>
                            
                            <!-- Yabu no Naka -->
                            <?php include 'slide-yabu.php'; ?>
                            
                            <!-- About Me -->
                            <?php include 'slide-about.php';?>

                        </div> <!-- END .slides -->
                        
                    </div> <!-- END .slider -->
                    
                </div> <!-- END .st-content-inner -->
            </div> <!-- END .st-content -->
        </div> <!-- END .st-pusher -->
    </div> <!-- END #st-container -->

</div> <!-- END #wrapper-all -->
    
    <script src="./js/sidebarEffects.js" type="text/javascript"></script>

</body>

</html>