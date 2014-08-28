<?php 
    function themeModal($arr){
        $slug = $arr['slug'];
        $name = $arr['name'];
        $wp = $arr['wp'];
        $ghost = $arr['ghost'];
        
        $wp_unavailable = ($wp == '#');
        $wp_status = $wp_unavailable?'coming':'available';
        $wp_onclick = $wp_unavailable?'onclick="event.preventDefault();"':'target="_blank"';
        
        $ghost_unavailable = ($ghost == '#');
        $ghost_status = $ghost_unavailable?'coming':'available';
        $ghost_onclick = $ghost_unavailable?'onclick="event.preventDefault();"':'target="_blank"';
?>
    <div class="md-modal md-effect-12" id="modal-<?php echo $slug; ?>">
        <div class="md-content">
            <button class="md-close">
                <span class="icon-close"></span>
            </button>
            <div class="md-wrapper">
                <!-- Information -->
                <div class="md-theme-info">
                    <h3><?php echo $name; ?></h3>
                    <div class="md-get-theme cf">
                        <?php if ($wp) { ?>
                            <a href="<?php echo $wp; ?>" class="get-wordpress-theme <?php echo $wp_status; ?>" <?php echo $wp_onclick; ?>>Wordpress</a>
                        <?php } ?>
                        <?php if ($ghost) { ?>
                            <a href="<?php echo $ghost; ?>" class="get-ghost-theme <?php echo $ghost_status; ?>" <?php echo $ghost_onclick; ?>>Ghost</a>
                        <?php } ?>
                    </div>
                </div>
                <!-- Demo -->
                <div class="md-iframe">
                    <div class="browser-dot dot-red"></div>
                    <div class="browser-dot dot-yellow"></div>
                    <div class="browser-dot dot-green"></div>
                    <iframe src="http://<?php echo $slug; ?>.rakugaki.me" id="iframe-<?php echo $slug; ?>" scrolling="no">
                        <div class="iframe-holder"></div>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
<?php
    }
?>