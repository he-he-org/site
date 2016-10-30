<?php

namespace app\assets;

class HelpDonateAsset extends BaseAsset
{
    public $css = [
    ];
    public $js = [
        'js/help-donate.js',
    ];
    public $depends = [
        'app\assets\AppAsset'
    ];
}
