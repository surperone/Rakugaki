<div id="about" class="slide">
    <div class="info-trigger show-info">
        <a data-info="about">About Me</a>
    </div>
    <div class="slide-wrapper" id="container-resume">
        
        <!-- Start #info-about -->
        
        <div class="works-info" id="info-about">
            <div class="works-info-wrapper">
                <div class="works-info-content-wrapper">
                    <div class="works-info-content">
                        <p>Welcome to <span style="color:#D05C5A;">Rakugaki.me</span>!</p>
                        <p>This website exhibits a selected collection of <span style="color:#FFB900;">Art Chen</span>'s designing and coding works since A.D.2014.</p>
                        <p><span style="color:#FFB900;">Art Chen</span> is currently a full-time student, developer and amateur designer.</p>
                        <div class="works-copyright">
                            <p>Click on <span class="icon-list" style="display:inline-block;font-size:1.4em;vertical-align:middle;color:#fff;"></span> for external navigation.</p>
                            <p>Click on <span class="icon-grid" style="display:inline-block;color:#fff;padding:0px 2px;"></span> for internal navigation.</p>
                            <p>Use <span class="icon-arrow-left" style="display:inline-block;color:#fff;"></span> and <span class="icon-arrow-right" style="display:inline-block;color:#fff;"></span> to travel between pages.</p>
                            <p>Touch control supported.</p>
                            <p>&copy; Art Chen <?php echo date("Y"); ?>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
                <div class="close-info-window" data-info="about">
                    <span class="icon-cross"></span>
                    <span>Close</span>
                </div>
            </div>
        </div>
        
        <!-- End #info-about -->
        
        <!-- Start .logo -->
        
        <div class="logo">
            <div class="namecard" id="namecard">
                <div class="namecard-name">Art Chen</div>
                <div class="namecard-title">
                    <span>Developer</span>
                    <span>&</span>
                    <span>Designer</span>
                    <p>University of Wisconsin - Madison</p>
                </div>
                <div class="namecard-social">
                    <a href="https://twitter.com/otakism" class="twitter" target="_blank"><span class="icon-twitter"></span></a>
                    <a href="https://plus.google.com/113350917149465350488" class="googleplus" target="_blank"><span class="icon-googleplus"></span></a>
                    <a href="http://weibo.com/otakism" class="sina-weibo" target="_blank"><span class="icon-sina-weibo"></span></a>
                    <a href="https://github.com/artchen" class="github" target="_blank"><span class="icon-github"></span></a>
                </div>
                <a class="view-resume md-trigger" data-modal="resume">View Résumé</a>
                <a class="view-resume-small" href="art.chen_resume.pdf" target="_blank">View Résumé</a>
            </div>
        </div> 
        
        <!-- End .logo -->
        
        <div class="md-modal md-effect-12" id="modal-resume">
            <div class="md-content">
                <button class="md-close">
                    <span class="icon-close"></span>
                </button>
                <div class="md-wrapper">
                    <div class="resume-wrapper">
                        <div class="resume-paper">
                            <?php include 'resume.php' ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
    
</div>