<?php

namespace app\assets;

class HelpPackageAsset extends BaseAsset
{
    public $css = [
    ];
    public $js = [
        'js/help-package.js',
    ];
    public $depends = [
        'app\assets\AppAsset'
    ];
}
