<?php

namespace app\controllers;

use app\components\RestSearchController;
use yii\rest\ActiveController;

class NewsTagController extends ActiveController
{
    use RestSearchController;

    public $modelClass = 'app\models\NewsTag';
}